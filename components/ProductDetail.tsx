import Link from "next/link";
import ContentImage from "@/components/ContentImage";
import EditorialSection from "@/components/EditorialSection";
import PageHero, { type PageHeroData } from "@/components/PageHero";
import site from "@/lib/lib.json";

type Product = (typeof site.products)[number];

export default function ProductDetail({ product, hero }: { product: Product; hero: PageHeroData }) {
  const page = site.productDetailPage;
  return (
    <main>
      <PageHero data={hero} />
      <section className="product-detail-section">
        <div className="product-detail-layout">
          <div className="product-detail-gallery" aria-label={page.galleryLabel}>
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
            <ul className="product-feature-list">
              {product.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <div className="product-detail-actions">
              <Link className="product-detail-quote" href={product.quoteHref}>{page.quoteLabel}<span aria-hidden="true"> →</span></Link>
              <Link className="product-detail-whatsapp" href={product.whatsappHref} target="_blank" rel="noreferrer">{page.whatsappLabel}</Link>
            </div>
          </div>
        </div>
      </section>
      <EditorialSection data={site.productExperience} variant="soft" />
    </main>
  );
}
