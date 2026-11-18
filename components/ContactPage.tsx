import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import site from "@/lib/lib.json";

export default function ContactPage() {
  const page = site.pages.contact;
  const brand = site.site;

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-layout">
          <aside className="contact-panel">
            <p className="section-eyebrow">{page.contactEyebrow}</p>
            <h2>{page.detailsHeading}</h2>
            <address>
              <p><span>{page.phoneLabel}</span><a href={brand.phoneHref}>{brand.phone}</a></p>
              <p><span>{page.emailLabel}</span><a href={brand.emailHref}>{brand.email}</a></p>
              <p><span>{page.addressLabel}</span>{brand.address}</p>
              <p><span>{page.websiteLabel}</span><a href={brand.websiteHref}>{brand.website}</a></p>
            </address>
            <p className="contact-fast-note">{page.fastResponseNote}</p>
            <Link className="contact-whatsapp" href={brand.whatsappHref} target="_blank" rel="noreferrer">{page.whatsappLabel}<span aria-hidden="true"> →</span></Link>
          </aside>
          <div className="form-panel">
            <p className="section-eyebrow">{page.formEyebrow}</p>
            <h2>{page.formHeading}</h2>
            <p className="form-description">{page.formDescription}</p>
            <EnquiryForm data={page} recipient={brand.email} />
          </div>
        </div>
      </section>
    </main>
  );
}
