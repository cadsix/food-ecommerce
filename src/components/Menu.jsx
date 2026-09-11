import React, { useState } from 'react';
import '../styles/Menu.css';
import { menuList, foodList } from '../constants/menuData';
import { useCart } from '../context/CartContext';

/* Clean vector icons */
const IconPlus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconMinus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconStarSolid = () => (
  <svg className="star-svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function Menu() {
  const [selected, setSelected] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, removeFromCart, getItemCount } = useCart();

  const filteredFoods = foodList.filter(dish => {
    const matchesCat = selected === 'All' || dish.category === selected;
    const matchesSearch = !searchQuery || 
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="menu-section" id="menu">

      {/* Header & Search */}
      <div className="menu-header-block">
        <div>
          <p className="section-tag">Our Menu</p>
          <h2 className="section-heading">Explore the Full Menu</h2>
          <p className="section-sub">
            Every dish is prepared fresh to order using quality ingredients.
          </p>
        </div>

        <div className="menu-search-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search dish or ingredient..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            aria-label="Search menu"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ color: 'var(--ink-3)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', padding: '2px' }}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Modern Category Filter Bar */}
      <div className="category-nav-wrap">
        <div className="category-nav" role="tablist" aria-label="Menu categories">
          <button
            role="tab"
            aria-selected={selected === 'All'}
            className={`cat-pill${selected === 'All' ? ' active' : ''}`}
            onClick={() => setSelected('All')}
          >
            <span>All Dishes</span>
            <span className="cat-count">{foodList.length}</span>
          </button>

          {menuList.map((cat, i) => {
            const count = foodList.filter(f => f.category === cat.menu_name).length;
            const isActive = selected === cat.menu_name;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={isActive}
                className={`cat-pill${isActive ? ' active' : ''}`}
                onClick={() => setSelected(isActive ? 'All' : cat.menu_name)}
              >
                <img src={cat.menu_image} alt="" className="cat-thumb" />
                <span>{cat.menu_name}</span>
                <span className="cat-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Row status info */}
      <div className="dishes-row">
        <h3 className="dishes-title">
          {selected === 'All' ? 'All Dishes' : selected}
        </h3>
        <span className="dishes-badge">
          Showing {filteredFoods.length} {filteredFoods.length === 1 ? 'dish' : 'dishes'}
        </span>
      </div>

      {/* Dishes Grid */}
      <div className="food-grid">
        {filteredFoods.length === 0 ? (
          <div className="no-results">
            <p>No dishes found matching "<strong>{searchQuery}</strong>".</p>
            <button className="btn-secondary" onClick={() => { setSearchQuery(''); setSelected('All'); }} style={{ marginTop: '0.75rem' }}>
              Reset Filters
            </button>
          </div>
        ) : (
          filteredFoods.map(dish => {
            const qty = getItemCount(dish._id);
            return (
              <article key={dish._id} className="food-card">
                <div className="food-img-wrap">
                  <img src={dish.image} alt={dish.name} loading="lazy" />
                  <span className="food-chip">{dish.category}</span>
                  {dish.tag && <span className="food-tag-pill">{dish.tag}</span>}

                  {qty === 0 ? (
                    <button
                      className="add-btn"
                      onClick={() => addToCart(dish._id)}
                      aria-label={`Add ${dish.name} to cart`}
                    >
                      <IconPlus />
                    </button>
                  ) : (
                    <div className="qty-counter" role="group" aria-label={`${dish.name} quantity`}>
                      <button onClick={() => removeFromCart(dish._id)} aria-label="Decrease quantity">
                        <IconMinus />
                      </button>
                      <span>{qty}</span>
                      <button onClick={() => addToCart(dish._id)} aria-label="Increase quantity">
                        <IconPlus />
                      </button>
                    </div>
                  )}
                </div>

                <div className="food-info">
                  <h4 className="food-name" title={dish.name}>{dish.name}</h4>
                  <p className="food-desc">{dish.description}</p>
                  <div className="food-meta">
                    <div className="food-stars" aria-label={`${dish.rating || 4.8} out of 5 stars`}>
                      <IconStarSolid />
                      <span className="star-count">{(dish.rating || 4.8).toFixed(1)}</span>
                      <span className="star-reviews">({dish.reviews || 120})</span>
                    </div>
                    <span className="food-price">Ghc {dish.price}</span>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>

    </section>
  );
}
