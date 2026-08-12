/**
 * The Ark Montessori Nursery - Visit Modal Controller
 * Injects and manages the "Book a Visit" dialog and interactive booking flow
 */

function createModalDOM() {
  if (document.getElementById('visit-modal')) return;

  const modalHTML = `
  <div class="modal-backdrop" id="visit-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal-card">
      <div class="modal-header">
        <h3 class="modal-title" id="modal-title">Book a Visit to The Ark ♡</h3>
        <button type="button" class="modal-close" id="close-visit-modal" aria-label="Close modal">✕</button>
      </div>

      <div class="modal-body">
        <form id="visit-booking-form">
          <div class="form-row">
            <div class="form-group">
              <label for="parent-name" class="form-label">Parent / Guardian Name *</label>
              <input type="text" id="parent-name" class="form-input" placeholder="e.g. Sarah Jenkins" required>
            </div>
            <div class="form-group">
              <label for="parent-email" class="form-label">Email Address *</label>
              <input type="email" id="parent-email" class="form-input" placeholder="sarah@example.com" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="parent-phone" class="form-label">Phone Number *</label>
              <input type="tel" id="parent-phone" class="form-input" placeholder="07123 456789" required>
            </div>
            <div class="form-group">
              <label for="child-age" class="form-label">Child's Current Age *</label>
              <select id="child-age" class="form-select" required>
                <option value="">Select age range</option>
                <option value="Under 2 years">Under 2 years (Planning ahead)</option>
                <option value="2 years (24-35 months)">2 years (24–35 months)</option>
                <option value="3 years">3 years</option>
                <option value="4+ years">4+ years</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="visit-date" class="form-label">Preferred Date *</label>
              <input type="date" id="visit-date" class="form-input" required>
            </div>
            <div class="form-group">
              <label for="visit-time" class="form-label">Preferred Time *</label>
              <select id="visit-time" class="form-select" required>
                <option value="Morning Tour (10:00 AM)">Morning Tour (10:00 AM)</option>
                <option value="Late Morning (11:30 AM)">Late Morning (11:30 AM)</option>
                <option value="Afternoon Tour (2:30 PM)">Afternoon Tour (2:30 PM)</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="visit-notes" class="form-label">Notes or Special Requirements</label>
            <textarea id="visit-notes" class="form-textarea" rows="2" placeholder="Tell us about your child or any specific questions..."></textarea>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 0.5rem;">Confirm Visit Request</button>
        </form>

        <div class="modal-success-screen" id="visit-success-screen">
          <div class="success-icon-badge">✓</div>
          <h4 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-navy); margin-bottom: 0.75rem;">Visit Request Confirmed</h4>
          <p class="success-confirmation-text" style="font-size: 1rem; color: #3C4B56; line-height: 1.6; margin-bottom: 1.5rem;"></p>
          <button type="button" class="btn btn-secondary btn-close-success">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div class="toast-notification" id="site-toast" role="status" aria-live="polite">
    <span style="color: var(--color-gold); font-size: 1.25rem;">✓</span>
    <span class="toast-message">Notification message</span>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

export function initVisitModal() {
  createModalDOM();

  const modalBackdrop = document.getElementById('visit-modal');
  const closeBtn = document.getElementById('close-visit-modal');
  const closeSuccessBtn = document.querySelector('.btn-close-success');
  const openButtons = document.querySelectorAll('.btn-book-visit, [data-modal="visit"]');
  const visitForm = document.getElementById('visit-booking-form');
  const successScreen = document.getElementById('visit-success-screen');
  const toast = document.getElementById('site-toast');

  function openModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    if (visitForm) visitForm.style.display = 'block';
    if (successScreen) successScreen.classList.remove('is-visible');
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  function showToast(message) {
    if (!toast) return;
    const msgEl = toast.querySelector('.toast-message');
    if (msgEl) msgEl.textContent = message;
    toast.classList.add('is-shown');
    setTimeout(() => toast.classList.remove('is-shown'), 4000);
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  closeSuccessBtn?.addEventListener('click', closeModal);

  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('is-active')) {
      closeModal();
    }
  });

  visitForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const parentName = document.getElementById('parent-name')?.value || 'Parent';
    const visitDate = document.getElementById('visit-date')?.value || 'Upcoming date';

    if (visitForm) visitForm.style.display = 'none';
    if (successScreen) {
      successScreen.classList.add('is-visible');
      const confText = successScreen.querySelector('.success-confirmation-text');
      if (confText) {
        confText.innerHTML = `Thank you, <strong>${parentName}</strong>! Your visit request for <strong>${visitDate}</strong> has been received. Our Croydon admissions team will contact you shortly to confirm.`;
      }
    }
    showToast(`Visit request received for ${parentName}!`);
  });
}
