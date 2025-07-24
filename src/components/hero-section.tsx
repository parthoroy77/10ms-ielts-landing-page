import { cn } from "@/lib/utils";
import { Container } from "./ui/container";
interface Props {
  title: string;
  description: string;
}

const HeroSection = ({ title, description }: Props) => {
  return (
    <div className={cn("h-[300px] bg-gradient-to-br from-[#06011f] to-[#07022d]")}>
      <Container className="text-background flex h-full w-full flex-col justify-center">
        <div className="w-3/5 space-y-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="text-base font-medium text-neutral-400" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
