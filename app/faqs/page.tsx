import type { Metadata } from "next";
import FaqPage from "@/components/FaqPage";
import site from "@/lib/lib.json";

export const metadata: Metadata = site.pages.faqs.seo;

export default function FaqsRoute() {
  return <FaqPage data={site.pages.faqs} />;
}
