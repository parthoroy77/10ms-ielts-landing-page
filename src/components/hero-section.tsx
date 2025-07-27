import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Container } from "./ui/container";
interface Props {
  title: string;
  description: string;
}

const HeroSection = ({ title, description }: Props) => {
  return (
    <div className={cn("bg-gradient-to-br from-[#06011f] to-[#07022d] py-5 md:h-[300px] md:py-10")}>
      <Container className="text-background flex h-full w-full flex-col justify-center space-y-10">
        <div className="space-y-3 md:w-3/5">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_x, i) => (
                <Star stroke="0" fill="var(--color-yellow-400)" key={i} />
              ))}
            </div>
            <span className="text-background text-sm font-medium sm:text-base">
              82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন
            </span>
          </div>
          <div
            className="text-sm font-medium text-neutral-400 md:text-base"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
