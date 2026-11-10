import PageHero, { type PageHeroData } from "@/components/PageHero";

export type LegalPageData = {
  hero: PageHeroData;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  reviewNote: string;
};

export default function LegalContentPage({ data }: { data: LegalPageData }) {
  return (
    <main>
      <PageHero data={data.hero} />
      <section className="legal-section">
        <div className="legal-content">
          {data.sections.map((section) => (
            <section className="legal-topic" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <p className="legal-review-note">{data.reviewNote}</p>
        </div>
      </section>
    </main>
  );
}
