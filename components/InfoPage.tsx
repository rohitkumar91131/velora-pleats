import PageHero, { type PageHeroData } from "@/components/PageHero";
import EditorialSection, { type EditorialData } from "@/components/EditorialSection";

export default function InfoPage({ data }: { data: { hero: PageHeroData; section: EditorialData } }) {
  return (
    <main>
      <PageHero data={data.hero} />
      <EditorialSection data={data.section} />
    </main>
  );
}
