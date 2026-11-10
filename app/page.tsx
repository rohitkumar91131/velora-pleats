import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import EditorialSection from "@/components/EditorialSection";
import HomeGalleryPreview from "@/components/HomeGalleryPreview";
import site from "@/lib/lib.json";

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <ProductSection />
      <EditorialSection data={site.homeSections.difference} variant="soft" />
      <HomeGalleryPreview />
      <EditorialSection data={site.homeSections.nextStep} centered />
    </main>
  );
}
