/**
 * The Ark Montessori Nursery - Category-Filtered Parent Testimonial Controller
 * Interactive category pills for filtering real parent reviews
 */

const TESTIMONIALS = [
  {
    category: "settling",
    categoryLabel: "Settling In",
    quote: "From the very first week, my son felt so settled and loved at The Ark. He comes home every afternoon beaming with pride.",
    author: "— Sarah M.",
    role: "Croydon Parent"
  },
  {
    category: "montessori",
    categoryLabel: "Montessori Growth",
    quote: "Watching our son develop genuine independence and focus at just 3 years old has been remarkable. The apparatus & educators are exceptional.",
    author: "— David K.",
    role: "Parent of 3-year-old"
  },
  {
    category: "garden",
    categoryLabel: "Outdoor Garden",
    quote: "She loves the sensory garden and bringing home little tomatoes she helped water. The outdoor play is second to none.",
    author: "— Priya P.",
    role: "Nursery Parent"
  },
  {
    category: "funding",
    categoryLabel: "Funding & Support",
    quote: "The admissions team made using our 30 hours government funding so effortless. Transparent, helpful, and deeply caring.",
    author: "— Marcus T.",
    role: "Parent of 4-year-old"
  }
];

export function initTestimonialSlider() {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  const authorBadge = document.querySelector('.author-badge');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  const filterPills = document.querySelectorAll('.testimonial-filter-pill');

  let currentIndex = 0;
  let intervalId = null;
  let activeCategory = 'all';

  function getFilteredList() {
    if (activeCategory === 'all') return TESTIMONIALS;
    return TESTIMONIALS.filter(t => t.category === activeCategory);
  }

  function setTestimonial(index) {
    if (!quoteText || !quoteAuthor) return;
    const filtered = getFilteredList();
    if (filtered.length === 0) return;

    const currentItem = filtered[index % filtered.length];
    currentIndex = index % filtered.length;

    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';

    setTimeout(() => {
      quoteText.textContent = `"${currentItem.quote}"`;
      quoteAuthor.textContent = currentItem.author;
      if (authorBadge) authorBadge.textContent = currentItem.role;

      quoteText.style.opacity = '1';
      quoteAuthor.style.opacity = '1';

      dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
      });
    }, 180);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      setTestimonial(index);
      resetAutoPlay();
    });
  });

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      activeCategory = pill.dataset.category || 'all';
      setTestimonial(0);
      resetAutoPlay();
    });
  });

  function startAutoPlay() {
    intervalId = setInterval(() => {
      const filtered = getFilteredList();
      const nextIndex = (currentIndex + 1) % filtered.length;
      setTestimonial(nextIndex);
    }, 6000);
  }

  function resetAutoPlay() {
    clearInterval(intervalId);
    startAutoPlay();
  }

  startAutoPlay();
}
