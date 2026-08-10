/**
 * The Ark Montessori Nursery - Navigation Controller
 * Handles sticky header, active states, mobile drawer & keyboard accessibility
 */

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileBackdrop = document.querySelector('.mobile-drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky header scroll behavior
  function handleScroll() {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Drawer Toggle
  function openDrawer() {
    mobileToggle?.classList.add('is-active');
    mobileToggle?.setAttribute('aria-expanded', 'true');
    mobileDrawer?.classList.add('is-open');
    mobileBackdrop?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileToggle?.classList.remove('is-active');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    mobileDrawer?.classList.remove('is-open');
    mobileBackdrop?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', () => {
    const isOpen = mobileDrawer?.classList.contains('is-open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  mobileBackdrop?.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // ESC key to close drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}
