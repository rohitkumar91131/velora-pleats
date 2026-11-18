import type { Metadata } from "next";
import LegalContentPage from "@/components/LegalContentPage";
import site from "@/lib/lib.json";

export const metadata: Metadata = site.pages.privacy.seo;

export default function PrivacyRoute() {
  return <LegalContentPage data={site.pages.privacy} compact />;
}
