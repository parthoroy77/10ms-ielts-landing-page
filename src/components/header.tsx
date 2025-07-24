import { Languages } from "lucide-react";
import Image from "next/image";
import logoSvg from "../../public/logo.svg";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-[999] h-14 border-b bg-white px-20">
      <div className="flex h-full w-full items-center justify-between">
        <Image src={logoSvg} alt="10 minute school logo" className="h-7 w-20" />
        <div>
          <Button variant={"outline"}>
            <Languages size={16} />
            বাং
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
