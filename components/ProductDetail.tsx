import Link from "next/link";
import ContentImage from "@/components/ContentImage";
import EditorialSection from "@/components/EditorialSection";
import type { PageHeroData } from "@/components/PageHero";
import site from "@/lib/lib.json";

type Product = (typeof site.products)[number];

export default function ProductDetail({ product, hero }: { product: Product; hero: PageHeroData }) {
  const page = site.productDetailPage;
  return (
    <main>
      <section className="product-detail-section" id="overview">
        <nav className="product-detail-breadcrumbs" aria-label={site.accessibility.breadcrumbNavigation}>
          {hero.breadcrumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`}>
              {index > 0 && <span aria-hidden="true"> / </span>}
              {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
            </span>
          ))}
        </nav>
        <div className="product-detail-layout">
          <div className="product-detail-gallery" id="gallery" aria-label={page.galleryLabel}>
            {product.images.map((image, index) => (
              <figure className={`product-detail-image${index === 0 ? " product-detail-image-main" : ""}`} key={image.src}>
                <ContentImage image={image} sizes="(max-width: 720px) 100vw, 55vw" />
              </figure>
            ))}
          </div>
          <div className="product-detail-copy">
            <p className="section-eyebrow">{page.sectionEyebrow}</p>
            <h2>{product.title}</h2>
            <p className="product-detail-description">{product.detailDescription}</p>
            <ul className="product-feature-list" id="features">
              {product.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <div className="product-detail-actions">
              <Link className="product-detail-quote" href={product.quoteHref}>{page.quoteLabel}<span aria-hidden="true"> →</span></Link>
              <Link className="product-detail-whatsapp" href={product.whatsappHref} target="_blank" rel="noreferrer">{page.whatsappLabel}</Link>
            </div>
          </div>
        </div>
      </section>
      <nav className="product-detail-tabs" aria-label={page.tabsLabel}>
        {page.tabs.map((tab, index) => (
          <Link href={tab.href} key={`${tab.label}-${index}`}>{tab.label}</Link>
        ))}
      </nav>
      <EditorialSection data={site.productExperience} variant="soft" />
    </main>
  );
}
