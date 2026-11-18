import Image from "next/image";

type Benefit = { title: string; description: string; icon: string };
type BenefitsData = {
  benefitsBand: {
    ariaLabel: string;
    eyebrow: string;
    heading: string[];
    description: string;
  };
  features: Benefit[];
};

export default function HomeBenefits({ data }: { data: BenefitsData }) {
  return (
    <section className="home-benefits" aria-label={data.benefitsBand.ariaLabel}>
      <div className="home-benefits-inner">
        <div className="home-benefits-intro">
          <p className="home-benefits-kicker">{data.benefitsBand.eyebrow}</p>
          <h2>{data.benefitsBand.heading.map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{data.benefitsBand.description}</p>
        </div>
        {data.features.map((item) => (
          <article className="home-benefit" key={item.title}>
            <Image className="home-benefit-mark" src={item.icon} alt="" width={48} height={48} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
