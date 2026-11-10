import Link from "next/link";
import site from "@/lib/lib.json";

export default function NotFound() {
  const page = site.notFound;
  return (
    <main className="not-found-page">
      <h1>{page.title}</h1>
      <p>{page.description}</p>
      <Link className="hero-button hero-button-gold" href={page.linkHref}>{page.linkLabel}</Link>
    </main>
  );
}
