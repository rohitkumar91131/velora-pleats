import Link from "next/link";
import site from "@/lib/lib.json";

export type PageHeroData = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
};

export default function PageHero({ data }: { data: PageHeroData }) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <div className="page-hero-inner">
        <nav className="breadcrumbs" aria-label={site.accessibility.breadcrumbNavigation}>
          {data.breadcrumbs.map((crumb, index) => (
            <span className="breadcrumb-item" key={`${crumb.label}-${index}`}>
              {index > 0 && <span className="breadcrumb-separator" aria-hidden="true">/</span>}
              {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
            </span>
          ))}
        </nav>
        {data.eyebrow && <p className="page-hero-eyebrow">{data.eyebrow}</p>}
        <h1 id="page-hero-title">{data.title}</h1>
        {data.description && <p className="page-hero-description">{data.description}</p>}
      </div>
    </section>
  );
}
