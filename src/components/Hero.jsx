import React from 'react';
import '../styles/Hero.css';

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
      stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCompass = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const IconStarSolid = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#fbbf24" style={{ display: 'inline-block' }}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const AVATARS = [
  { initials: 'EA', bg: 'linear-gradient(135deg, #ff7a18, #af002d)' },
  { initials: 'KM', bg: 'linear-gradient(135deg, #0ba360, #3cba92)' },
  { initials: 'JD', bg: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
  { initials: 'SA', bg: 'linear-gradient(135deg, #f093fb, #f5576c)' }
];

export default function Hero({ onViewMenu }) {
  return (
    <section className="hero">
      <div className="wrap">

        {/* Full-bleed banner */}
        <div
          className="hero-banner"
          style={{ backgroundImage: "url('/logos/pie.jpg')" }}
          role="img"
          aria-label="Fresh artisan food background"
        >

          {/* Text content */}
          <div className="hero-content">

            <h1 className="hero-heading">
              Delicious food, <em>cooked fresh</em> &amp; delivered hot.
            </h1>

            <p className="hero-sub">
              Fresh local ingredients, comforting recipes, and generous portions — 
              prepared to order and delivered straight to your door in Accra.
            </p>

            <div className="hero-cta">
              <button className="btn-primary" onClick={onViewMenu}>
                Explore Menu <IconArrow />
              </button>
              <button className="btn-ghost" onClick={() => {
                document.getElementById('mobile-app')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <IconCompass />
                Get App
              </button>
            </div>

            <div className="hero-social-proof">
              <div className="hero-avatars" aria-hidden="true">
                {AVATARS.map((a, i) => (
                  <span key={i} style={{ background: a.bg, border: '2px solid rgba(255,255,255,0.8)' }}>
                    {a.initials}
                  </span>
                ))}
              </div>
              <div>
                <div className="hero-stars" style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                  {[...Array(5)].map((_, i) => (
                    <IconStarSolid key={i} />
                  ))}
                </div>
                <p className="hero-proof-text">
                  Loved by <strong>2,500+</strong> food lovers
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-val">32<span>+</span></span>
            <span className="hero-stat-lbl">Dishes on Menu</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-val">20<span>min</span></span>
            <span className="hero-stat-lbl">Average Delivery</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-val">4.9<span>★</span></span>
            <span className="hero-stat-lbl">Customer Rating</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-val">100<span>%</span></span>
            <span className="hero-stat-lbl">Cooked to Order</span>
          </div>
        </div>

      </div>
    </section>
  );
}
