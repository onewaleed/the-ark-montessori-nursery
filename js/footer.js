/**
 * The Ark Montessori Nursery - Redesigned Nursery Footer Module
 * Unified branded footer with reassurance badges, top wave transition & contact pills
 */

export function initFooter() {
  const footerContainer = document.querySelector('.site-footer');
  if (!footerContainer || footerContainer.innerHTML.trim() !== '') return;

  footerContainer.innerHTML = `
    <!-- Organic Wave Top Transition -->
    <svg class="footer-wave" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 30C240 10 480 45 720 25C960 5 1200 40 1440 20V0H0V30Z" fill="#FDFBF7"/>
    </svg>

    <div class="container">
      <!-- 4 Reassurance Badges Row -->
      <div class="footer-reassurance-row">
        <div class="reassurance-badge">
          <div class="reassurance-icon">🛡️</div>
          <div class="reassurance-text">
            <strong>Ofsted Registered</strong>
            <span>High Quality Standards</span>
          </div>
        </div>

        <div class="reassurance-badge">
          <div class="reassurance-icon">🌟</div>
          <div class="reassurance-text">
            <strong>15 &amp; 30 Hours</strong>
            <span>Government Funding</span>
          </div>
        </div>

        <div class="reassurance-badge">
          <div class="reassurance-icon">☀️</div>
          <div class="reassurance-text">
            <strong>Ages 2 – 5 Years</strong>
            <span>Nurturing Early Years</span>
          </div>
        </div>

        <div class="reassurance-badge">
          <div class="reassurance-icon">🌿</div>
          <div class="reassurance-text">
            <strong>Authentic Montessori</strong>
            <span>Accredited Setting</span>
          </div>
        </div>
      </div>

      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="footer-logo">
            <img src="assets/images/logo-horizontal-light.png" alt="The Ark Montessori Nursery">
          </a>
          <p class="footer-tagline">A happy little place to grow, explore &amp; belong in Croydon since 2002. ♡</p>
          <div class="footer-socials">
            <a href="#" class="social-link" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" class="social-link" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" class="social-link" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-title">Explore</h4>
          <ul class="footer-links">
            <li><a href="about.html" class="footer-link">About The Ark</a></li>
            <li><a href="our-approach.html" class="footer-link">Our Montessori Approach</a></li>
            <li><a href="our-environment.html" class="footer-link">Our Nursery</a></li>
            <li><a href="admissions.html" class="footer-link">Admissions &amp; Fees</a></li>
            <li><a href="parent-info.html" class="footer-link">Parent Information</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">Useful Links</h4>
          <ul class="footer-links">
            <li><a href="parent-info.html#routine" class="footer-link">A Day at The Ark</a></li>
            <li><a href="admissions.html#fees" class="footer-link">Fees &amp; Funding</a></li>
            <li><a href="about.html#news" class="footer-link">News &amp; Updates</a></li>
            <li><a href="parent-info.html#policies" class="footer-link">Policies &amp; Safeguarding</a></li>
            <li><a href="contact.html#careers" class="footer-link">Careers at The Ark</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">Visit &amp; Contact</h4>
          <ul class="footer-contact-list">
            <li class="footer-contact-item">
              <span class="footer-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z"/><circle cx="12" cy="10" r="3"/></svg></span>
              <span>19-21 Addiscombe Grove<br>Croydon, CR0 6RS</span>
            </li>
            <li class="footer-contact-item">
              <span class="footer-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
              <span>020 8689 5966</span>
            </li>
            <li class="footer-contact-item">
              <span class="footer-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
              <span>hello@thearkmontessori.co.uk</span>
            </li>
          </ul>
        </div>

        <div>
          <div class="accreditation-card">
            <div class="badge-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"/><path d="M12 8C10 10 10 13 12 15C14 13 14 10 12 8Z"/></svg></div>
            <div class="badge-text">Montessori<br>Accredited<br>Nursery</div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 The Ark Montessori Nursery Croydon. All rights reserved. Registered with Ofsted.</div>
        <div class="footer-legal-links"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a><a href="#">Safeguarding</a></div>
      </div>
    </div>
  `;
}
