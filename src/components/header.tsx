import Image from "next/image";
import logoSvg from "../../public/logo.svg";
import LanguageToggle from "./language-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-[999] h-14 border-b bg-white px-4 md:px-20">
      <div className="flex h-full w-full items-center justify-between">
        <Image src={logoSvg} alt="10 minute school logo" className="h-7 w-20" />
        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header;
