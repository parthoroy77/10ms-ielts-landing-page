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
      <div className="divide-y rounded-md border *:p-6">
        {(exclusiveFeatures.values as FeatureExplanationValue[]).map((f) => (
          <div key={f.id} className="flex gap-5">
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-medium">{f.title}</h3>
              <ul className="space-y-3">
                {f.checklist.map((el, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-blue-400" />
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <Image src={f.file_url} alt={f.title} height={200} width={250} className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseExclusiveFeatures;
