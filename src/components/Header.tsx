import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  // Handle scroll on navigation changes
  useEffect(() => {
    if (location.hash !== '#tjanster') {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }
  }, [location.pathname]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu when clicking services link
    
    if (isHomePage) {
      const servicesSection = document.getElementById('tjanster');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and scroll to services
      navigate('/#tjanster');
      // Use setTimeout to ensure the navigation has completed before scrolling
      setTimeout(() => {
        const servicesSection = document.getElementById('tjanster');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    setIsMenuOpen(false); // Close menu when clicking any link
    
    if (isHomePage) {
      // On homepage, just scroll smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="company-name" onClick={handleLinkClick}>
          <img src="/EconstructOG.png" alt="Econstruct" />
        </Link>

        <button 
          className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <Link to="/" onClick={handleLinkClick}>Hem</Link>
          {isHomePage ? (
            <a href="#tjanster" onClick={scrollToServices}>Tjänster</a>
          ) : (
            <Link to="/#tjanster" onClick={scrollToServices}>Tjänster</Link>
          )}
          <Link to="/om-oss" onClick={handleLinkClick}>Om Oss</Link>
          <Link to="/referenser" onClick={handleLinkClick}>Referenser</Link>
          <Link to="/kontakt" onClick={handleLinkClick}>Kontakt</Link>
        </nav>

        {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
      </div>
    </header>
  );
};

export default Header;
