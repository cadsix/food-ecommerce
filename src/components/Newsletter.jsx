import React, { useState } from 'react';
import '../styles/Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="newsletter">
      <div className="wrap">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <h2>Get Ghc 10 off your first order.</h2>
            <p>Subscribe for weekly menu updates, chef specials, and exclusive member discounts. No spam.</p>
          </div>

          <form className="newsletter-form" onSubmit={onSubmit}>
            {subscribed ? (
              <div style={{
                background: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(8px)',
                padding: '0.8rem 1.5rem',
                borderRadius: '9999px',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🎉 You're on the list! Welcome to the family.</span>
              </div>
            ) : (
              <>
                <input
                  className="newsletter-input"
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button className="newsletter-btn" type="submit">Subscribe</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
