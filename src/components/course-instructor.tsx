import { InstructorValue, Section } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  instructor: Section;
}
const CourseInstructor = ({ instructor }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{instructor.name}</h2>
      {(instructor.values as InstructorValue[]).map((item, i) => (
        <div key={i} className="flex items-start gap-5 rounded-md border p-4 shadow-sm">
          <Image width={86} height={86} className="mt-1 rounded-full" src={item.image} alt={item.name} />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              {item.has_instructor_page && <ChevronRight size={16} />}
            </div>
            <div dangerouslySetInnerHTML={{ __html: item.description }} className="text-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
