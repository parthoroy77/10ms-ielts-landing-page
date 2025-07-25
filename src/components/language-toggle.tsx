"use client";
import { Languages } from "lucide-react";
import { Button } from "./ui/button";

const LanguageToggle = () => {
  return (
    <div>
      <Button variant={"outline"}>
        <Languages size={16} />
        বাং
      </Button>
    </div>
  );
};

export default LanguageToggle;
