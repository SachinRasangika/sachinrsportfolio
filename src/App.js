import React from 'react';
import { Navbar, Hero, About, Portfolio, Process, Resources, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Process />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
