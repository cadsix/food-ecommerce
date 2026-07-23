import React from 'react';
import '../styles/AppDownload.css';
import { playStore, appStore } from '../constants/images';

const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

export default function AppDownload() {
  return (
    <section className="app-download" id="mobile-app">
      <div className="app-download-card">

        {/* Text */}
        <div className="app-dl-content">
          <p className="app-dl-tag">Mobile App</p>

          <h2 className="app-dl-heading">
            Order faster with the <em>Tomato App</em>
          </h2>

          <p className="app-dl-sub">
            Track your delivery in real time, save your favourite meals, and
            unlock exclusive app-only deals. Available on iOS &amp; Android.
          </p>

          <div className="app-dl-btns">
            <a href="#playstore" className="store-btn" aria-label="Get on Google Play">
              <img src={playStore} alt="Google Play" />
            </a>
            <a href="#appstore" className="store-btn" aria-label="Download on App Store">
              <img src={appStore} alt="App Store" />
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="app-dl-visual" aria-hidden="true">
          <div className="app-features">
            <div className="app-feat-card">
              <div className="feat-icon"><IconRocket /></div>
              <div className="feat-text">
                <strong>20-min delivery</strong>
                <span>Lightning fast to your door</span>
              </div>
            </div>
            <div className="app-feat-card">
              <div className="feat-icon"><IconStar /></div>
              <div className="feat-text">
                <strong>Exclusive deals</strong>
                <span>App-only offers every day</span>
              </div>
            </div>
            <div className="app-feat-card">
              <div className="feat-icon"><IconShield /></div>
              <div className="feat-text">
                <strong>Secure payments</strong>
                <span>Encrypted &amp; safe checkout</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
