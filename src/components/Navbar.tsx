'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar">
        <h5>India</h5>
        <img src="/Assets/logo.svg" alt="Logo" />
        <i className="ri-menu-3-line" onClick={toggleMenu} style={{ cursor: 'pointer' }}></i>
      </nav>

      {/* Slide-out Menu Overlay - Client-only render after hydration to prevent FOUC */}
      {mounted && (
        <div className={`menu-overlay ${isOpen ? 'active' : ''}`}>
          <div className="menu-header">
            <h5>India</h5>
            <img src="/Assets/logo.svg" alt="Logo" />
            <i className="ri-close-line" onClick={toggleMenu} style={{ cursor: 'pointer' }}></i>
          </div>
          
          <div className="menu-content">
            <div className="menu-links">
              <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>HOME</a>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>ABOUT</a>
              <a href="#insights" onClick={(e) => handleLinkClick(e, 'insights')}>PHILOSOPHY</a>
              <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>SKILLS</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>CONTACT</a>
            </div>

            <div className="menu-footer">
              <div className="menu-contact-info">
                <p>GET IN TOUCH</p>
                <a href="mailto:rahul.developer.web@gmail.com">rahul.developer.web@gmail.com</a>
                <a href="tel:8894548063">8894548063</a>
              </div>
              <div className="menu-socials">
                <a href="https://github.com/rahulsharma1902" target="_blank" rel="noopener noreferrer">GITHUB</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
