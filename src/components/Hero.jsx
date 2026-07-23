import React from 'react';
import '../styles/Hero.css';
import { headerImg } from '../constants/images';

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconStar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default function Hero({ onViewMenu }) {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg" style={{ backgroundImage: `url(${headerImg})` }} aria-hidden="true" />

      {/* Content */}
      <div className="hero-body">

        {/* Tag */}
        <span className="hero-tag">
          <span className="hero-tag-dot" aria-hidden="true" />
          Free delivery on orders over Ghc 50
        </span>

        {/* Heading */}
        <h1 className="hero-heading">
          Order Your <em>Favourite</em> Food Here
        </h1>

        {/* Sub */}
        <p className="hero-sub">
          Fresh ingredients, bold flavours — delivered fast to your doorstep.
        </p>

        {/* CTA */}
        <div className="hero-actions">
          <button className="hero-btn" onClick={onViewMenu}>
            Explore Menu <IconArrow />
          </button>
          <div className="hero-review">
            <IconStar />
            <span><strong>4.8</strong> · 2,400+ reviews</span>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats" aria-label="Quick stats">
          <div className="hero-stat">
            <span className="hero-stat-val">32+</span>
            <span className="hero-stat-lbl">Dishes</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-val">20 min</span>
            <span className="hero-stat-lbl">Avg. Delivery</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-val">4.8 ★</span>
            <span className="hero-stat-lbl">Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
}
