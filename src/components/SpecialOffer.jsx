import React from 'react';
import '../styles/SpecialOffer.css';
import { food_5 } from '../constants/images';
import { useCart } from '../context/CartContext';

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function SpecialOffer() {
  const { addToCart, setIsCartOpen } = useCart();

  const handleClaimOffer = () => {
    addToCart('5'); // Lasagna Rolls _id
    setIsCartOpen(true);
  };

  return (
    <section className="special">
      <div className="wrap">
        <div className="special-inner">

          {/* Image side */}
          <div className="special-img">
            <img src={food_5} alt="Lasagna Rolls — Chef's feature this week" loading="lazy" />
            <div className="special-badge" aria-label="30 percent off">
              <strong>30%</strong>
              <span>OFF</span>
            </div>
          </div>

          {/* Content side */}
          <div className="special-content">
            <p className="label">Chef's Weekly Feature</p>

            <h2>
              Artisanal <em>Lasagna Rolls</em><br />
              Limited Daily Portions.
            </h2>

            <p>
              Handcrafted pasta ribbons filled with creamy whipped ricotta, melted smoked mozzarella,
              and our signature slow-simmered San Marzano marinara.
            </p>

            <div className="special-price">
              <span className="new-price">Ghc 14</span>
              <span className="old-price">Ghc 20</span>
            </div>

            <div>
              <button className="btn-primary" onClick={handleClaimOffer}>
                Claim Special Offer <IconArrow />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
