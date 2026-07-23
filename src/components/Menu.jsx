import React, { useState } from 'react';
import '../styles/Menu.css';
import { menuList, foodList } from '../constants/menuData';
import { addIconWhite, addIconGreen, removeIconRed } from '../constants/images';
import { useCart } from '../context/CartContext';

export default function Menu() {
  const [selected, setSelected] = useState('All');
  const { addToCart, removeFromCart, getItemCount } = useCart();

  const foods = selected === 'All'
    ? foodList
    : foodList.filter(f => f.category === selected);

  const toggle = (name) => setSelected(p => p === name ? 'All' : name);

  return (
    <section className="menu-section" id="menu">

      {/* Header */}
      <p className="section-tag">Our Menu</p>
      <h2 className="section-heading">Explore Every Craving</h2>
      <p className="section-sub">
        From crisp salads to indulgent desserts — handpicked dishes made fresh, delivered fast.
      </p>

      {/* Category pills */}
      <div className="categories" role="list" aria-label="Food categories">
        {menuList.map((cat, i) => (
          <div
            key={i}
            role="listitem"
            className={`cat-item${selected === cat.menu_name ? ' active' : ''}`}
            onClick={() => toggle(cat.menu_name)}
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggle(cat.menu_name)}
          >
            <div className="cat-img-wrap">
              <img src={cat.menu_image} alt={cat.menu_name} />
            </div>
            <span className="cat-label">{cat.menu_name}</span>
          </div>
        ))}
      </div>

      {/* Row header */}
      <div className="dishes-row">
        <h2 className="dishes-title">
          {selected === 'All' ? 'Top Dishes Near You' : selected}
        </h2>
        <span className="dishes-badge">{foods.length} items</span>
      </div>

      {/* Grid */}
      <div className="food-grid">
        {foods.map(dish => {
          const qty = getItemCount(dish._id);
          return (
            <article key={dish._id} className="food-card">
              <div className="food-img-wrap">
                <img src={dish.image} alt={dish.name} loading="lazy" />
                <span className="food-chip">{dish.category}</span>

                {qty === 0 ? (
                  <button
                    className="add-btn"
                    onClick={() => addToCart(dish._id)}
                    aria-label={`Add ${dish.name}`}
                  >
                    <img src={addIconWhite} alt="Add" />
                  </button>
                ) : (
                  <div className="qty-counter" role="group" aria-label={`${dish.name} quantity`}>
                    <button onClick={() => removeFromCart(dish._id)} aria-label="Decrease">
                      <img src={removeIconRed} alt="−" />
                    </button>
                    <span>{qty}</span>
                    <button onClick={() => addToCart(dish._id)} aria-label="Increase">
                      <img src={addIconGreen} alt="+" />
                    </button>
                  </div>
                )}
              </div>

              <div className="food-info">
                <h3 className="food-name" title={dish.name}>{dish.name}</h3>
                <div className="food-meta">
                  <div className="food-stars" aria-label="4 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star${i < 4 ? ' on' : ''}`}>★</span>
                    ))}
                    <span className="star-count">(4.0)</span>
                  </div>
                  <span className="food-price">Ghc {dish.price}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

    </section>
  );
}
