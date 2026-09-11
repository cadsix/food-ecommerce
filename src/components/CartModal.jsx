import React, { useState } from 'react';
import '../styles/CartModal.css';
import { useCart } from '../context/CartContext';
import { foodList } from '../constants/menuData';

/* ── Icons ── */
const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const IconTrash = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    <path d="M10 11v6M14 11v6"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
);

const IconCart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPlus = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconMinus = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function CartModal() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart, isCartOpen, setIsCartOpen } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMsg, setPromoMsg] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isCartOpen) return null;

  const items = Object.keys(cartItems)
    .map(id => { const item = foodList.find(f => f._id === id); return item ? { ...item, qty: cartItems[id] } : null; })
    .filter(Boolean);

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal > 50 || discount === 1 ? 0 : (items.length > 0 ? 10 : 0);
  const discountAmount = discount > 0 && discount < 1 ? Math.round(subtotal * discount) : 0;
  const total = Math.max(0, subtotal - discountAmount + delivery);
  const totalQty = items.reduce((s, i) => s + i.qty, 0);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'SAVE20' || clean === 'CADSIX') {
      setDiscount(0.20);
      setPromoMsg('🎉 20% discount applied!');
    } else if (clean === 'FREESHIP') {
      setDiscount(1);
      setPromoMsg('🚚 Free delivery unlocked!');
    } else if (clean) {
      setPromoMsg('Invalid promo code. Try SAVE20');
    }
  };

  const handleCheckout = () => {
    setIsOrdered(true);
    setTimeout(() => {
      items.forEach(it => deleteFromCart(it._id));
      setIsOrdered(false);
      setIsCartOpen(false);
    }, 2800);
  };

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />

      <div className="cart-panel" role="dialog" aria-modal="true" aria-label="Shopping cart">

        {/* Head */}
        <div className="cart-head">
          <div className="cart-title-group">
            <h2 className="cart-title">Your Order</h2>
            {items.length > 0 && (
              <span className="cart-count-pill">{totalQty} item{totalQty !== 1 ? 's' : ''}</span>
            )}
          </div>
          <button className="cart-close" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <IconClose />
          </button>
        </div>

        {/* Success state */}
        {isOrdered ? (
          <div className="cart-empty" style={{ animation: 'fadeIn 0.3s ease' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'rgba(34, 165, 91, 0.15)', color: '#22a55b',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '28px'
            }}>
              ✓
            </div>
            <p style={{ fontSize: '1.2rem', color: 'var(--ink)' }}>Order Placed Fresh!</p>
            <span style={{ maxWidth: '280px', lineHeight: 1.5 }}>
              Your kitchen artisans are already prepping your feast. ETA: 20 minutes.
            </span>
          </div>
        ) : items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon"><IconCart /></div>
            <p>Your table is empty</p>
            <span>Add some freshly made artisanal dishes to begin your order.</span>
            <button
              className="btn-primary"
              style={{ marginTop: '1rem', padding: '0.65rem 1.4rem' }}
              onClick={() => {
                setIsCartOpen(false);
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Menu
            </button>
          </div>
        ) : (
          <>
            {/* Item list */}
            <div className="cart-list">
              {items.map(item => (
                <div key={item._id} className="cart-item">
                  <div className="cart-item-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <div className="cart-item-meta">
                      <span className="cart-item-unit">Ghc {item.price} each</span>
                    </div>
                  </div>

                  {/* Inline micro quantity editor */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    background: 'var(--cream)', padding: '2px 6px',
                    borderRadius: '9999px', border: '1px solid var(--border)'
                  }}>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink)' }}
                      aria-label="Decrease"
                    >
                      <IconMinus />
                    </button>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, minWidth: '16px', textAlign: 'center' }}>
                      {item.qty}
                    </span>
                    <button
                      onClick={() => addToCart(item._id)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink)' }}
                      aria-label="Increase"
                    >
                      <IconPlus />
                    </button>
                  </div>

                  <span className="cart-item-price">Ghc {item.price * item.qty}</span>
                  <button className="cart-item-del" onClick={() => deleteFromCart(item._id)} aria-label={`Remove ${item.name}`}>
                    <IconTrash />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="cart-foot">
              {/* Promo */}
              <p className="promo-label">Promo code (try SAVE20 or FREESHIP)</p>
              <form className="promo-row" onSubmit={handleApplyPromo}>
                <input
                  className="promo-input"
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={e => setPromoCode(e.target.value)}
                />
                <button className="promo-apply" type="submit">Apply</button>
              </form>
              {promoMsg && (
                <p style={{
                  fontSize: '0.75rem',
                  color: promoMsg.includes('Invalid') ? '#e8430a' : '#22a55b',
                  marginBottom: '0.75rem',
                  fontWeight: 600
                }}>
                  {promoMsg}
                </p>
              )}

              {/* Totals */}
              <div className="totals">
                <div className="total-row">
                  <span>Subtotal</span><span>Ghc {subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="total-row" style={{ color: '#22a55b' }}>
                    <span>Promo Discount (20%)</span><span>-Ghc {discountAmount}</span>
                  </div>
                )}
                <div className="total-row">
                  <span>Delivery fee</span>
                  <span>{delivery === 0 ? <strong style={{ color: '#22a55b' }}>FREE</strong> : `Ghc ${delivery}`}</span>
                </div>
                <div className="total-row grand">
                  <span>Total</span><span>Ghc {total}</span>
                </div>
              </div>

              <button className="checkout-btn" onClick={handleCheckout}>
                Complete Order • Ghc {total} <IconArrow />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
