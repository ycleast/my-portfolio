import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'HTML/CSS', level: 90, category: 'Frontend' },
        { name: 'JavaScript', level: 85, category: 'Frontend' },
        { name: 'React', level: 80, category: 'Frontend' },
        { name: 'Node.js', level: 75, category: 'Backend' },
        { name: 'Python', level: 85, category: 'Backend' },
        { name: 'Git/GitHub', level: 80, category: 'Outils' },
        { name: 'Linux', level: 70, category: 'Système' },
        { name: 'MySQL', level: 75, category: 'Base de données' }
    ];

    const tools = [
        'VS Code', 'Git', 'GitHub', 'npm', 'Webpack', 'Figma', 'Photoshop', 'Terminal'
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Mes Compétences</h2>

                <div className="skills-content">
                    <div className="skills-list">
                        <h3>Technologies & Langages</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-category">{skill.category}</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tools-section">
                        <h3>Outils & Logiciels</h3>
                        <div className="tools-grid">
                            {tools.map((tool, index) => (
                                <div key={index} className="tool-item">
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
