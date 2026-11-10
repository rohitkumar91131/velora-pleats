import type { Metadata } from "next";
import ProductsPage from "@/components/ProductsPage";
import site from "@/lib/lib.json";

export const metadata: Metadata = site.productsPage.seo;

export default function ProductsRoute() {
  return <ProductsPage />;
}
