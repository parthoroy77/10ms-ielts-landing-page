import { FeatureValue, Section } from "@/types";
import Image from "next/image";

interface Props {
  features: Section;
}
const CourseFeatures = ({ features }: Props) => {
  return (
    <div>
      <h2>{features.name}</h2>
      <div className="text-background grid grid-cols-2 gap-8 rounded-md bg-[#06011f] p-8">
        {(features.values as FeatureValue[]).map((feature) => (
          <div key={feature.id} className="flex items-start gap-5">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={40}
              height={40}
              className="mt-1 aspect-square size-10"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm font-medium text-neutral-400">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeatures;
