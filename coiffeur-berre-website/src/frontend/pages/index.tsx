import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewsList from '../features/Reviews/ReviewsList';
import AppointmentForm from '../features/Appointments/AppointmentForm';
import './main.css';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Bienvenue chez votre coiffeur à Berre-l'Étang</h1>
                <section>
                    <h2>Prendre un rendez-vous</h2>
                    <AppointmentForm />
                </section>
                <section>
                    <h2>Avis des clients</h2>
                    <ReviewsList />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;