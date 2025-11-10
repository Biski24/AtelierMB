import React from 'react';

type PortfolioItem = {
    title: string;
    description: string;
    tags: string[];
};

const portfolioItems: PortfolioItem[] = [
    {
        title: 'Blond polaire & brushing wavy',
        description: 'Technique multi-tons avec soin Olaplex pour une finition lumineuse.',
        tags: ['Coloration', 'Femme'],
    },
    {
        title: 'Dégradé américain net',
        description: 'Fondu précis travaillé à la tondeuse et finition rasoir pour un look urbain.',
        tags: ['Barber', 'Homme'],
    },
    {
        title: 'Chignon bohème mariée',
        description: 'Attache romantique accessoirisée idéale pour les cérémonies estivales.',
        tags: ['Événement', 'Mariage'],
    },
    {
        title: 'Boucles naturelles disciplinées',
        description: 'Coupe sculptée sur cheveux texturés et routine hydratante personnalisée.',
        tags: ['Soin', 'Texture'],
    },
];

const PortfolioGrid: React.FC = () => (
    <div className="portfolio">
        <h2>Portfolio Atelier MB</h2>
        <p>Un aperçu des looks imaginés à Berre-l&apos;Étang. Chaque réalisation est adaptée à votre style.</p>
        <div className="portfolio-grid">
            {portfolioItems.map((item) => (
                <article key={item.title} className="portfolio-card">
                    <div className="portfolio-visual" aria-hidden="true" />
                    <div className="portfolio-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <ul className="portfolio-tags">
                            {item.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </div>
    </div>
);

export default PortfolioGrid;
