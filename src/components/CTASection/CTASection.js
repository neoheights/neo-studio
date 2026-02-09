import React from 'react';
import styles from './CTASection.module.scss';

const CTASection = () => {
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
        <button className={styles.ctaButton}>
          Get Free Quote
        </button>
      </div>
    </section>
  );
};

export default CTASection;
