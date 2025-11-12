import { team } from '@/data/team';

export default function TeamSection() {
  return (
    <section id="team" className="section container">
      <div className="section-header">
        <div>
          <p className="eyebrow">Équipe</p>
          <h2>Des spécialistes à votre écoute</h2>
        </div>
      </div>
      <div className="cards-grid">
        {team.map((member) => (
          <article key={member.id} className="card team-card">
            <div>
              <p className="eyebrow">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </div>
            <ul className="chips">
              {member.specialties.map((specialty) => (
                <li key={specialty}>{specialty}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
