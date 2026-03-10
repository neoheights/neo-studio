'use client'

import React from 'react';
import styles from './CTASection.module.scss';
import { usePopup } from '../PopupProvider';

const CTASection = () => {
  const { openPopup } = usePopup();
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
    <section className={styles.ctaSection}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.bgVideo}
      >
        <source src="/videos/cta_bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Don&apos;t wait another day to create the home you&apos;ve always wanted
        </h2>
        <button className={styles.ctaButton} onClick={openPopup}>
          Get Free Quote
        </button>
      </div>
    </section>
  );
};

export default CTASection;
