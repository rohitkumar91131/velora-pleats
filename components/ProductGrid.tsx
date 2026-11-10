import Link from "next/link";
import site from "@/lib/lib.json";
import ContentImage from "@/components/ContentImage";

type Product = (typeof site.products)[number];

export default function ProductGrid({
  products,
  viewDetailsLabel,
  listLabel,
  descriptionType = "cardDescription",
}: {
  products: Product[];
  viewDetailsLabel: string;
  listLabel: string;
  descriptionType?: "cardDescription" | "listingDescription";
}) {
  return (
    <ul className="product-grid" aria-label={listLabel}>
      {products.map((product) => (
        <li className="product-card" key={product.name}>
          <Link className="product-card-link" href={product.href}>
            <span className="product-card-media">
              <ContentImage
                image={product.image}
                sizes="(max-width: 560px) 46vw, (max-width: 980px) 46vw, 290px"
              />
            </span>
            <span className="product-card-body">
              <span className="product-card-title">{product.title}</span>
              <span className="product-card-description">{product[descriptionType]}</span>
              <span className="product-card-details">
                {viewDetailsLabel}<span aria-hidden="true"> →</span>
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
