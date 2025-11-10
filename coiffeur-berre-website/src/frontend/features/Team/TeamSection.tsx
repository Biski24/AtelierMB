import React from 'react';

type TeamMember = {
    name: string;
    role: string;
    bio: string;
    specialties: string[];
};

const team: TeamMember[] = [
    {
        name: 'Manon',
        role: 'Directrice artistique & coloriste',
        bio: 'Experte balayage, Manon imagine des transformations lumineuses tout en respectant la fibre.',
        specialties: ['Balayage', 'Couleurs froides', 'Soin profond'],
    },
    {
        name: 'Bastien',
        role: 'Barber & stylist homme',
        bio: 'Fan de coupes structurelles, il met son sens du détail au service des looks masculins.',
        specialties: ['Dégradés', 'Barbe', 'Coiffage'],
    },
    {
        name: 'Leïla',
        role: 'Spécialiste événementiel',
        bio: 'Coiffe les mariées et les invités en jouant sur les volumes et les textures naturelles.',
        specialties: ['Chignons', 'Tresses', 'Accessoires'],
    },
];

const TeamSection: React.FC = () => (
    <div className="team">
        <h2>L&apos;équipe Atelier MB</h2>
        <p>Une équipe polyvalente basée à Berre-l&apos;Étang, prête à conseiller femmes et hommes.</p>
        <div className="team-grid">
            {team.map((member) => (
                <article key={member.name} className="team-card">
                    <header>
                        <h3>{member.name}</h3>
                        <span>{member.role}</span>
                    </header>
                    <p>{member.bio}</p>
                    <ul>
                        {member.specialties.map((spec) => (
                            <li key={spec}>{spec}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    </div>
);

export default TeamSection;
