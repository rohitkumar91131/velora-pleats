import Image from "next/image";
import Link from "next/link";
import site from "@/lib/lib.json";

export default function HomeGalleryPreview() {
  const data = site.homeSections.galleryPreview;
  return (
    <section className="home-gallery-section">
      <header className="home-gallery-heading">
        <p className="section-eyebrow">{data.eyebrow}</p>
        <h2>{data.heading}</h2>
        <p>{data.description}</p>
      </header>
      <ul className="home-gallery-grid">
        {data.images.map((image) => (
          <li key={image.src}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 600px) 46vw, (max-width: 960px) 30vw, 390px" />
          </li>
        ))}
      </ul>
      <Link className="text-action home-gallery-link" href={data.cta.href}>{data.cta.label}<span aria-hidden="true"> →</span></Link>
    </section>
  );
}
