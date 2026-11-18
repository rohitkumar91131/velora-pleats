import ProductGrid from "@/components/ProductGrid";
import site from "@/lib/lib.json";

export default function ProductsPage() {
  const page = site.productsPage;
  return (
    <main className="products-page">
      <header className="products-page-heading">
        <h1>{page.hero.title}</h1>
        <p>{page.hero.description}</p>
      </header>
      <section className="products-list-section">
        <div className="product-section-inner">
          <ProductGrid
            products={site.products}
            descriptionType="listingDescription"
            viewDetailsLabel={page.viewDetailsLabel}
            listLabel={page.listLabel}
            imageSizes="(max-width: 560px) 34vw, (max-width: 720px) 132px, (max-width: 1120px) 44vw, 580px"
          />
        </div>
      </section>
    </main>
  );
}
