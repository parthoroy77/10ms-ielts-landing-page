"use client";

import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const LanguageToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isBangla = pathname.startsWith("/bn");

  const handleToggle = () => {
    const newPath = isBangla ? pathname.replace("/bn", "/en") : pathname.replace("/en", "/bn");

    router.push(newPath);
  };

  return (
    <div>
      <Button variant="outline" onClick={handleToggle}>
        <Languages size={16} />
        {isBangla ? "EN" : "বাং"}
      </Button>
    </div>
  );
};

export default LanguageToggle;
