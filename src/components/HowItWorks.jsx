import React from 'react';
import '../styles/HowItWorks.css';

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const IconPan = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
    <path d="M6 10h12a2 2 0 0 1 2 2v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-2a2 2 0 0 1 2-2Z"/>
    <line x1="20" y1="13" x2="23" y2="13"/>
  </svg>
);

const IconClockFast = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <polyline points="12 7 12 12 15 15"/>
    <path d="M3 3l3 3"/>
  </svg>
);

const standards = [
  {
    tag: 'Farm-Fresh',
    title: 'Local Ingredients Daily',
    desc: 'Crisp vegetables, fresh poultry, and whole spices sourced directly from local markets every morning.',
    Icon: IconLeaf,
  },
  {
    tag: 'Scratch Kitchen',
    title: 'Cooked When Ordered',
    desc: 'No reheated batches or frozen shortcuts. Every dish is cooked to order by our kitchen team so it hits the table fresh.',
    Icon: IconPan,
  },
  {
    tag: 'Thermal Packed',
    title: 'Arrives Piping Hot',
    desc: 'Packed in eco-friendly insulated containers and dispatched immediately so your meal arrives hot and delicious.',
    Icon: IconClockFast,
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw" id="about">
      <div className="wrap">
        <div className="hiw-head">
          <p className="label">Why People Choose Tomato</p>
          <h2>Good food takes honest cooking.</h2>
          <p>Real ingredients, generous portions, and fast delivery without cutting corners.</p>
        </div>

        <div className="hiw-grid">
          {standards.map(({ tag, title, desc, Icon }) => (
            <div key={title} className="hiw-card">
              <div className="hiw-icon-wrap">
                <Icon />
              </div>
              <span className="hiw-tag">{tag}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
