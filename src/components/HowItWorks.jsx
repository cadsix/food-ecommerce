import React from 'react';
import '../styles/HowItWorks.css';

const IconBag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const IconBike = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/>
    <path d="M15 6a1 1 0 0 0 0-2h-3l-3 9"/>
    <path d="M3 12h9l1-3h4"/>
    <path d="M6.5 14L9 6"/>
  </svg>
);

const IconChef = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
    <line x1="6" y1="17" x2="18" y2="17"/>
  </svg>
);

const steps = [
  {
    step: 'Step 01',
    title: 'Order Your Food',
    desc: 'Browse our menu, pick your favourites and add them to cart in just a few taps.',
    Icon: IconBag,
    featured: false,
  },
  {
    step: 'Step 02',
    title: 'Delivery & Pickup',
    desc: 'We prepare your order and our riders pick up fresh food for fast door-to-door delivery.',
    Icon: IconBike,
    featured: true,
  },
  {
    step: 'Step 03',
    title: 'Delicious Recipe',
    desc: 'Every dish is crafted with fresh ingredients by expert chefs just for you.',
    Icon: IconChef,
    featured: false,
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw">
      <div className="wrap">
        <div className="hiw-head">
          <p className="label">How It Works</p>
          <h2>Order Delivery in just 30 Minutes</h2>
          <p>Three simple steps and your favourite meal is on its way.</p>
        </div>

        <div className="hiw-grid">
          {steps.map(({ step, title, desc, Icon, featured }) => (
            <div key={step} className={`hiw-card${featured ? ' featured' : ''}`}>
              <div className="hiw-icon-wrap">
                <Icon />
              </div>
              <p className="hiw-step">{step}</p>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
