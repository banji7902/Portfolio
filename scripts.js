// scripts.js

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

// Hero Section Animation
gsap.from('.hero h1', {
  duration: 1.5,
  y: -100,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.5
});

gsap.from('.hero p', {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: 'power3.out',
  delay: 1
});

gsap.from('.cta', {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: 'power3.out',
  delay: 1.5
});

// Profile Section Animation
gsap.from('.profile h2', {
  duration: 1.5,
  y: -100,
  opacity: 0,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.profile',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none none'
  }
});

gsap.from('.skills h3', {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.skills',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none none'
  }
});

gsap.from('.skills li', {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: 'power3.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.skills',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none none'
  }
});

// Scrolling Animation
gsap.to(window, {
  duration: 1,
  scrollTo: {
    y: document.querySelector('.profile').getBoundingClientRect().top,
    autoKill: true
  },
  ease: 'power3.out'
});

document.querySelector('.cta').addEventListener('click', function() {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: document.querySelector('.profile').getBoundingClientRect().top,
      autoKill: true
    },
    ease: 'power3.out'
  });
});