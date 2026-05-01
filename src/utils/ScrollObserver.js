// src/utils/ScrollObserver.js
import { ScrambleText } from './ScrambleText.js';

// --- PUBLIC API ---

export function initGlobalObserver() {
  const observer = _createObserver();
  _attachTargets(observer);
}

// --- INTERNAL HELPERS ---

function _createObserver() {
  const options = {
    root: null,
    rootMargin: '0px 0px -10% 0px', // Triggers when element is 10% up from the bottom
    threshold: 0
  };

  return new IntersectionObserver(_handleIntersections, options);
}

function _handleIntersections(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;

      // Route the element to its respective effect handlers
      _processCssReveal(el);
      _processScrambleText(el);

      // Disconnect immediately so it only happens ONCE
      observer.unobserve(el);
    }
  });
}

// -- EFFECT HANDLERS --

function _processCssReveal(el) {
  if (el.classList.contains('deploy-hidden')) {
    el.classList.remove('deploy-hidden');
    el.classList.add('deploy-visible');
  }
}

function _processScrambleText(el) {
  if (el.hasAttribute('data-scramble')) {
    const delay = parseInt(el.getAttribute('data-scramble-delay'), 10) || 0;
    const scrambler = new ScrambleText(el);
    
    setTimeout(() => {
      scrambler.trigger();
    }, delay);
  }
}

// -- DOM ATTACHMENT --

function _attachTargets(observer) {
  // Find and observe CSS Reveal Elements
  document.querySelectorAll('.deploy-hidden').forEach(el => observer.observe(el));
  
  // Find and observe Scramble Elements
  document.querySelectorAll('[data-scramble]').forEach(el => observer.observe(el));
}