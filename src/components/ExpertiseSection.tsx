const EXPERTISE_AREAS = [
  {
    title: "C# & .NET",
    description:
      "Construção de APIs, serviços e aplicações backend com C#, .NET, ASP.NET Core, Minimal APIs e Entity Framework Core.",
    items: ["C#", ".NET", "ASP.NET Core", "EF Core"],
  },
  {
    title: "Backend Engineering",
    description:
      "Arquitetura de APIs REST, autenticação, bancos relacionais, integrações, observabilidade e código preparado para produção.",
    items: ["REST APIs", "SQL Server", "Docker", "CI/CD"],
  },
  {
    title: "Full Stack Delivery",
    description:
      "Experiência ligando backend moderno com interfaces React, TypeScript e UX objetiva para produtos reais.",
    items: ["React", "TypeScript", "Tailwind", "Vite"],
  },
  {
    title: "Production Mindset",
    description:
      "Base sólida em Java/Spring, sistemas críticos e DevOps aplicada ao ecossistema .NET com foco em entrega, manutenção e escalabilidade.",
    items: ["Clean Architecture", "Security", "Cloud", "Automation"],
  },
];

const ExpertiseSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-primary text-sm">{">"}</span>
          <h2 className="text-2xl font-heading font-bold text-foreground">
            .NET Positioning
          </h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {EXPERTISE_AREAS.map((area, index) => (
            <article
              key={area.title}
              className="rounded-lg border border-border bg-card p-6 card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="font-mono text-base font-semibold text-primary mb-3">
                {area.title}
              </h3>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-4">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {area.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 text-xs font-mono rounded-md bg-secondary text-accent border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
