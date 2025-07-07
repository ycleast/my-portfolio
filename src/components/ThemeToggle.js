import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
        >
            <span className="theme-toggle-icon">
                {isDarkMode ? '☀️' : '🌙'}
            </span>
        </button>
    );
};

export default ThemeToggle;
