"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import site from "@/lib/lib.json";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const duration = reducedMotion.matches ? 0 : 0.38;

    if (menuOpen) {
      gsap.killTweensOf(menu);
      gsap.set(menu, { visibility: "visible" });
      gsap.fromTo(
        menu,
        { height: 0, autoAlpha: 0, y: -8 },
        { height: "auto", autoAlpha: 1, y: 0, duration, ease: "power3.out" },
      );
    } else if (window.matchMedia("(max-width: 960px)").matches) {
      gsap.killTweensOf(menu);
      gsap.to(menu, {
        height: 0,
        autoAlpha: 0,
        y: -8,
        duration,
        ease: "power2.inOut",
        onComplete: () => gsap.set(menu, { visibility: "hidden" }),
      });
    }

    return () => {
      gsap.killTweensOf(menu);
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 961px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Velora Pleats home" onClick={closeMenu}>
          <Image src="/logo.svg" alt="Velora Pleats" width={142} height={60} priority />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {site.navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="quote-link" href={site.actions.quote.href}>
            {site.actions.quote.label}<span aria-hidden="true">↗</span>
          </Link>
          <a className="phone-link" href={site.actions.phone.href} aria-label={site.actions.phone.label}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.2 3.8 9.7 7l-1.6 2a14 14 0 0 0 6.9 6.9l2-1.6 3.2 2.5-.7 3.1c-.2.8-.9 1.3-1.7 1.3A16.8 16.8 0 0 1 2.8 5.2c0-.8.5-1.5 1.3-1.7l3.1-.7Z" />
            </svg>
          </a>
        </div>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
      </div>

      <nav
        className="mobile-nav"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        ref={menuRef}
      >
        {site.navigation.map((item) => (
          <Link href={item.href} key={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            {item.label}<span aria-hidden="true">↗</span>
          </Link>
        ))}
        <Link className="mobile-quote" href={site.actions.quote.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
          {site.actions.quote.label}<span aria-hidden="true">↗</span>
        </Link>
        <a className="mobile-phone" href={site.actions.phone.href} tabIndex={menuOpen ? 0 : -1}>
          Call Velora · +91 90591 29812
        </a>
      </nav>
    </header>
  );
}
