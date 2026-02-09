'use client';

import { useState, useEffect } from 'react';
import styles from './StickyQuoteButton.module.scss';

export default function StickyQuoteButton({ targetId }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        // If the top of the target element is within the viewport or above it (meaning we've scrolled past the start)
        // Adjust threshold as needed. 
        // "start with crafted section" -> when crafted section top comes into view (or close to it)
        if (rect.top <= window.innerHeight * 0.8) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetId]);

  return (
    <button className={`${styles.stickyQuoteButton} ${isVisible ? styles.visible : ''}`}>
      Get Free Quote
    </button>
  );
}
