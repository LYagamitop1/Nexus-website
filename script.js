
    // Scroll reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Counter animation
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          const isDecimal = target % 1 !== 0;
          let current = 0;
          const step = target / 40;
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = isDecimal ? target.toFixed(1) : Math.round(target).toLocaleString();
              clearInterval(interval);
            } else {
              el.textContent = isDecimal ? current.toFixed(1) : Math.round(current).toLocaleString();
            }
          }, 30);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));
