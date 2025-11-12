import { portfolio } from '@/data/portfolio';

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="section container">
      <div className="section-header">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h2>Des transformations lumineuses</h2>
        </div>
      </div>
      <div className="portfolio-grid">
        {portfolio.map((item) => (
          <article key={item.id} className="portfolio-card">
            <div className="portfolio-image" style={{ backgroundImage: `url(${item.imageUrl})` }} />
            <div className="portfolio-content">
              <p className="eyebrow">{item.technique}</p>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
