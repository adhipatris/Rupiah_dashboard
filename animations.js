// ─────────────────────────────────────────────
//  animations.js — Scroll reveal & timeline render
//  Depends on: data.js (loaded before this file)
// ─────────────────────────────────────────────

// ── Render timeline from data.js ──
function renderTimeline() {
  const container = document.getElementById('timeline-list');
  if (!container) return;

  TIMELINE_EVENTS.forEach(event => {
    const div = document.createElement('div');
    div.className = 'timeline-event' + (event.type ? ' ' + event.type : '');

    div.innerHTML = `
      <div class="timeline-year">${event.year}</div>
      <div class="timeline-body">
        <div class="timeline-event-title">${event.title}</div>
        <div class="timeline-event-desc">${event.desc}</div>
        <span class="timeline-rate">${event.rate}</span>
      </div>
    `;

    container.appendChild(div);
  });
}

// ── Intersection Observer for scroll reveals ──
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  // Observe .reveal elements
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Observe timeline events with staggered delay
  document.querySelectorAll('.timeline-event').forEach((el, i) => {
    el.style.transitionDelay = (i * 80) + 'ms';
    observer.observe(el);
  });
}

// ── Init ──
renderTimeline();
initScrollReveal();
