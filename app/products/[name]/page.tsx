import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import site from "@/lib/lib.json";

type ProductRouteProps = { params: { name: string } };

export const dynamic = "force-dynamic";

export function generateMetadata({ params }: ProductRouteProps): Metadata {
  const product = site.products.find((item) => item.name === params.name);
  return product?.seo ?? { title: site.notFound.title };
}

export default function ProductRoute({ params }: ProductRouteProps) {
  const product = site.products.find((item) => item.name === params.name);
  if (!product) notFound();

  const homeBreadcrumb = site.productsPage.hero.breadcrumbs[0];
  const hero = {
    eyebrow: site.productDetailPage.eyebrow,
    title: product.title,
    description: product.detailDescription,
    breadcrumbs: [homeBreadcrumb, { label: site.productsPage.hero.breadcrumbs[1].label, href: site.productsPage.href }, { label: product.title }],
  };

  return <ProductDetail product={product} hero={hero} />;
}
