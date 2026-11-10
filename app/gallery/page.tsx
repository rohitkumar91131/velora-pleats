import type { Metadata } from "next";
import GalleryPage from "@/components/GalleryPage";
import site from "@/lib/lib.json";

export const metadata: Metadata = site.pages.gallery.seo;

export default function GalleryRoute() {
  return <GalleryPage />;
}
