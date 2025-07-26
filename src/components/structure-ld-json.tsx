import { Seo } from "@/types";

const StructureLdJSON = ({ seo }: { seo: Seo }) => {
  return seo.schema.map((schema, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  ));
};

export default StructureLdJSON;
