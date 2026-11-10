import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import site from "@/lib/lib.json";

export const metadata: Metadata = site.pages.whyVelora.seo;

export default function WhyVeloraRoute() {
  return <InfoPage data={site.pages.whyVelora} />;
}
