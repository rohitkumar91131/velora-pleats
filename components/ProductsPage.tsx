import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import site from "@/lib/lib.json";

export default function ProductsPage() {
  const page = site.productsPage;
  return (
    <main>
      <PageHero data={page.hero} />
      <section className="products-list-section">
        <div className="product-section-inner">
          <ProductGrid
            products={site.products}
            descriptionType="listingDescription"
            viewDetailsLabel={page.viewDetailsLabel}
            listLabel={page.listLabel}
          />
        </div>
      </section>
    </main>
  );
}
