import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous pourriez intégrer un service d'envoi d'email comme EmailJS
        alert('Message envoyé ! (Simulation - intégrez un vrai service d\'email)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Contactez-moi</h2>
                <p className="section-subtitle">
                    Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins.
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Informations de contact</h3>

                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <p>votre.email@example.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📱</div>
                            <div className="contact-details">
                                <h4>Téléphone</h4>
                                <p>+33 6 12 34 56 78</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div className="contact-details">
                                <h4>Localisation</h4>
                                <p>France</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <h4>Suivez-moi</h4>
                            <div className="social-icons">
                                <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                                <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                                <a href="https://twitter.com/votre-username" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Votre nom"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Votre email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Sujet"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Votre message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-full">
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
