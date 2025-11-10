import React from 'react';

const Services = () => {
    const servicesList = [
        { name: 'Coupe de cheveux', description: 'Coupe classique ou moderne.', price: '30€' },
        { name: 'Coloration', description: 'Coloration complète ou mèches.', price: '50€' },
        { name: 'Brushing', description: 'Brushing simple ou sophistiqué.', price: '25€' },
        { name: 'Soins capillaires', description: 'Traitements nourrissants pour vos cheveux.', price: '40€' },
        { name: 'Coiffure de mariage', description: 'Coiffure sur mesure pour votre grand jour.', price: '100€' },
    ];

    return (
        <div>
            <h1>Nos Services</h1>
            <ul>
                {servicesList.map((service, index) => (
                    <li key={index}>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <p><strong>Prix: {service.price}</strong></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;