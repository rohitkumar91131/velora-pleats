"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type MenuProduct = {
  slug: string;
  title: string;
  description: string;
  href: string;
  desktopImage: string;
  mobileImage: string;
  desktopImageWidth: number;
  desktopImageHeight: number;
  mobileImageWidth: number;
  mobileImageHeight: number;
  alt: string;
};

type SiteHeaderProps = {
  logo: string;
  logoAlt: string;
  logoHomeLabel: string;
  mainNavigationLabel: string;
  mobileNavigationLabel: string;
  openNavigationLabel: string;
  closeNavigationLabel: string;
  navigation: Array<{ label: string; href: string; hasMegaMenu?: boolean }>;
  productMegaMenu: {
    label: string;
    exploreLabel: string;
    mobileToggleLabel: string;
    products: MenuProduct[];
  };
  actions: {
    quote: { label: string; href: string };
    phone: { label: string; href: string; display: string };
  };
};

export default function SiteHeader({
  logo,
  logoAlt,
  logoHomeLabel,
  mainNavigationLabel,
  mobileNavigationLabel,
  openNavigationLabel,
  closeNavigationLabel,
  navigation,
  productMegaMenu,
  actions,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const mobileProductsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.38;

    if (menuOpen) {
      gsap.killTweensOf(menu);
      gsap.set(menu, { visibility: "visible" });
      gsap.fromTo(menu, { height: 0, autoAlpha: 0, y: -8 }, { height: "auto", autoAlpha: 1, y: 0, duration, ease: "power3.out" });
    } else if (window.matchMedia("(max-width: 960px)").matches) {
      gsap.killTweensOf(menu);
      gsap.to(menu, { height: 0, autoAlpha: 0, y: -8, duration, ease: "power2.inOut", onComplete: () => gsap.set(menu, { visibility: "hidden" }) });
    }
    return () => { gsap.killTweensOf(menu); };
  }, [menuOpen]);

  useEffect(() => {
    const panel = mobileProductsRef.current;
    if (!panel) return;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.36;
    gsap.killTweensOf(panel);
    if (mobileProductsOpen) {
      gsap.set(panel, { visibility: "visible" });
      gsap.fromTo(panel, { height: 0, autoAlpha: 0 }, { height: "auto", autoAlpha: 1, duration, ease: "power3.out" });
    } else {
      gsap.to(panel, { height: 0, autoAlpha: 0, duration, ease: "power2.inOut", onComplete: () => gsap.set(panel, { visibility: "hidden" }) });
    }
    return () => { gsap.killTweensOf(panel); };
  }, [mobileProductsOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 961px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
        setMobileProductsOpen(false);
      }
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen && !productsOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setMobileProductsOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen, productsOpen]);

  function closeMenu() {
    setMenuOpen(false);
    setMobileProductsOpen(false);
    setProductsOpen(false);
  }

  function renderDesktopProducts() {
    return (
      <div className="mega-menu" role="region" aria-label={productMegaMenu.label}>
        <div className="mega-menu-inner">
          <p className="mega-menu-label">{productMegaMenu.label}</p>
          <div className="mega-menu-grid">
            {productMegaMenu.products.map((product) => (
              <Link className="mega-menu-card" href={product.href} key={product.slug} onClick={closeMenu}>
                <span className="mega-menu-image">
                  <Image
                    src={product.desktopImage}
                    alt={product.alt}
                    width={product.desktopImageWidth}
                    height={product.desktopImageHeight}
                    sizes="(max-width: 1200px) 22vw, 250px"
                  />
                </span>
                <span className="mega-menu-card-copy">
                  <span className="mega-menu-title">{product.title}</span>
                  <span className="mega-menu-description">{product.description}</span>
                  <span className="mega-menu-link">{productMegaMenu.exploreLabel} <span aria-hidden="true">↗</span></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <header className={`site-header${isHome ? " is-home" : ""}`} onMouseLeave={() => setProductsOpen(false)}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label={logoHomeLabel} onClick={closeMenu}>
          <Image src={logo} alt={logoAlt} width={142} height={60} priority />
        </Link>

        <nav className="desktop-nav" aria-label={mainNavigationLabel}>
          {navigation.map((item) => item.hasMegaMenu ? (
            <div
              className={`desktop-nav-product${productsOpen ? " is-open" : ""}`}
              key={item.href}
              onMouseEnter={() => setProductsOpen(true)}
              onFocus={() => setProductsOpen(true)}
            >
              <Link href={item.href} aria-haspopup="true" aria-expanded={productsOpen} onClick={closeMenu}>
                {item.label}<span className="nav-chevron" aria-hidden="true">⌄</span>
              </Link>
              {productsOpen && renderDesktopProducts()}
            </div>
          ) : (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="quote-link" href={actions.quote.href}>{actions.quote.label}<span aria-hidden="true">↗</span></Link>
          <a className="phone-link" href={actions.phone.href} aria-label={actions.phone.label}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.8 9.7 7l-1.6 2a14 14 0 0 0 6.9 6.9l2-1.6 3.2 2.5-.7 3.1c-.2.8-.9 1.3-1.7 1.3A16.8 16.8 0 0 1 2.8 5.2c0-.8.5-1.5 1.3-1.7l3.1-.7Z" /></svg>
          </a>
        </div>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? closeNavigationLabel : openNavigationLabel}
          onClick={() => setMenuOpen((open) => !open)}
        ><span /><span /><span /></button>
      </div>

      <nav className="mobile-nav" id="mobile-navigation" aria-label={mobileNavigationLabel} aria-hidden={!menuOpen} ref={menuRef}>
        {navigation.map((item) => item.hasMegaMenu ? (
          <div className="mobile-nav-product" key={item.href}>
            <div className="mobile-nav-product-heading">
              <Link href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>{item.label}</Link>
              <button
                className={`mobile-products-toggle${mobileProductsOpen ? " is-open" : ""}`}
                type="button"
                aria-label={productMegaMenu.mobileToggleLabel}
                aria-expanded={mobileProductsOpen}
                onClick={() => setMobileProductsOpen((open) => !open)}
                tabIndex={menuOpen ? 0 : -1}
              ><span aria-hidden="true">{mobileProductsOpen ? "−" : "+"}</span></button>
            </div>
            <div className="mobile-product-list" ref={mobileProductsRef} aria-hidden={!mobileProductsOpen}>
              {productMegaMenu.products.map((product) => (
                <Link className="mobile-product-card" href={product.href} key={product.slug} onClick={closeMenu} tabIndex={menuOpen && mobileProductsOpen ? 0 : -1}>
                  <span className="mobile-product-image">
                    <Image src={product.mobileImage} alt={product.alt} width={product.mobileImageWidth} height={product.mobileImageHeight} sizes="(max-width: 960px) 42vw, 180px" />
                  </span>
                  <span className="mobile-product-copy">
                    <span className="mega-menu-title">{product.title}</span>
                    <span className="mega-menu-description">{product.description}</span>
                    <span className="mega-menu-link">{productMegaMenu.exploreLabel} <span aria-hidden="true">↗</span></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link href={item.href} key={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>{item.label}<span aria-hidden="true">↗</span></Link>
        ))}
        <Link className="mobile-quote" href={actions.quote.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>{actions.quote.label}<span aria-hidden="true">↗</span></Link>
        <a className="mobile-phone" href={actions.phone.href} tabIndex={menuOpen ? 0 : -1}>{actions.phone.label} · {actions.phone.display}</a>
      </nav>
    </header>
  );
}
