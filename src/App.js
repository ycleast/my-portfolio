import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
