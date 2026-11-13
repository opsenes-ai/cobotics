import {
  Activity,
  Brain,
  Network,
  Search,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const features: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Connected Systems",
    description:
      "Bring autonomous systems and their operational data into one shared workspace.",
    icon: Network,
  },
  {
    title: "Live Visibility",
    description:
      "Monitor system health, performance, and activity as operations unfold.",
    icon: Activity,
  },
  {
    title: "Operational Intelligence",
    description:
      "Use AI to identify patterns, explain changes, and surface actionable insights.",
    icon: Brain,
  },
  {
    title: "Issue Investigation",
    description:
      "Trace problems through related events, system context, and supporting evidence.",
    icon: Search,
  },
  {
    title: "Coordinated Actions",
    description:
      "Plan responses, execute approved changes, and verify outcomes across systems.",
    icon: Workflow,
  },
  {
    title: "Human Oversight",
    description:
      "Set permissions, review recommendations, and control when AI can act.",
    icon: ShieldCheck,
  },
];

export function Features() {
  return (
    <section id="features">
      <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        Features
      </h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, icon: Icon }) => (
          <li key={title} className="rounded-lg border bg-card p-6">
            <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
