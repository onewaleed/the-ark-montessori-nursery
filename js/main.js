/**
 * The Ark Montessori Nursery - Main Application Entrypoint
 * Initializes modular controllers, footer & scroll reveals
 */

import { initNavigation } from './navigation.js';
import { initMontessoriInteractive } from './montessori-interactive.js';
import { initTestimonialSlider } from './testimonial-slider.js';
import { initVisitModal } from './visit-modal.js';
import { initFooter } from './footer.js';
import { initHeroTilt } from './hero-tilt.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Modules
  initNavigation();
  initFooter();
  initHeroTilt();
  initMontessoriInteractive();
  initTestimonialSlider();
  initVisitModal();

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.hero-grid, .trust-bar, .approach-grid, .environment-grid, .story-grid, .quicklinks-grid, .final-cta-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
  }
});
