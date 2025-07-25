import { FeatureExplanationValue, Section } from "@/types";
import { Check } from "lucide-react";
import Image from "next/image";

interface Props {
  exclusiveFeatures: Section;
}
const CourseExclusiveFeatures = ({ exclusiveFeatures }: Props) => {
  return (
    <div>
      <h2>{exclusiveFeatures.name}</h2>
      <div className="divide-y rounded-md border *:p-5">
        {(exclusiveFeatures.values as FeatureExplanationValue[]).map((f) => (
          <div key={f.id} className="flex flex-col gap-5 md:flex-row">
            <div className="flex-1 space-y-3">
              <h3 className="text-base font-semibold md:text-xl">{f.title}</h3>
              <ul className="space-y-3">
                {f.checklist.map((el, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={18} className="shrink-0 text-blue-400" />
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <Image src={f.file_url} alt={f.title} height={200} width={250} className="mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseExclusiveFeatures;
