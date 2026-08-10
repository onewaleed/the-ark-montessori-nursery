/**
 * The Ark Montessori Nursery - Montessori Apparatus Progression Controller
 * Signature interactive device for Section 3: "The Montessori difference"
 */

const APPARATUS_DATA = [
  {
    step: 1,
    title: 'Freedom to Explore',
    subtitle: 'Self-Directed Discovery',
    apparatus: 'Single Wooden Knobbed Peg',
    description: 'Children freely choose their own purposeful work from accessible open shelving, building intrinsic motivation and confidence in their own instincts.',
    skills: 'Autonomy • Spatial Grasp • Intentional Choice'
  },
  {
    step: 2,
    title: 'Hands-On to Understand',
    subtitle: 'Sensorial Precision',
    apparatus: 'Knobbed Cylinder Block',
    description: 'Each cylinder fits only its exact opening ("control of error"), enabling the child to self-correct and learn through sensory feedback without adult correction.',
    skills: 'Pincer Grip • Dimension Discrimination • Self-Correction'
  },
  {
    step: 3,
    title: 'Focus to Grow',
    subtitle: 'Deep Concentration',
    apparatus: 'The Pink Tower (10 Cubes)',
    description: 'Graded in exact 1cm dimensions from 1cm³ to 10cm³, building profound visual discrimination of three dimensions and sustained, joyful concentration.',
    skills: 'Spatial Geometry • Visual Acuity • Concentration'
  },
  {
    step: 4,
    title: 'Independence for Life',
    subtitle: 'Mastery & Self-Reliance',
    apparatus: 'Broad Stair & Geometric Extensions',
    description: 'Synthesizing sensorial mastery with practical life skills, children transition into confident, self-reliant thinkers prepared for primary school and beyond.',
    skills: 'Problem Solving • Executive Function • Resilience'
  }
];

export function initMontessoriInteractive() {
  const steps = document.querySelectorAll('.progression-step');
  const infoContainer = document.getElementById('montessori-interactive-detail');

  function renderDetail(index) {
    const data = APPARATUS_DATA[index];
    if (!data || !infoContainer) return;

    infoContainer.innerHTML = `
      <div class="montessori-detail-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-gold-dark);">Stage ${data.step} • ${data.apparatus}</span>
          <span style="font-size: 0.75rem; font-weight: 600; color: var(--color-forest); background: rgba(18, 68, 54, 0.08); padding: 3px 10px; border-radius: 99px;">${data.skills}</span>
        </div>
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-navy); margin-bottom: 0.4rem; font-weight: 500;">${data.title}</h4>
        <p style="font-size: 0.9375rem; line-height: 1.6; color: #3C4B56; margin: 0;">${data.description}</p>
      </div>
    `;
  }

  steps.forEach((step, index) => {
    step.addEventListener('click', () => {
      steps.forEach(s => s.classList.remove('is-selected'));
      step.classList.add('is-selected');
      renderDetail(index);
    });

    step.addEventListener('mouseenter', () => {
      renderDetail(index);
    });
  });

  // Default initial selection
  renderDetail(0);
}
