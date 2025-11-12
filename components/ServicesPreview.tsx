import { services } from '@/data/services';

export default function ServicesPreview() {
  return (
    <section id="services" className="section container">
      <div className="section-header">
        <div>
          <p className="eyebrow">Prestations</p>
          <h2>Des rituels pensés pour faire durer l’éclat</h2>
        </div>
        <p>Coupe, couleur, rituels soin et barber : choisissez votre inspiration puis contactez-nous.</p>
      </div>
      <div className="cards-grid">
        {services.slice(0, 3).map((service) => (
          <article key={service.id} className="card service-card">
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <p className="service-meta">
              <span>{service.price}</span>
              <span>{service.duration}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
