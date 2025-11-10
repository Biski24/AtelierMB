import React, { useState } from 'react';

const serviceOptions = [
    'Coupe & coiffage',
    'Barber & taille de barbe',
    'Coloration / balayage',
    'Mariage & événementiel',
    'Soin profond & routine'
];

const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '14:00', '14:30', '15:00', '15:30', '16:00',
    '16:30', '17:00', '17:30', '18:00', '18:30'
];

const AppointmentForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState(serviceOptions[0]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState(timeSlots[0]);
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({ name, email, service, date, time, message });
        alert('Merci ! Nous confirmons votre demande très vite.');
        setName('');
        setEmail('');
        setService(serviceOptions[0]);
        setDate('');
        setTime(timeSlots[0]);
        setMessage('');
    };

    return (
        <div className="appointment-form card">
            <h2>Réserver un créneau</h2>
            <p className="form-intro">Créneaux disponibles du mardi au samedi, de 9h à 19h.</p>
            <form className="form-grid" onSubmit={handleSubmit}>
                <label>
                    Nom complet
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Ex. Emma Martin"
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="emma@email.com"
                    />
                </label>
                <label>
                    Prestation souhaitée
                    <select value={service} onChange={(e) => setService(e.target.value)}>
                        {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Date souhaitée
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Horaire
                    <select value={time} onChange={(e) => setTime(e.target.value)}>
                        {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="full-row">
                    Notes supplémentaires
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Cheveux longs, inspiration particulière..."
                    />
                </label>
                <button type="submit" className="btn-primary full-row">
                    Envoyer ma demande
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;
