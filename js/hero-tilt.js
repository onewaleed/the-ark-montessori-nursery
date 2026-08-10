/**
 * The Ark Montessori Nursery - Hero Title 3D Cursor Tilt Controller
 * Interactive 3D tilt effect leaning towards the cursor
 */

export function initHeroTilt() {
  const heroTitle = document.querySelector('.hero-title');
  const heroSection = document.querySelector('.hero-section');

  if (!heroTitle || !heroSection) return;

  const maxTilt = 14; // Max tilt degrees

  let isHovering = false;
  let rafId = null;
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  function animate() {
    if (!isHovering) return;

    // Lerp towards target position for smooth motion
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    const rotX = (-currentY * maxTilt).toFixed(2);
    const rotY = (currentX * maxTilt).toFixed(2);

    heroTitle.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(16px)`;

    rafId = requestAnimationFrame(animate);
  }

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroTitle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Range normalized from -1 to 1 around center
    mouseX = Math.min(Math.max((e.clientX - centerX) / (window.innerWidth * 0.35), -1), 1);
    mouseY = Math.min(Math.max((e.clientY - centerY) / 250, -1), 1);

    if (!isHovering) {
      isHovering = true;
      heroTitle.style.transition = 'transform 0.1s ease-out';
      rafId = requestAnimationFrame(animate);
    }
  });

  heroSection.addEventListener('mouseleave', () => {
    isHovering = false;
    if (rafId) cancelAnimationFrame(rafId);
    mouseX = 0;
    mouseY = 0;
    currentX = 0;
    currentY = 0;
    heroTitle.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    heroTitle.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  });
}
