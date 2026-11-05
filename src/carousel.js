(function () {
  function init() {
    document.querySelectorAll('[data-carousel]').forEach(function (root) {
      if (root.dataset.ready) return;
      var track = root.querySelector('.carousel__track');
      if (!track) { console.warn('Carousel: .carousel__track not found'); return; }
      var slides = Array.prototype.slice.call(track.children);
      var count = root.querySelector('.carousel__count');
      var dotsWrap = root.querySelector('.carousel__dots');
      var index = 0;

      var dots = [];
      if (dotsWrap) {
        dotsWrap.innerHTML = '';
        dots = slides.map(function (_, i) {
          var d = document.createElement('button');
          d.type = 'button';
          d.className = 'carousel__dot';
          d.setAttribute('aria-label', 'Go to spread ' + (i + 1));
          d.addEventListener('click', function () { goTo(i); });
          dotsWrap.appendChild(d);
          return d;
        });
      }

      function btn(sel) { return root.querySelector(sel); }

      function render() {
        dots.forEach(function (d, i) { d.setAttribute('aria-selected', String(i === index)); });
        if (count && !count.hasAttribute('data-static')) count.textContent = (index + 1) + ' / ' + slides.length;
        var p = btn('.carousel__btn--prev'), n = btn('.carousel__btn--next');
        if (p) p.disabled = index === 0;
        if (n) n.disabled = index === slides.length - 1;
      }

      function goTo(i) {
        index = Math.max(0, Math.min(slides.length - 1, i));
        track.scrollTo({ left: slides[index].offsetLeft - track.offsetLeft, behavior: 'smooth' });
        render();
      }

      // Event delegation: works even if the buttons contain an <svg> or you swap them later
      root.addEventListener('click', function (e) {
        if (e.target.closest('.carousel__btn--prev')) goTo(index - 1);
        else if (e.target.closest('.carousel__btn--next')) goTo(index + 1);
      });

      var raf;
      track.addEventListener('scroll', function () {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function () {
          var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
          var i = Math.round(track.scrollLeft / (slides[0].offsetWidth + gap));
          i = Math.max(0, Math.min(slides.length - 1, i));
          if (i !== index) { index = i; render(); }
        });
      }, { passive: true });

      root.tabIndex = 0;
      root.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
      });

      root.dataset.ready = 'true';
      render();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();