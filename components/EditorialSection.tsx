import Image from "next/image";
import Link from "next/link";
import ContentImage, { type ContentImageData } from "@/components/ContentImage";

export type EditorialData = {
  eyebrow?: string;
  heading: string;
  description?: string;
  paragraphs?: string[];
  image?: ContentImageData;
  cta?: { label: string; href: string };
  features?: Array<{ title: string; description: string; icon?: string }>;
  livingTypesLabel?: string;
  livingTypes?: Array<{ label: string; icon: string }>;
};

export default function EditorialSection({
  data,
  variant = "light",
  imageSide = "right",
  centered = false,
}: {
  data: EditorialData;
  variant?: "light" | "soft";
  imageSide?: "left" | "right";
  centered?: boolean;
}) {
  return (
    <section className={`editorial-section editorial-section-${variant}`}>
      <div className={`editorial-main${data.image ? ` image-${imageSide}` : ""}${centered ? " is-centered" : ""}`}>
        <div className="editorial-copy">
          {data.eyebrow && <p className="editorial-eyebrow">{data.eyebrow}</p>}
          <h2>{data.heading}</h2>
          {data.description && <p className="editorial-description">{data.description}</p>}
          {data.paragraphs?.map((paragraph) => <p className="editorial-description" key={paragraph}>{paragraph}</p>)}
          {data.cta && <Link className="editorial-cta" href={data.cta.href}>{data.cta.label}<span aria-hidden="true"> →</span></Link>}
          {data.livingTypes && (
            <ul className="editorial-living-types" aria-label={data.livingTypesLabel}>
              {data.livingTypes.map((type) => (
                <li key={type.label}>
                  <Image src={type.icon} alt="" width={48} height={48} />
                  <span>{type.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {data.image && (
          <figure className="editorial-image">
            <ContentImage image={data.image} sizes="(max-width: 720px) 100vw, 50vw" />
          </figure>
        )}
      </div>
      {data.features && (
        <ul className="editorial-features">
          {data.features.map((feature) => (
            <li key={feature.title}>
              {feature.icon && <Image className="editorial-feature-icon" src={feature.icon} alt="" width={28} height={28} />}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
