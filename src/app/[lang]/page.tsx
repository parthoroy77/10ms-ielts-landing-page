import CourseContainer from "@/components/course-container";
import HeroSection from "@/components/hero-section";
import StructureLdJSON from "@/components/structure-ld-json";
import { generateOpenGraphMeta } from "@/lib/seo";
import { Metadata, ResolvingMetadata } from "next";
import { getData } from "../actions";

type Props = {
  params: Promise<{ lang: "bn" | "en" }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  return [{ lang: "bn" }, { lang: "en" }];
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const lang = (await params).lang;
  const { seo } = await getData({ lang });
  const openGraph = generateOpenGraphMeta(seo);
  const parentMetaData = await parent;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,

    openGraph: {
      ...parentMetaData.openGraph,
      ...openGraph,
      images: [...openGraph.images, ...(parentMetaData.openGraph?.images || [])],
      locale: lang === "bn" ? "bn_BD" : "en_US",
    },
  };
}

export default async function Home({ params }: Props) {
  const lang = (await params).lang;
  const data = await getData({ lang });

  return (
    <>
      <main className="mb-20 flex min-h-dvh flex-col space-y-5">
        <HeroSection title={data.title} description={data.description} />
        <CourseContainer data={data} />
      </main>

      {/* Seo Item */}
      <StructureLdJSON seo={data.seo} />
    </>
  );
}
