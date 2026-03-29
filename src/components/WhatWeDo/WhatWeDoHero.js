'use client';
import React from 'react';
import styles from './WhatWeDoHero.module.scss';
import Image from 'next/image';
import { usePopup } from '@/components/PopupProvider';

const WhatWeDoHero = () => {
  const { openPopup } = usePopup();

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgOverlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Complete Interior Solutions <br /> for Every Space
          </h1>
          <p className={styles.description}>
            From cozy 2 BHK apartments to sprawling commercial complexes, we design spaces that inspire.
            Expert craftsmanship meets innovative design.
          </p>
          <button className={styles.ctaButton} onClick={openPopup}>
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoHero;
