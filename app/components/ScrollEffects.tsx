'use client';

import { useEffect } from 'react';

export function ScrollEffects() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      const nav = document.querySelector<HTMLElement>('nav[data-site-nav]');
      nav?.classList.toggle('scrolled', scrolled > 100);

      document
        .querySelectorAll<HTMLElement>('[data-parallax]')
        .forEach((element) => {
          const speed = Number(element.dataset.parallax ?? '0');
          const parent = element.parentElement;
          if (!parent) return;
          const rect = parent.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const parentCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const offset = (viewportCenter - parentCenter) * speed;
            element.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.1)`;
          }
        });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 },
    );

    document
      .querySelectorAll<HTMLElement>('.animate-on-scroll')
      .forEach((element) => {
        observer.observe(element);
      });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
