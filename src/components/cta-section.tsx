import { CtaText } from "@/types";
import { Button } from "./ui/button";

const CTASection = ({ cta }: { cta: CtaText }) => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold">৳1000</h3>
      <Button className="w-full bg-[#1cab55]">{cta.name}</Button>
    </div>
  );
};

export default CTASection;
