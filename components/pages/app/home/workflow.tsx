const steps = [
  {
    title: "Connect",
    description:
      "Bring your autonomous systems and operational data into one place.",
  },
  {
    title: "Understand",
    description:
      "Use AI to identify patterns, investigate issues, and surface insights.",
  },
  {
    title: "Act",
    description:
      "Coordinate actions, approve changes, and verify outcomes with human oversight.",
  },
];

export function Workflow() {
  return (
    <section id="workflow">
      <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        How it works
      </h2>
      <ol className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex items-start gap-4 rounded-lg border bg-card p-6"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
              {index + 1}
            </span>
            <div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
