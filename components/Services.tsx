const services = [
  ["End-to-end product design", "Consultoria"],
  ["UX/UI design", "Product strategy"],
  ["Sites e landing pages com Framer", "Branding, identidade visual"],
];

export default function Services() {
  return (
    <section id="servicos" className="border-t border-subtle py-16 md:py-24">
      <div className="container-site">
        <h2 className="heading text-[clamp(2rem,6vw,3rem)] leading-tight">
          Serviços
        </h2>

        <div className="mt-10 divide-y divide-subtle">
          {services.map(([left, right], i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-2 py-5 md:grid-cols-2 md:gap-8"
            >
              <span className="text-base font-medium text-text md:text-lg">
                {left}
              </span>
              <span className="text-base font-medium text-text md:text-lg">
                {right}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
