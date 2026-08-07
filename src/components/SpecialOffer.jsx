import React from 'react';
import '../styles/SpecialOffer.css';
import { food_5 } from '../constants/images';

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function SpecialOffer() {
  return (
    <section className="special">
      <div className="wrap">
        <div className="special-inner">

          {/* Image side */}
          <div className="special-img">
            <img src={food_5} alt="Lasagna Rolls — this week's special" loading="lazy" />
            <div className="special-badge" aria-label="30 percent off">
              <strong>30%</strong>
              <span>OFF</span>
            </div>
          </div>

          {/* Content side */}
          <div className="special-content">
            <p className="label">Weekly Special</p>

            <h2>
              Our <em>Special Offer</em><br />
              Going on This Week.
            </h2>

            <p>
              Handcrafted with the finest ingredients, our chef's pick this week
              is sure to delight. Don't miss out — limited portions daily.
            </p>

            <div className="special-price">
              <span className="new-price">Ghc 14</span>
              <span className="old-price">Ghc 20</span>
            </div>

            <div>
              <button className="btn-primary">
                Order Now <IconArrow />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
