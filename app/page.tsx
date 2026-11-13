import { AppLayout } from "@/components/app";
import { Cta, Hero, Workflow } from "@/components/pages/app/home";

export default function Home() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-16">
        <Hero />
        <Workflow />
        <Cta />
      </div>
    </AppLayout>
  );
}
