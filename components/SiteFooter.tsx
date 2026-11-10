import Image from "next/image";
import Link from "next/link";
import site from "@/lib/lib.json";

export default function SiteFooter() {
  const { site: brand, footer } = site;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label={brand.name}>
              <Image src={brand.logo} alt={brand.name} width={260} height={110} />
            </Link>
            <p>{footer.description}</p>
          </div>
          {footer.groups.map((group) => (
            <div className="footer-group" key={group.heading}>
              <h2>{group.heading}</h2>
              <ul>
                {group.links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
              </ul>
            </div>
          ))}
          <div className="footer-contact">
            <h2>{footer.contactHeading}</h2>
            <p><a href={brand.phoneHref}>{brand.phone}</a></p>
            <p><a href={brand.emailHref}>{brand.email}</a></p>
            <p>{brand.address}</p>
            <p><a href={brand.websiteHref}>{brand.website}</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {brand.name}. {brand.copyright}</span>
          <span>{brand.footerTagline}</span>
          <nav aria-label={footer.legalNavLabel}>
            {footer.legalLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          </nav>
        </div>
      </div>
    </footer>
  );
}
