import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "T-shirt Personnalisable",
            description: "Application web complète de commerce maillots personnalisable avec panier d'achat.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            image: "images/t-shirt-personnalisable.png",
            githubLink: "https://github.com/ycleast/T-shirt-Personnalisable",
            liveLink: "https://t-shirt-personnalisable.vercel.app/",
            featured: true
        },
        {
            id: 3,
            title: "Hugging Face",
            description: "Application de gestion de tâches avec drag & drop, catégories personnalisées et synchronisation cloud.",
            technologies: ["HTML", "CSS"],
            image: "images/huggingface.png",
            githubLink: "https://github.com/ycleast/Huggingface",
            featured: true
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Mes Projets</h2>
                <p className="section-subtitle">
                    Découvrez quelques-uns de mes projets récents qui démontrent mes compétences en développement web.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                            GitHub
                                        </a>
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            Voir le projet
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
