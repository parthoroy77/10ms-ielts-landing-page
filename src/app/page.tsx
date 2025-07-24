import CheckLists from "@/components/checklists";
import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import { Container } from "@/components/ui/container";
import { getData } from "./actions";

export default async function Home() {
  const data = await getData();
  return (
    <div className="mx-auto flex min-h-dvh flex-col space-y-5">
      <HeroSection title={data.title} description={data.description} />
      <Container className="flex h-full gap-5 *:h-full">
        <div className="flex-1"></div>
        <aside className="w-2/5 space-y-5">
          <CTASection cta={data.cta_text} />
          <CheckLists checklists={data.checklist} />
        </aside>
      </Container>
    </div>
  );
}
