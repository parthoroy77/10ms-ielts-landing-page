import { Seo, SeoMeta } from "@/types";

const extractMetadata = (data: Seo, value: string, type: SeoMeta["type"] = "property"): string => {
  return data.defaultMeta.find((d) => d.value === value && d.type === type)?.content || "";
};

export const generateOpenGraphMeta = (seo: Seo) => {
  return {
    title: extractMetadata(seo, "og:title", "property") || seo.title,
    description: extractMetadata(seo, "og:description", "name") || seo.description,
    type: extractMetadata(seo, "od:type", "property") || "website",
    url: extractMetadata(seo, "og:url", "property"),
    locale: extractMetadata(seo, "og:locale"),
    images: [
      {
        url: extractMetadata(seo, "og:image:secure_url", "name") || extractMetadata(seo, "og:image"),
        alt: extractMetadata(seo, "og:image:alt"),
        type: extractMetadata(seo, "og:image:type"),
      },
    ],
  };
};
