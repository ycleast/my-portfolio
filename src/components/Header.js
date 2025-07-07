import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo">
                    <h2>Mon Portfolio</h2>
                </div>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={closeMenu}>Accueil</a></li>
                        <li><a href="#about" onClick={closeMenu}>À propos</a></li>
                        <li><a href="#skills" onClick={closeMenu}>Compétences</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projets</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </nav>

                <div className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
