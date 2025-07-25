import CheckLists from "@/components/checklists";
import CourseFeatures from "@/components/course-features";
import CourseInstructor from "@/components/course-instructor";
import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import ProductTrailer from "@/components/product-trailer";
import { Container } from "@/components/ui/container";
import { getData } from "./actions";

export default async function Home() {
  const data = await getData();
  const instructor = data.sections.find((s) => s.type === "instructors");
  const features = data.sections.find((s) => s.type === "features");
  return (
    <div className="mx-auto flex min-h-dvh flex-col space-y-5">
      <HeroSection title={data.title} description={data.description} />
      <Container className="flex h-full gap-16 *:h-full">
        <div className="flex-1 space-y-10 *:space-y-5 [&_h2]:text-2xl [&_h2]:font-semibold">
          {instructor && <CourseInstructor instructor={instructor} />}
          {features && <CourseFeatures features={features} />}
        </div>
        <aside className="w-2/6 space-y-5">
          <ProductTrailer media={data.media} />
          <CTASection cta={data.cta_text} />
          <CheckLists checklists={data.checklist} />
        </aside>
      </Container>
    </div>
  );
}
