import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AboutValue, Section } from "@/types";
interface Props {
  details: Section;
}
const CourseDetails = ({ details }: Props) => {
  return (
    <div>
      <h2>{details.name}</h2>
      <Accordion
        type="single"
        collapsible
        className="rounded-md md:border md:px-4"
        defaultValue={(details.values as AboutValue[])[0].id}
      >
        {(details.values as AboutValue[]).map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="[&_h2]:!md:text-lg font-medium hover:no-underline [&_b]:font-semibold [&_h2]:!text-sm">
              <div dangerouslySetInnerHTML={{ __html: item.title }} />
            </AccordionTrigger>
            <AccordionContent>
              <div
                dangerouslySetInnerHTML={{ __html: item.description }}
                className="space-y-2 text-sm font-medium text-neutral-800 md:text-base"
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseDetails;
