import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import EditorialSection from "@/components/EditorialSection";
import HomeGalleryPreview from "@/components/HomeGalleryPreview";
import HomeBenefits from "@/components/HomeBenefits";
import site from "@/lib/lib.json";

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <ProductSection />
      <HomeBenefits data={site.homeSections.difference} />
      <EditorialSection
        data={{
          ...site.homeSections.difference,
          eyebrow: "Made for modern living",
          heading: "Designed for Modern Living",
          description: "Thoughtfully designed mesh solutions for apartments, villas and independent homes.",
          features: undefined,
        }}
        variant="soft"
      />
      <HomeGalleryPreview />
    </main>
  );
}
