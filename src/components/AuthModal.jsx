import React, { useState } from 'react';
import '../styles/AuthModal.css';

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export default function AuthModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Submitted:', form);
    onClose();
  };

  const toggle = () => {
    setIsSignUp(v => !v);
    setForm({ name: '', email: '', password: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div
        className="auth-modal"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
      >
        <button className="auth-close" onClick={onClose} aria-label="Close"><IconClose /></button>

        {/* Brand */}
        <p className="auth-brand">Tomato<span>.</span></p>

        {/* Heading */}
        <h2 className="auth-title" id="auth-title">
          {isSignUp ? 'Create an account' : 'Welcome back'}
        </h2>
        <p className="auth-sub">
          {isSignUp
            ? 'Join thousands enjoying fresh meals daily.'
            : 'Sign in to access your orders and saved dishes.'}
        </p>

        {/* Form */}
        <form className="auth-form" onSubmit={onSubmit} noValidate>
          {isSignUp && (
            <div className="form-field">
              <label htmlFor="auth-name">Full name</label>
              <input id="auth-name" type="text" name="name" placeholder="John Appleseed"
                value={form.name} onChange={onChange} autoComplete="name" required />
            </div>
          )}
          <div className="form-field">
            <label htmlFor="auth-email">Email address</label>
            <input id="auth-email" type="email" name="email" placeholder="you@example.com"
              value={form.email} onChange={onChange} autoComplete="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="auth-password">Password</label>
            <input id="auth-password" type="password" name="password"
              placeholder={isSignUp ? 'Min. 8 characters' : 'Your password'}
              value={form.password} onChange={onChange}
              autoComplete={isSignUp ? 'new-password' : 'current-password'} required />
          </div>
          <button type="submit" className="auth-submit">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        {isSignUp && (
          <div className="auth-terms">
            <input type="checkbox" id="auth-terms" required />
            <label htmlFor="auth-terms">
              By continuing you agree to our{' '}
              <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.
            </label>
          </div>
        )}

        <div className="auth-divider">
          <span>{isSignUp ? 'Already have an account?' : "Don't have one?"}</span>
        </div>

        <p className="auth-toggle">
          <span className="auth-toggle-link" onClick={toggle} role="button" tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggle()}>
            {isSignUp ? 'Sign in instead' : 'Create a free account'}
          </span>
        </p>
      </div>
    </div>
  );
}
