import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import site from "@/lib/lib.json";

export const metadata: Metadata = site.pages.about.seo;

export default function AboutRoute() {
  return <InfoPage data={site.pages.about} />;
}
