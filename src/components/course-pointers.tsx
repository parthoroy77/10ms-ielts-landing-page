import { PointerValue, Section } from "@/types";
import { Check } from "lucide-react";

interface Props {
  pointers: Section;
}
const CoursePointers = ({ pointers }: Props) => {
  return (
    <div>
      <h2>{pointers.name}</h2>
      <div className="grid gap-5 rounded-md md:grid-cols-2 md:border md:p-4">
        {(pointers.values as PointerValue[]).map((p) => (
          <div key={p.id} className="flex items-start gap-2">
            <Check className="mt-1 block shrink-0 text-blue-400" size={20} />
            <p className="font-medium text-neutral-700">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePointers;
