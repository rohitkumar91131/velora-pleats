import Link from "next/link";
import PageHero, { type PageHeroData } from "@/components/PageHero";

export type FaqPageData = {
  hero: PageHeroData;
  questions: Array<{ question: string; answer: string }>;
  cta: { label: string; href: string };
};

export default function FaqPage({ data }: { data: FaqPageData }) {
  return (
    <main>
      <PageHero data={data.hero} />
      <section className="faq-section">
        <div className="faq-list">
          {data.questions.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
          <Link className="text-action" href={data.cta.href}>{data.cta.label}<span aria-hidden="true"> →</span></Link>
        </div>
      </section>
    </main>
  );
}
