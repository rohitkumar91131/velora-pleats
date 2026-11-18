import GalleryGrid from "@/components/GalleryGrid";
import site from "@/lib/lib.json";

export default function GalleryPage() {
  const page = site.pages.gallery;
  return (
    <main className="gallery-page">
      <header className="gallery-page-heading">
        <h1>{page.hero.title}</h1>
        <p>{page.hero.description}</p>
      </header>
      <section className="gallery-section" aria-label={page.hero.title}>
        <div className="gallery-inner">
          <GalleryGrid images={page.images} filters={page.filters} filterLabel={page.filterLabel} />
        </div>
      </section>
    </main>
  );
}
