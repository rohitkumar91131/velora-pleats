import Link from "next/link";

export type CallToActionData = {
  eyebrow: string;
  heading: string;
  description: string;
  cta: { label: string; href: string };
};

export default function CallToAction({ data }: { data: CallToActionData }) {
  return (
    <section className="cta-band">
      <div className="cta-inner">
        <div>
          <p className="cta-eyebrow">{data.eyebrow}</p>
          <h2>{data.heading}</h2>
          <p className="cta-description">{data.description}</p>
        </div>
        <Link className="cta-button" href={data.cta.href}>{data.cta.label}<span aria-hidden="true"> →</span></Link>
      </div>
    </section>
  );
}
