import Image from "next/image";
import Link from "next/link";
import site from "@/lib/lib.json";

export default function HeroSection() {
  const { heroSection } = site;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true">
        <picture className="hero-picture">
          <source media="(max-width: 720px)" srcSet={heroSection.mobileImage} />
          <Image
            className="hero-image"
            src={heroSection.desktopImage}
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </picture>
        <div className="hero-shade" />
      </div>

      <div className="hero-content">
        <p className="hero-tagline">{heroSection.tagline}</p>
        <h1 className="hero-title" id="hero-title">
          <span>{heroSection.heading[0]}</span>
          <span className="hero-title-accent">{heroSection.heading[1]}</span>
        </h1>
        <p className="hero-description">{heroSection.description}</p>

        <div className="hero-actions">
          {heroSection.buttons.map((button) => (
            <Link className={`hero-button hero-button-${button.style}`} href={button.href} key={button.label}>
              {button.label}
              <span aria-hidden="true">{button.style === "gold" ? "→" : "↗"}</span>
            </Link>
          ))}
        </div>

        <ul className="hero-benefits" aria-label="Velora benefits">
          {heroSection.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
        </ul>
      </div>
    </section>
  );
}
