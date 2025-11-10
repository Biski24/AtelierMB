import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewsList from '../features/Reviews/ReviewsList';
import AppointmentForm from '../features/Appointments/AppointmentForm';
import AgendaSchedule from '../features/Agenda/AgendaSchedule';
import PortfolioGrid from '../features/Portfolio/PortfolioGrid';
import TeamSection from '../features/Team/TeamSection';
import '../styles/main.css';

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <Header />
            <main className="container">
                <section className="hero">
                    <div>
                        <p className="eyebrow">Coiffeur mixte à Berre-l'Étang</p>
                        <h1>Atelier MB sublime vos cheveux du mardi au samedi</h1>
                        <p>
                            Des coupes graphiques, couleurs maîtrisées et rituels de soin. Réservez votre créneau dans notre
                            agenda en ligne et laissez-vous guider par l&apos;équipe.
                        </p>
                        <a className="btn-primary" href="#reservation">
                            Planifier un rendez-vous
                        </a>
                    </div>
                </section>

                <section id="reservation" className="section booking">
                    <AppointmentForm />
                    <AgendaSchedule />
                </section>

                <section className="section">
                    <PortfolioGrid />
                </section>

                <section className="section">
                    <TeamSection />
                </section>

                <section className="section">
                    <ReviewsList />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
