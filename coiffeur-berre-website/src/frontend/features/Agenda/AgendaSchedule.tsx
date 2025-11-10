import React from 'react';

type AgendaSlot = {
    day: string;
    slots: string[];
    closed?: boolean;
    highlight?: string;
};

const agenda: AgendaSlot[] = [
    { day: 'Lundi', slots: [], closed: true },
    { day: 'Mardi', slots: ['09:00 - 12:30', '14:00 - 19:00'], highlight: 'Coloration & coiffage' },
    { day: 'Mercredi', slots: ['09:00 - 12:30', '14:00 - 19:00'], highlight: 'Techniques & soins' },
    { day: 'Jeudi', slots: ['09:00 - 12:30', '14:00 - 19:00'], highlight: 'Mariages & événements' },
    { day: 'Vendredi', slots: ['09:00 - 12:30', '14:00 - 19:00'], highlight: 'Barber & tendances' },
    { day: 'Samedi', slots: ['09:00 - 12:30', '14:00 - 19:00'], highlight: 'Derniers créneaux' },
    { day: 'Dimanche', slots: [], closed: true },
];

const AgendaSchedule: React.FC = () => (
    <div className="agenda card">
        <h2>Agenda & créneaux</h2>
        <p>
            Réservez du mardi 9h au samedi 19h. Chaque créneau est pensé pour accueillir les coupes,
            couleurs et prestations sur mesure de l&apos;équipe Atelier MB.
        </p>
        <div className="agenda-grid">
            {agenda.map((item) => (
                <article key={item.day} className={`agenda-card ${item.closed ? 'closed' : ''}`}>
                    <header>
                        <h3>{item.day}</h3>
                        {item.highlight && <span className="agenda-highlight">{item.highlight}</span>}
                    </header>
                    {item.closed ? (
                        <p className="agenda-status">Fermé</p>
                    ) : (
                        <ul>
                            {item.slots.map((slot) => (
                                <li key={slot}>{slot}</li>
                            ))}
                        </ul>
                    )}
                </article>
            ))}
        </div>
    </div>
);

export default AgendaSchedule;
