import type { Metadata } from "next";
import Link from "next/link";
import EditorialSection from "@/components/EditorialSection";
import site from "@/lib/lib.json";

export const metadata: Metadata = site.pages.whyVelora.seo;

export default function WhyVeloraRoute() {
  const page = site.pages.whyVelora;
  return (
    <main className="why-velora-page">
      <nav className="why-velora-breadcrumbs" aria-label={site.accessibility.breadcrumbNavigation}>
        {page.hero.breadcrumbs.map((crumb, index) => (
          <span key={`${crumb.label}-${index}`}>
            {index > 0 && <span aria-hidden="true"> / </span>}
            {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
          </span>
        ))}
      </nav>
      <EditorialSection data={page.section} variant="soft" />
    </main>
  );
}
