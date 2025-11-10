import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for header styles

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="logo">
                    <h1>Atelier MB</h1>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
