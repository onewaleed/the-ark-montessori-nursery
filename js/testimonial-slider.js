/**
 * The Ark Montessori Nursery - Parent Testimonial Carousel Controller
 * Minimal editorial testimonial rotation for Section 5
 */

const TESTIMONIALS = [
  {
    quote: "The Ark has been such a special place for our daughter. She is happy, confident and loves coming every day.",
    author: "— Ark Parent"
  },
  {
    quote: "Watching our son develop genuine independence and focus at just 3 years old has been wonderful. The educators are exceptional.",
    author: "— Croydon Parent"
  },
  {
    quote: "The calm atmosphere and authentic wooden materials make The Ark stand out from every nursery in South London.",
    author: "— Parent of 4-year-old"
  },
  {
    quote: "Both of our children attended The Ark. Their transition to reception class was so confident thanks to this Montessori foundation.",
    author: "— Reception Parent"
  }
];

export function initTestimonialSlider() {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  const dots = document.querySelectorAll('.testimonial-dots .dot');

  let currentIndex = 0;
  let intervalId = null;

  function setTestimonial(index) {
    if (!quoteText || !quoteAuthor) return;
    currentIndex = index;

    // Smooth fade
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';

    setTimeout(() => {
      quoteText.textContent = `"${TESTIMONIALS[index].quote}"`;
      quoteAuthor.textContent = TESTIMONIALS[index].author;
      quoteText.style.opacity = '1';
      quoteAuthor.style.opacity = '1';

      dots.forEach((d, i) => {
        d.classList.toggle('active', i === index);
      });
    }, 200);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      setTestimonial(index);
      resetAutoPlay();
    });
  });

  function startAutoPlay() {
    intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % TESTIMONIALS.length;
      setTestimonial(nextIndex);
    }, 6000);
  }

  function resetAutoPlay() {
    clearInterval(intervalId);
    startAutoPlay();
  }

  startAutoPlay();
}
