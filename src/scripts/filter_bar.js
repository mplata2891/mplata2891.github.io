// src/scripts/filter_bar.js

// ==========================================
// 1. MAIN EXPORT (System Orchestrator)
// ==========================================
export function initFilterBar() {
  const dom = mapDomElements();
  if (!dom.filterBtns.length || !dom.slides.length) return;

  const config = getSysConfig();

  dom.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      executeFilterSequence(btn, dom, config);
    });
  });
}

// ==========================================
// 2. INITIALIZATION HELPERS
// ==========================================
function mapDomElements() {
  return {
    filterBtns: document.querySelectorAll('.filter-btn'),
    slides: document.querySelectorAll('.project-slide'),
    track: document.querySelector('.carousel-track')
  };
}

function getSysConfig() {
  return {
    active: ['bg-accent/10', 'border-accent', 'text-accent'],
    inactive: [
      'bg-void', 
      'border-[var(--color-border-subtle)]', 
      'text-secondary-color'
    ]
  };
}

// ==========================================
// 3. RUNTIME LOGIC HELPERS
// ==========================================
function executeFilterSequence(clickedBtn, dom, config) {
  const filterValue = clickedBtn.getAttribute('data-filter');

  updateButtonUI(clickedBtn, dom.filterBtns, config);
  transitionSlides(filterValue, dom.slides);
  resetCarousel(dom.track);
}

function updateButtonUI(activeBtn, allBtns, config) {
  allBtns.forEach(btn => {
    btn.classList.remove(...config.active);
    btn.classList.add(...config.inactive);
  });
  
  activeBtn.classList.remove(...config.inactive);
  activeBtn.classList.add(...config.active);
}

function transitionSlides(filterValue, slides) {
  slides.forEach(slide => {
    const category = slide.getAttribute('data-category');
    const isMatch = (filterValue === 'ALL' || category === filterValue);

    if (isMatch) {
      showSlide(slide);
    } else {
      hideSlide(slide);
    }
  });
}

// ==========================================
// 4. MICRO-TRANSITIONS
// ==========================================
function showSlide(slide) {
  slide.style.display = 'flex';
  
  requestAnimationFrame(() => {
    slide.style.opacity = '1';
  });
}

function hideSlide(slide) {
  slide.style.opacity = '0';
  
  setTimeout(() => {
    if (slide.style.opacity === '0') {
      slide.style.display = 'none';
    }
  }, 300);
}

function resetCarousel(track) {
  if (track) {
    track.scrollTo({ left: 0, behavior: 'smooth' });
  }
}