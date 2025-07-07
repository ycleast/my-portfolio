import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title animate-on-scroll">À propos de moi</h2>
                <div className="about-content">
                    <div className="about-text animate-on-scroll delay-1">
                        <p>
                            Je suis un étudiant passionné en informatique, spécialisé dans le développement web.
                            Mon parcours m'a permis d'acquérir une solide base en programmation et une
                            compréhension approfondie des technologies modernes.
                        </p>
                        <p>
                            J'aime résoudre des problèmes complexes et créer des solutions innovantes.
                            Mon objectif est de développer des applications web qui améliorent l'expérience
                            utilisateur et répondent aux besoins réels des entreprises.
                        </p>
                        <p>
                            Quand je ne code pas, j'aime explorer de nouvelles technologies,
                            contribuer à des projets open source, et partager mes connaissances
                            avec la communauté des développeurs.
                        </p>
                    </div>
                    <div className="about-stats animate-on-scroll delay-2">
                        <div className="stat">
                            <h3>2+</h3>
                            <p>Années d'études</p>
                        </div>
                        <div className="stat">
                            <h3>10+</h3>
                            <p>Projets réalisés</p>
                        </div>
                        <div className="stat">
                            <h3>5+</h3>
                            <p>Technologies maîtrisées</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
