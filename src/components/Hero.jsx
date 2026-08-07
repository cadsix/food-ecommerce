import React from 'react';
import '../styles/Hero.css';

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
      stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPlay = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 5l4 2.5L6 10V5z" fill="currentColor"/>
  </svg>
);

const AVATARS = ['AK', 'BM', 'CO', 'DJ'];

export default function Hero({ onViewMenu }) {
  return (
    <section className="hero">
      <div className="wrap">

        {/* Full-bleed banner — pie.jpg as background-image in CSS */}
        <div
          className="hero-banner"
          style={{ backgroundImage: "url('/logos/pie.jpg')" }}
          role="img"
          aria-label="Fresh pie — hero background"
        >

          {/* Text content sits on top of the image */}
          <div className="hero-content">

            <span className="hero-tag">
              <span className="hero-tag-dot" aria-hidden="true" />
              Free delivery on orders over Ghc 50
            </span>

            <h1 className="hero-heading">
              Order Your <em>Favourite</em> Food Here
            </h1>

            <p className="hero-sub">
              Fresh ingredients, bold flavours — delivered fast straight
              to your doorstep. Hundreds of dishes, one easy order.
            </p>

            <div className="hero-cta">
              <button className="btn-primary" onClick={onViewMenu}>
                Explore Menu <IconArrow />
              </button>
              <button className="btn-ghost" onClick={onViewMenu}>
                <IconPlay />
                How it works
              </button>
            </div>

            <div className="hero-social-proof">
              <div className="hero-avatars" aria-hidden="true">
                {AVATARS.map(a => <span key={a}>{a}</span>)}
              </div>
              <div>
                <div className="hero-stars">★★★★★</div>
                <p className="hero-proof-text">
                  <strong>2,400+</strong> happy customers
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Stats strip — attached below the banner */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-val">32<span>+</span></span>
            <span className="hero-stat-lbl">Menu Items</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-val">20<span>min</span></span>
            <span className="hero-stat-lbl">Avg. Delivery</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-val">4.8<span>★</span></span>
            <span className="hero-stat-lbl">Customer Rating</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-val">2k<span>+</span></span>
            <span className="hero-stat-lbl">Happy Customers</span>
          </div>
        </div>

      </div>
    </section>
  );
}
