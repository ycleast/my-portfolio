import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h2>Mon Portfolio</h2>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#skills">Compétences</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
