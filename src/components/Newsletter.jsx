import React, { useState } from 'react';
import '../styles/Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (email) { console.log('Subscribe:', email); setEmail(''); }
  };

  return (
    <section className="newsletter">
      <div className="wrap">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <h2>Subscribe to Get Weekly<br />Updates &amp; Deals</h2>
            <p>No spam — just fresh offers, new dishes and exclusive discounts.</p>
          </div>

          <form className="newsletter-form" onSubmit={onSubmit}>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button className="newsletter-btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
