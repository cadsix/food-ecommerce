import React from 'react';
import '../styles/AppDownload.css';
import { playStore, appStore } from '../constants/images';

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function AppDownload() {
  return (
    <section className="app-download" id="mobile-app">
      <div className="app-download-card">

        {/* Text */}
        <div className="app-dl-content">
          <p className="app-dl-tag">Tomato on iOS &amp; Android</p>

          <h2 className="app-dl-heading">
            Order faster, track live from kitchen to table.
          </h2>

          <p className="app-dl-sub">
            Save your favorite meals, watch your rider on a live map, and get early access to weekly chef specials.
          </p>

          <ul className="app-dl-perks">
            <li><IconCheck /> Live courier GPS tracking</li>
            <li><IconCheck /> One-tap repeat ordering</li>
            <li><IconCheck /> App-only weekly discount codes</li>
          </ul>

          <div className="app-dl-btns">
            <a href="#playstore" className="store-btn" aria-label="Get on Google Play">
              <img src={playStore} alt="Google Play" />
            </a>
            <a href="#appstore" className="store-btn" aria-label="Download on App Store">
              <img src={appStore} alt="App Store" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
