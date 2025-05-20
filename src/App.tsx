import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/om-oss';
import References from './pages/referenser';
import Contact from './pages/kontakt';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="/referenser" element={<References />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2025 Econstruct.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App; 