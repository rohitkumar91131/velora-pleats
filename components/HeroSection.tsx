import Image from "next/image";
import Link from "next/link";
import site from "@/lib/lib.json";

export default function HeroSection() {
  const { hero } = site;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true">
        <picture className="hero-picture">
          <source media="(max-width: 720px)" srcSet={hero.mobileImage} />
          <Image
            className="hero-image"
            src={hero.desktopImage}
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </picture>
        <div className="hero-shade" />
      </div>

      <div className="hero-content">
        <p className="hero-tagline">{hero.tagline}</p>
        <h1 className="hero-title" id="hero-title">
          <span>{hero.heading[0]}</span>
          <span className="hero-title-accent">{hero.heading[1]}</span>
        </h1>
        <p className="hero-description">{hero.description}</p>

        <div className="hero-actions">
          {hero.buttons.map((button) => (
            <Link className={`hero-button hero-button-${button.style}`} href={button.href} key={button.label}>
              {button.label}
              <span aria-hidden="true">{button.style === "gold" ? "→" : "↗"}</span>
            </Link>
          ))}
        </div>

        <ul className="hero-benefits" aria-label="Velora benefits">
          {hero.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
        </ul>
      </div>
    </section>
  );
}
