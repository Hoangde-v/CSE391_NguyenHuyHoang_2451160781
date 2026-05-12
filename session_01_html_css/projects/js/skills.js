// Animate skill progress bars when the skills section enters the viewport
(function(){
  const animateSkills = () => {
    const bars = document.querySelectorAll('.skill-progress');
    bars.forEach(bar => {
      const percent = bar.dataset.percent || bar.getAttribute('data-percent') || '0';
      bar.style.width = percent + '%';
    });
  };

  if ('IntersectionObserver' in window) {
    const section = document.querySelector('.skills-section');
    if (!section) return;
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    io.observe(section);
  } else {
    // fallback
    window.addEventListener('load', animateSkills);
  }
})();
