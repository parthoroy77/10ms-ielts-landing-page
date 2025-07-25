import { FaqValue, Section } from "@/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface Props {
  faq: Section;
}
const FAQ = ({ faq }: Props) => {
  return (
    <div>
      <h2>{faq.name}</h2>
      <Accordion
        type="single"
        collapsible
        className="rounded-md md:border md:px-4"
        defaultValue={(faq.values as FaqValue[])[0].id}
      >
        {(faq.values as FaqValue[]).map((f) => (
          <AccordionItem key={f.id} value={f.id}>
            <AccordionTrigger className="text-sm font-semibold hover:no-underline">{f.question}</AccordionTrigger>
            <AccordionContent>
              <div
                dangerouslySetInnerHTML={{ __html: f.answer }}
                className="space-y-2 text-sm font-medium text-neutral-800 md:text-base"
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
