'use client';

import { useState, useEffect } from 'react';
import styles from './StickyQuoteButton.module.scss';

export default function StickyQuoteButton({ targetId }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const showAfter = window.innerHeight; // 100vh
          setIsVisible(window.scrollY >= showAfter);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // trigger once
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 120; // navbar height
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <button className={`${styles.stickyQuoteButton} ${isVisible ? styles.visible : ''}`} onClick={() => scrollToSection('contact')}>
      Get Free Quote
    </button>
  );
}
