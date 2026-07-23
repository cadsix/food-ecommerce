import React from 'react';
import '../styles/Footer.css';
import { facebookIcon, twitterIcon, linkedinIcon } from '../constants/images';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <h2 className="footer-wordmark">Tomato<span>.</span></h2>
          <p className="footer-blurb">
            Fresh ingredients, bold flavours, lightning-fast delivery.
            Your favourite meals, one tap away — any time, any day.
          </p>
          <div className="footer-socials">
            <a href="#facebook" className="social-btn" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#twitter" className="social-btn" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="#linkedin" className="social-btn" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#mobile-app">Mobile App</a></li>
            <li><a href="#contact">About Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Get In Touch</h4>
          <ul>
            <li><a href="tel:+233559438418">+233 559 438 418</a></li>
            <li><a href="mailto:agbocollins15@gmail.com">agbocollins15@gmail.com</a></li>
            <li>Accra, Ghana 🇬🇭</li>
          </ul>
        </div>

      </div>

      <div className="footer-bar">
        <p>© {year} <strong>Star Dev</strong>. All rights reserved.</p>
        <div className="footer-bar-links">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
