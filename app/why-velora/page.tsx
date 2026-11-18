import type { Metadata } from "next";
import EditorialSection from "@/components/EditorialSection";
import site from "@/lib/lib.json";

export const metadata: Metadata = site.pages.whyVelora.seo;

export default function WhyVeloraRoute() {
  const page = site.pages.whyVelora;
  return (
    <main className="why-velora-page">
      <EditorialSection data={page.section} variant="soft" />
    </main>
  );
}
