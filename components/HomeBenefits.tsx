type Benefit = { title: string; description: string };

const marks = ["✧", "≈", "◇", "⚙"];

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
            <span className="home-benefit-mark" aria-hidden="true">{marks[index] ?? "✧"}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
