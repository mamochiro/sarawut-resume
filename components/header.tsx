"use client";

import { useEffect, useRef } from "react";

export function Header() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Fade-in observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav id="nav" className="portfolio-nav" ref={navRef}>
      <a className="nav-logo" href="#">SN</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#stack">Stack</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/resume" target="_blank" className="nav-resume">Resume ↗</a></li>
      </ul>
    </nav>
  );
}
