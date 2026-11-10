import type { MetadataRoute } from "next";
import site from "@/lib/lib.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: site.robots.userAgent, allow: site.robots.allow },
    sitemap: `${site.site.baseUrl}/sitemap.xml`,
  };
}
