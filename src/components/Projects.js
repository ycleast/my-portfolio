import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Site E-commerce",
            description: "Application web complète de commerce électronique avec panier d'achat, système de paiement et gestion des utilisateurs.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://via.placeholder.com/400x250/3498db/ffffff?text=E-commerce",
            githubLink: "https://github.com/votre-username/ecommerce-project",
            liveLink: "https://votre-ecommerce-demo.com",
            featured: true
        },
        {
            id: 2,
            title: "Application Météo",
            description: "Application météo responsive utilisant une API externe pour afficher les prévisions en temps réel avec géolocalisation.",
            technologies: ["JavaScript", "CSS3", "API REST", "Geolocation"],
            image: "https://via.placeholder.com/400x250/e74c3c/ffffff?text=Weather+App",
            githubLink: "https://github.com/votre-username/weather-app",
            liveLink: "https://votre-weather-app.com",
            featured: false
        },
        {
            id: 3,
            title: "Gestionnaire de Tâches",
            description: "Application de gestion de tâches avec drag & drop, catégories personnalisées et synchronisation cloud.",
            technologies: ["React", "Firebase", "Material-UI", "Drag & Drop"],
            image: "https://via.placeholder.com/400x250/9b59b6/ffffff?text=Task+Manager",
            githubLink: "https://github.com/votre-username/task-manager",
            liveLink: "https://votre-task-manager.com",
            featured: true
        },
        {
            id: 4,
            title: "Blog Personnel",
            description: "Blog responsive avec système de commentaires, recherche avancée et interface d'administration.",
            technologies: ["HTML5", "CSS3", "PHP", "MySQL"],
            image: "https://via.placeholder.com/400x250/f39c12/ffffff?text=Personal+Blog",
            githubLink: "https://github.com/votre-username/personal-blog",
            liveLink: "https://votre-blog.com",
            featured: false
        }
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
