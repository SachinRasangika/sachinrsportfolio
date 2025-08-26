import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, About, Services, Portfolio, Process, Resources, Testimonials, Contact, Footer, ProjectView } from './components';
import { initPerformanceOptimizations } from './utils/performance';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize performance optimizations
    initPerformanceOptimizations();

    // Remove loading indicator if it exists
    const loader = document.getElementById('initial-loader');
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
          if (loader.parentNode) {
            loader.parentNode.removeChild(loader);
          }
        }, 300);
      }, 100);
    }
  }, []);

  return (
    <Router basename="/sachinrsportfolio">
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Process />
              <Resources />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/project-view" element={<ProjectView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
