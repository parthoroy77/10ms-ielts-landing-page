import CheckLists from "@/components/checklists";
import CourseDetails from "@/components/course-details";
import CourseExclusiveFeatures from "@/components/course-exclusive-features";
import CourseFeatures from "@/components/course-features";
import CourseInstructor from "@/components/course-instructor";
import CoursePointers from "@/components/course-pointers";
import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import ProductTrailer from "@/components/product-trailer";
import { Container } from "@/components/ui/container";
import { getSectionByType } from "@/lib/utils";
import { getData } from "./actions";

export default async function Home() {
  const data = await getData({ lang: "bn" });

  // Sections
  const instructor = getSectionByType(data.sections, "instructors");
  const features = getSectionByType(data.sections, "features");
  const pointers = getSectionByType(data.sections, "pointers");
  const exclusiveFeatures = getSectionByType(data.sections, "feature_explanations");
  const courseDetails = getSectionByType(data.sections, "about");

  return (
    <div className="mb-20 flex min-h-dvh flex-col space-y-5">
      <HeroSection title={data.title} description={data.description} />
      <Container className="relative flex h-full gap-16 *:h-full">
        <div className="flex-1 space-y-10 *:space-y-5 [&_h2]:text-2xl [&_h2]:font-semibold">
          {instructor && <CourseInstructor instructor={instructor} />}
          {features && <CourseFeatures features={features} />}
          {pointers && <CoursePointers pointers={pointers} />}
          {exclusiveFeatures && <CourseExclusiveFeatures exclusiveFeatures={exclusiveFeatures} />}
          {courseDetails && <CourseDetails details={courseDetails} />}
        </div>
        <aside className="sticky top-14 h-screen w-2/6 space-y-5">
          <ProductTrailer media={data.media} />
          <CTASection cta={data.cta_text} />
          <CheckLists checklists={data.checklist} />
        </aside>
      </Container>
    </div>
  );
}
