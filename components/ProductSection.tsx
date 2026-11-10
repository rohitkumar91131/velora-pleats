import site from "@/lib/lib.json";
import ProductGrid from "@/components/ProductGrid";

export default function ProductSection() {
  const section = site.productSection;
  const products = section.productSlugs.map((slug) => site.products.find((product) => product.name === slug));

  return (
    <section className="product-section" aria-labelledby="product-section-heading">
      <div className="product-section-inner">
        <header className="product-section-heading">
          <p className="product-section-eyebrow">{section.eyebrow}</p>
          <h2 id="product-section-heading">{section.heading}</h2>
          <p className="product-section-intro">{section.description}</p>
        </header>
        <ProductGrid
          products={products.filter((product): product is (typeof site.products)[number] => Boolean(product))}
          viewDetailsLabel={section.viewDetailsLabel}
          listLabel={section.listLabel}
        />
      </div>
    </section>
  );
}
