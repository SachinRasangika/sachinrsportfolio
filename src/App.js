import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, About, Portfolio, Process, Resources, Footer, ProjectView } from './components';
import './App.css';

function App() {
  return (
    <Router basename="/sachinrsportfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Portfolio />
            <Process />
            <Resources />
            <Footer />
          </>
        } />
        <Route path="/project-view" element={<ProjectView />} />
      </Routes>
    </Router>
  );
}

export default App;
