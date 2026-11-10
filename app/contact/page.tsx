import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import site from "@/lib/lib.json";

export const metadata: Metadata = site.pages.contact.seo;

export default function ContactRoute() {
  return <ContactPage />;
}
