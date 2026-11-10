import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import site from "@/lib/lib.json";

export default function GalleryPage() {
  const page = site.pages.gallery;
  return (
    <main>
      <PageHero data={page.hero} />
      <section className="gallery-section">
        <div className="gallery-inner">
          <GalleryGrid images={page.images} filters={page.filters} filterLabel={page.filterLabel} />
        </div>
      </section>
    </main>
  );
}
