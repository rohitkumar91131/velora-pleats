"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import site from "@/lib/lib.json";

const { heroSection } = site;
type HeroSlide = (typeof heroSection.slides)[number];

function SlideImage({ slide, className }: { slide: HeroSlide; className: string }) {
  return (
    <picture className={className}>
      <source media="(max-width: 720px)" srcSet={slide.mobileImage} />
      <Image
        className="hero-image"
        src={slide.desktopImage}
        alt=""
        fill
        sizes="100vw"
        priority={slide === heroSection.slides[0]}
      />
    </picture>
  );
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null);
  const currentRef = useRef<HTMLDivElement>(null);
  const incomingRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const animatingRef = useRef(false);
  const pausedRef = useRef(false);
  const slides = heroSection.slides;
  const activeSlide = slides[activeIndex];
  const heroRatios = {
    "--hero-desktop-ratio": `${slides[0].desktopImageWidth} / ${slides[0].desktopImageHeight}`,
    "--hero-mobile-ratio": `${slides[0].mobileImageWidth} / ${slides[0].mobileImageHeight}`,
    "--hero-interval": `${heroSection.interval}ms`,
  } as CSSProperties;

  const changeSlide = useCallback((nextIndex: number) => {
    if (nextIndex === activeIndexRef.current || animatingRef.current || incomingRef.current === null || currentRef.current === null) return;
    animatingRef.current = true;
    const current = currentRef.current;
    const incoming = incomingRef.current;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : heroSection.transitionDuration;
    setIncomingIndex(nextIndex);
    gsap.killTweensOf([current, incoming]);
    gsap.set(incoming, { xPercent: -100, autoAlpha: 1 });
    gsap.to(current, { xPercent: 100, duration, ease: "power3.inOut" });
    gsap.to(incoming, {
      xPercent: 0,
      duration,
      ease: "power3.inOut",
      onComplete: () => {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
        setIncomingIndex(null);
        animatingRef.current = false;
        gsap.set(current, { xPercent: 0 });
      },
    });
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (pausedRef.current) return;
      changeSlide((activeIndexRef.current + 1) % slides.length);
    }, heroSection.interval);
    return () => window.clearInterval(timer);
  }, [changeSlide, slides.length]);

  useEffect(() => () => {
    gsap.killTweensOf([currentRef.current, incomingRef.current]);
  }, []);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label={heroSection.carouselLabel}
      style={heroRatios}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onFocusCapture={() => { pausedRef.current = true; }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) pausedRef.current = false;
      }}
    >
      <div className="hero-background" aria-hidden="true">
        <div className="hero-slide-layer" ref={currentRef}>
          <SlideImage slide={activeSlide} className="hero-picture" />
        </div>
        <div className="hero-slide-layer hero-slide-incoming" ref={incomingRef}>
          {incomingIndex !== null && <SlideImage slide={slides[incomingIndex]} className="hero-picture" />}
        </div>
        <div className="hero-shade" />
      </div>

      <div className="hero-copy" key={activeIndex}>
        <div className="hero-content">
          <p className="hero-tagline">{activeSlide.tagline}</p>
          <h1 className="hero-title">
            <span>{activeSlide.heading[0]}</span>
            <span className="hero-title-accent">{activeSlide.heading[1]}</span>
          </h1>
          <p className="hero-description">{activeSlide.description}</p>
          <div className="hero-actions">
            {activeSlide.buttons.map((button) => (
              <Link className={`hero-button hero-button-${button.style}`} href={button.href} key={button.label}>
                {button.label}<span aria-hidden="true">{button.style === "gold" ? "→" : "↗"}</span>
              </Link>
            ))}
          </div>
        </div>
        <ul className="hero-benefits" aria-label={heroSection.benefitsLabel}>
          {heroSection.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
        </ul>
        {heroSection.showSlideControls && (
          <div className="hero-controls" aria-label={heroSection.carouselLabel}>
            {slides.map((slide, index) => (
              <button
                type="button"
                className={`hero-dot${activeIndex === index ? " is-active" : ""}`}
                aria-label={`${heroSection.slideLabel} ${index + 1}: ${slide.heading.join(" ")}`}
                aria-current={activeIndex === index ? "true" : undefined}
                key={slide.desktopImage}
                onClick={() => changeSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
