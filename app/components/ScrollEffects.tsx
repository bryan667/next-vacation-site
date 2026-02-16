"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      const nav = document.querySelector<HTMLElement>("nav[data-site-nav]");
      nav?.classList.toggle("scrolled", scrolled > 100);

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((element) => {
        const speed = Number(element.dataset.parallax ?? "0");
        const parent = element.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.style.transform = `translateY(${scrolled * speed}px) scale(1.1)`;
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll<HTMLElement>(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}