import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>Bonjour, je suis <span className="highlight">Youdjerson CASTEL</span></h1>
                    <h2>Étudiant en Informatique & Développeur Web</h2>
                    <p>
                        Passionné par le développement web et les nouvelles technologies,
                        je crée des expériences numériques modernes et intuitives.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">Voir mes projets</a>
                        <a href="#contact" className="btn btn-secondary">Me contacter</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
