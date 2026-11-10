import Image from "next/image";
import Link from "next/link";
import site from "@/lib/lib.json";

export default function ProductSection() {
  const { productSection } = site;

  return (
    <section className="product-section" aria-labelledby="product-section-heading">
      <div className="product-section-inner">
        <header className="product-section-heading">
          <p className="product-section-eyebrow">{productSection.eyebrow}</p>
          <h2 id="product-section-heading">{productSection.heading}</h2>
          <p className="product-section-intro">{productSection.description}</p>
        </header>

        <ul className="product-grid" aria-label={productSection.listLabel}>
          {productSection.products.map((product) => (
            <li className="product-card" key={product.href}>
              <Link className="product-card-link" href={product.href}>
                <span className="product-card-media">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={product.imageWidth}
                    height={product.imageHeight}
                    sizes="(max-width: 560px) 46vw, (max-width: 980px) 46vw, 290px"
                  />
                </span>
                <span className="product-card-body">
                  <span className="product-card-title">{product.title}</span>
                  <span className="product-card-description">{product.description}</span>
                  <span className="product-card-details">
                    {productSection.viewDetailsLabel}<span aria-hidden="true"> →</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
