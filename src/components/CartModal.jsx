import React from 'react';
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

export default function CartModal() {
  const { cartItems, deleteFromCart, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  const items = Object.keys(cartItems)
    .map(id => { const item = foodList.find(f => f._id === id); return item ? { ...item, qty: cartItems[id] } : null; })
    .filter(Boolean);

  const subtotal  = items.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery  = 10;
  const total     = subtotal + delivery;
  const totalQty  = items.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />

      <div className="cart-panel" role="dialog" aria-modal="true" aria-label="Shopping cart">

        {/* Head */}
        <div className="cart-head">
          <div className="cart-title-group">
            <h2 className="cart-title">Your Cart</h2>
            {items.length > 0 && (
              <span className="cart-count-pill">{totalQty} item{totalQty !== 1 ? 's' : ''}</span>
            )}
          </div>
          <button className="cart-close" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <IconClose />
          </button>
        </div>

        {/* Empty */}
        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon"><IconCart /></div>
            <p>Your cart is empty</p>
            <span>Add some delicious dishes to get started</span>
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
                      <span className="cart-item-qty">×{item.qty}</span>
                    </div>
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
              <p className="promo-label">Promo code</p>
              <div className="promo-row">
                <input className="promo-input" type="text" placeholder="Enter code" />
                <button className="promo-apply" type="button">Apply</button>
              </div>

              {/* Totals */}
              <div className="totals">
                <div className="total-row">
                  <span>Subtotal</span><span>Ghc {subtotal}</span>
                </div>
                <div className="total-row">
                  <span>Delivery</span><span>Ghc {delivery}</span>
                </div>
                <div className="total-row grand">
                  <span>Total</span><span>Ghc {total}</span>
                </div>
              </div>

              <button className="checkout-btn">
                Proceed to Checkout <IconArrow />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
