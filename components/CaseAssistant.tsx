'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

type Question = {
  id: string;
  text: string;
  placeholder: string;
  multiline?: boolean;
  optional?: boolean;
  hint?: string;
};

type Message = {
  type: 'assistant' | 'user';
  content: string;
};

// ─── Questions ───────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    id: 'title',
    text: 'Olá! Vou te ajudar a documentar seu próximo case de portfólio.\n\nVamos começar: qual é o nome do projeto?',
    placeholder: 'ex: Carteira Digital – UI Redesign',
  },
  {
    id: 'role',
    text: 'Qual foi o seu papel nesse projeto?',
    placeholder: 'ex: Product Designer, UX Lead, Growth Designer',
  },
  {
    id: 'company',
    text: 'Para qual empresa ou cliente, e em que ano?',
    placeholder: 'ex: TIM (2023)',
  },
  {
    id: 'context',
    text: 'Me conta o contexto do projeto.\n\nO que era esse produto ou empresa? Para quem foi feito?',
    placeholder: 'Descreva o produto, o público e o momento da empresa...',
    multiline: true,
  },
  {
    id: 'challenge',
    text: 'Qual era o principal desafio ou problema a ser resolvido?',
    placeholder: 'Qual dor existia? O que precisava mudar?',
    multiline: true,
  },
  {
    id: 'process_1',
    text: 'Agora me conta sobre o seu processo de design.\n\nQual foi a primeira etapa?\n\nUse o formato:\nNome da etapa — O que você fez',
    placeholder: 'ex: Discovery — Realizei entrevistas com 5 usuários para mapear os pontos de fricção.',
    multiline: true,
    hint: 'Formato: Nome — Descrição',
  },
  {
    id: 'process_2',
    text: 'Segunda etapa do processo.',
    placeholder: 'ex: Análise — Mapeei os fluxos existentes e identifiquei 3 oportunidades de melhoria.',
    multiline: true,
    hint: 'Formato: Nome — Descrição',
  },
  {
    id: 'process_3',
    text: 'Terceira etapa do processo.\n\n(opcional — pode pular)',
    placeholder: 'ex: Ideação — Criei 20 sketches e priorizei as soluções com o time.',
    multiline: true,
    optional: true,
    hint: 'Formato: Nome — Descrição',
  },
  {
    id: 'process_4',
    text: 'Quarta etapa do processo.\n\n(opcional — pode pular)',
    placeholder: 'ex: Validação — Testamos protótipos com usuários e iteramos em 2 rodadas.',
    multiline: true,
    optional: true,
    hint: 'Formato: Nome — Descrição',
  },
  {
    id: 'solution',
    text: 'Qual foi a solução que você criou?\n\nO que você entregou? Quais foram as principais decisões de design?',
    placeholder: 'Descreva as principais decisões de design e a entrega final...',
    multiline: true,
  },
  {
    id: 'results',
    text: 'Quais foram os resultados ou impacto do projeto?',
    placeholder: 'ex: Redução de 40% no abandono do fluxo, NPS subiu de 32 para 58...',
    multiline: true,
  },
  {
    id: 'learnings',
    text: 'O que você aprendeu com esse projeto?',
    placeholder: 'Principais aprendizados técnicos, de processo ou de produto...',
    multiline: true,
  },
  {
    id: 'tools',
    text: 'Quais ferramentas você usou no projeto?',
    placeholder: 'ex: Figma, Maze, Hotjar, Notion, Miro',
  },
  {
    id: 'placeholder',
    text: 'Qual é a cor de destaque do projeto?\n\nEssa cor aparece como fundo da imagem no grid do portfólio.',
    placeholder: 'ex: #8B2BC2',
    hint: 'Código hexadecimal',
  },
  {
    id: 'slug',
    text: 'Por último: qual será o identificador do projeto na URL?\n\nSó letras minúsculas e hífens, sem acentos.',
    placeholder: 'ex: meu-projeto',
    hint: 'Acessível em: /portfolio/seu-slug',
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseProcessStep(raw: string): { name: string; description: string } {
  const match = raw.match(/^(.+?)\s*[—–-]{1,2}\s*([\s\S]+)$/);
  if (match) return { name: match[1].trim(), description: match[2].trim() };
  return { name: 'Etapa', description: raw.trim() };
}

function escapeTemplateLiteral(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function generateCode(answers: Record<string, string>): string {
  const processSteps = ['process_1', 'process_2', 'process_3', 'process_4']
    .filter((id) => answers[id])
    .map((id) => parseProcessStep(answers[id]));

  const tools = answers.tools
    .split(/,\s*/)
    .map((t) => t.trim())
    .filter(Boolean);

  const subtitle = `${answers.role} (${answers.company})`;
  const firstSentence = answers.context.split(/[.!?]/)[0].trim();
  const e = escapeTemplateLiteral;

  const processLines = processSteps
    .map((s) => `      { name: \`${e(s.name)}\`, description: \`${e(s.description)}\` }`)
    .join(',\n');

  return `{
  slug: "${answers.slug}",
  title: \`${e(answers.title)}\`,
  subtitle: \`${e(subtitle)}\`,
  description: \`${e(firstSentence)}\`,
  image: "/projects/${answers.slug}.svg",
  placeholder: "${answers.placeholder}",
  caseStudy: {
    context: \`${e(answers.context)}\`,
    challenge: \`${e(answers.challenge)}\`,
    process: [
${processLines}
    ],
    solution: \`${e(answers.solution)}\`,
    results: \`${e(answers.results)}\`,
    learnings: \`${e(answers.learnings)}\`,
    tools: [${tools.map((t) => `"${t}"`).join(', ')}],
  },
},`;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function CaseAssistant() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<Message[]>([
    { type: 'assistant', content: QUESTIONS[0].text },
  ]);
  const [input, setInput] = useState('');
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const endRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const singleInputRef = useRef<HTMLInputElement>(null);

  const q = QUESTIONS[step];
  const generatedCode = done ? generateCode(answers) : '';
  const progress = done ? 100 : Math.round((step / QUESTIONS.length) * 100);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, done]);

  useEffect(() => {
    if (done) return;
    if (q.multiline) {
      textareaRef.current?.focus();
    } else {
      singleInputRef.current?.focus();
    }
  }, [step, done, q.multiline]);

  function advance(value: string) {
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);

    const userMsg: Message = { type: 'user', content: value || '(pulado)' };
    const nextStep = step + 1;

    if (nextStep >= QUESTIONS.length) {
      setMessages((prev) => [...prev, userMsg]);
      setDone(true);
      return;
    }

    const assistantMsg: Message = {
      type: 'assistant',
      content: QUESTIONS[nextStep].text,
    };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setStep(nextStep);
    setInput('');
  }

  function handleSubmit() {
    if (!input.trim() && !q.optional) return;
    advance(input.trim());
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey && !q.multiline) {
      e.preventDefault();
      handleSubmit();
    }
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey) && q.multiline) {
      e.preventDefault();
      handleSubmit();
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleRestart() {
    setStep(0);
    setAnswers({});
    setMessages([{ type: 'assistant', content: QUESTIONS[0].text }]);
    setInput('');
    setDone(false);
    setCopied(false);
  }

  return (
    <div className="flex h-screen flex-col bg-bg text-text">
      {/* ── Header ── */}
      <header className="border-b border-subtle bg-bg/90 backdrop-blur">
        <div className="container-site flex h-16 items-center gap-4">
          <span className="text-sm font-semibold text-text">Assistente de Cases</span>
          {!done && (
            <span className="text-xs text-muted">
              {step + 1} / {QUESTIONS.length}
            </span>
          )}
          <div className="ml-auto h-1 w-32 overflow-hidden rounded-pill bg-surface-2">
            <div
              className="h-full rounded-pill bg-accent-orange transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* ── Messages ── */}
      <div className="flex-1 overflow-y-auto">
        <div className="container-site space-y-5 py-8">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {msg.type === 'assistant' && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-orange text-xs font-bold text-white">
                  F
                </div>
              )}
              <div
                className={`max-w-[82%] rounded-card px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                  msg.type === 'assistant' ? 'bg-surface text-text' : 'bg-surface-2 text-text'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* ── Generated code ── */}
          {done && (
            <div className="mt-4 rounded-card border border-subtle bg-surface p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="heading text-base text-text">Case gerado!</h3>
                  <p className="mt-1 text-xs text-muted">
                    Cole no array{' '}
                    <code className="font-mono text-accent-orange">projects</code> em{' '}
                    <code className="font-mono text-accent-orange">data/projects.ts</code>
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="rounded-pill bg-accent-orange px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110"
                  >
                    {copied ? 'Copiado!' : 'Copiar código'}
                  </button>
                  <button
                    onClick={handleRestart}
                    className="rounded-pill bg-surface-2 px-4 py-2 text-xs font-medium text-text transition hover:bg-[#34343a]"
                  >
                    Novo case
                  </button>
                </div>
              </div>
              <pre className="overflow-x-auto rounded-[12px] border border-subtle bg-bg p-4 text-xs leading-relaxed text-muted">
                <code>{generatedCode}</code>
              </pre>
            </div>
          )}

          <div ref={endRef} />
        </div>
      </div>

      {/* ── Input ── */}
      {!done && (
        <div className="border-t border-subtle bg-bg">
          <div className="container-site py-4">
            {q.hint && <p className="mb-2 text-xs text-muted">{q.hint}</p>}
            <div className="flex items-end gap-3">
              {q.multiline ? (
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={q.placeholder}
                  rows={3}
                  className="flex-1 resize-none rounded-card border border-subtle bg-surface px-4 py-3 text-sm text-text placeholder:text-muted focus:border-[rgba(255,255,255,0.2)] focus:outline-none transition"
                />
              ) : (
                <input
                  ref={singleInputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={q.placeholder}
                  className="flex-1 rounded-pill border border-subtle bg-surface px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-[rgba(255,255,255,0.2)] focus:outline-none transition"
                />
              )}
              <div className="flex shrink-0 gap-2">
                {q.optional && (
                  <button
                    onClick={() => advance('')}
                    className="rounded-pill bg-surface-2 px-4 py-2.5 text-sm font-medium text-muted transition hover:text-text"
                  >
                    Pular
                  </button>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={!input.trim() && !q.optional}
                  className="rounded-pill bg-accent-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Enviar
                </button>
              </div>
            </div>
            {q.multiline && (
              <p className="mt-2 text-xs text-muted">Ctrl + Enter para enviar</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
