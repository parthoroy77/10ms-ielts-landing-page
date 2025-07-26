import CheckLists from "@/components/checklists";
import CourseDetails from "@/components/course-details";
import CourseExclusiveFeatures from "@/components/course-exclusive-features";
import CourseFeatures from "@/components/course-features";
import CourseInstructor from "@/components/course-instructor";
import CoursePointers from "@/components/course-pointers";
import CTASection from "@/components/cta-section";
import FAQ from "@/components/faq";
import ProductTrailer from "@/components/product-trailer";
import { Container } from "@/components/ui/container";
import { getSectionByType } from "@/lib/utils";
import { Data } from "@/types";

interface Props {
  data: Data;
}
const CourseContainer = ({ data }: Props) => {
  // Sections
  const instructor = getSectionByType(data.sections, "instructors");
  const features = getSectionByType(data.sections, "features");
  const pointers = getSectionByType(data.sections, "pointers");
  const exclusiveFeatures = getSectionByType(data.sections, "feature_explanations");
  const courseDetails = getSectionByType(data.sections, "about");
  const faq = getSectionByType(data.sections, "faq");

  return (
    <Container className="relative flex h-full flex-col-reverse gap-16 *:h-full md:flex-row">
      <div className="flex-1 space-y-10 *:space-y-5 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:md:text-2xl">
        {instructor && <CourseInstructor instructor={instructor} />}
        {features && <CourseFeatures features={features} />}
        {pointers && <CoursePointers pointers={pointers} />}
        {exclusiveFeatures && <CourseExclusiveFeatures exclusiveFeatures={exclusiveFeatures} />}
        {courseDetails && <CourseDetails details={courseDetails} />}
        {faq && <FAQ faq={faq} />}
      </div>
      <aside className="top-14 h-screen space-y-10 *:space-y-3 md:sticky md:w-2/6 md:space-y-5 *:md:border *:md:p-4">
        <ProductTrailer media={data.media} />
        <CTASection cta={data.cta_text} />
        <CheckLists checklists={data.checklist} />
      </aside>
    </Container>
  );
};

export default CourseContainer;
