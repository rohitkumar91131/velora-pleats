import type { MetadataRoute } from "next";
import site from "@/lib/lib.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...site.site.sitemapRoutes, ...site.products.map((product) => product.href)];
  return routes.map((route) => ({ url: new URL(route, site.site.baseUrl).toString() }));
}
