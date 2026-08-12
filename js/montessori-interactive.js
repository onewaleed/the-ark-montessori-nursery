/**
 * The Ark Montessori Nursery - Montessori Apparatus Progression Flip Controller
 * Signature 3D Card Flip interactive mechanism for Section 3: "The Montessori difference"
 */

export function initMontessoriInteractive() {
  const cards = document.querySelectorAll('.progression-card-flip');
  if (!cards.length) return;

  cards.forEach((card) => {
    // Toggle flip on click
    card.addEventListener('click', (e) => {
      card.classList.toggle('is-flipped');
    });

    // Keyboard accessibility support (Enter or Space to flip)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('is-flipped');
      }
    });
  });
}
