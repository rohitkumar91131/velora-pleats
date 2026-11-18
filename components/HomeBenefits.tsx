type Benefit = { title: string; description: string };

function BenefitIcon({ index }: { index: number }) {
  const icons = [
    <><path d="m12 3 7 3v5c0 4.7-3 8-7 10-4-2-7-5.3-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    <><path d="M3 8h11a2 2 0 1 0-2-2m-9 6h16a2 2 0 1 1-2 2m-14 4h10" /></>,
    <><path d="m12 3 9 9-9 9-9-9 9-9Z" /><path d="m8.5 12 2.2 2.2 4.8-4.8" /></>,
    <><path d="M8 3H4v4m12-4h4v4M4 17v4h4m12-4v4h-4" /><path d="M8 8h8v8H8zM10 12h4m-2-2v4" /></>,
  ];
  return (
    <svg className="home-benefit-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[index % icons.length]}
    </svg>
  );
}

export default function HomeBenefits({ data }: { data: Benefit[] }) {
  return (
    <section className="home-benefits" aria-label="Why choose Velora Pleats">
      <div className="home-benefits-inner">
        <div className="home-benefits-intro">
          <p className="home-benefits-kicker">The Velora difference</p>
          <h2>Why Choose<br />Velora Pleats?</h2>
          <p>Comfort, protection and thoughtful design for your home.</p>
        </div>
        {data.map((item, index) => (
          <article className="home-benefit" key={item.title}>
            <BenefitIcon index={index} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
