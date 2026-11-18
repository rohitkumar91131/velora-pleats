export default function HomeGalleryPreview() {
  const reviews = [
    { quote: "The balcony pleats look elegant and work perfectly. Great finish and professional installation.", name: "Rakesh S.", place: "Whitefield" },
    { quote: "Keeps insects out completely without blocking the view. Very happy with the Velora team.", name: "Priya M.", place: "Hoskote" },
    { quote: "Premium quality and a perfect fit for our villa windows. Highly recommend Velora Pleats.", name: "Anil K.", place: "Bengaluru" },
  ];
  return (
    <section className="home-testimonials">
      <header className="home-testimonials-heading">
        <h2>What Our Customers Say</h2>
      </header>
      <ul className="home-testimonials-grid">
        {reviews.map((review) => (
          <li key={review.name}>
            <span className="review-quote-mark" aria-hidden="true">“</span>
            <blockquote>{review.quote}</blockquote>
            <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
            <p className="review-author">{review.name}<span> · {review.place}</span></p>
          </li>
        ))}
      </ul>
    </section>
  );
}
