// src/scripts/scroll_carousel.js

// ==========================================
// 1. MAIN EXPORT (System Orchestrator)
// ==========================================
export function initSysCarousel(container) {
  const dom = mapDomElements(container);
  if (!dom.track) return;

  const state = initializeState();
  
  bindEventListeners(state, dom);
  prepareManualUI(dom);
}

// ==========================================
// 2. INITIALIZATION HELPERS
// ==========================================
function mapDomElements(container) {
  return {
    track: container.querySelector('.carousel-track'),
    prevBtns: container.querySelectorAll('.prev-btn'),
    nextBtns: container.querySelectorAll('.next-btn'),
    navButtons: container.querySelector('.nav-buttons')
  };
}

function initializeState() {
  return {
    isTransitioning: false
  };
}

function bindEventListeners(state, dom) {
  dom.prevBtns.forEach(btn => {
    btn.addEventListener('click', () => scrollPrev(state, dom));
  });
  
  dom.nextBtns.forEach(btn => {
    btn.addEventListener('click', () => scrollNext(state, dom));
  });
}

function prepareManualUI(dom) {
  // Ensure the navigation buttons are always active/visible
  dom.navButtons?.classList.add('nav-active');
}

// ==========================================
// 3. RUNTIME LOGIC HELPERS
// ==========================================
function scrollPrev(state, dom) {
  if (state.isTransitioning || dom.track.children.length < 2) return;
  state.isTransitioning = true;

  const scrollAmount = getScrollAmount(dom.track);
  
  dom.track.style.scrollBehavior = 'auto';
  dom.track.prepend(dom.track.lastElementChild);
  dom.track.scrollLeft += scrollAmount;
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      dom.track.style.scrollBehavior = 'smooth';
      dom.track.scrollLeft -= scrollAmount;
      
      setTimeout(() => {
        state.isTransitioning = false;
      }, 500);
    });
  });
}

function scrollNext(state, dom) {
  if (state.isTransitioning || dom.track.children.length < 2) return;
  state.isTransitioning = true;
  
  const scrollAmount = getScrollAmount(dom.track);
  dom.track.scrollBy({ left: scrollAmount, behavior: 'smooth' });

  setTimeout(() => {
    dom.track.appendChild(dom.track.firstElementChild);
    dom.track.style.scrollBehavior = 'auto';
    dom.track.scrollLeft -= scrollAmount;
    
    requestAnimationFrame(() => {
      dom.track.style.scrollBehavior = 'smooth';
      state.isTransitioning = false;
    });
  }, 500); 
}

function getScrollAmount(track) {
  return track.firstElementChild.clientWidth + 24;
}