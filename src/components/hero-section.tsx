import { cn } from "@/lib/utils";
import { Container } from "./ui/container";
interface Props {
  title: string;
  description: string;
}

const HeroSection = ({ title, description }: Props) => {
  return (
    <div className={cn("bg-gradient-to-br from-[#06011f] to-[#07022d] py-10 md:h-[300px]")}>
      <Container className="text-background flex h-full w-full flex-col justify-center">
        <div className="space-y-2 md:w-3/5">
          <h1 className="text-3xl font-bold">{title}</h1>
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
