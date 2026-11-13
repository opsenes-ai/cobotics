import { AppLayout } from "@/components/app";
import { Cta, Features, Hero, Workflow } from "@/components/pages/app/home";

export default function Home() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-16">
        <Hero />
        <Features />
        <Workflow />
        <Cta />
      </div>
    </AppLayout>
  );
}
