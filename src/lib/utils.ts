import { Section } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Get section by types
export const getSectionByType = <T extends Section["type"]>(
  sections: Section[],
  type: T
): (Section & { type: T }) | undefined => {
  return sections?.find((s): s is Extract<Section, { type: T }> => s.type === type);
};
