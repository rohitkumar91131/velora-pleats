import type { Metadata } from "next";
import LegalContentPage from "@/components/LegalContentPage";
import site from "@/lib/lib.json";

export const metadata: Metadata = site.pages.terms.seo;

export default function TermsRoute() {
  return <LegalContentPage data={site.pages.terms} compact />;
}
