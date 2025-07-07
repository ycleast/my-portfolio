import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
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
  );
}

export default App;
