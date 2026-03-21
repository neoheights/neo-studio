'use client';

import React from 'react';
import Image from 'next/image';
import styles from './LegacyOfDesign.module.scss';
import { usePopup } from '../PopupProvider';
import thumbnailImg from '@/assets/images/legacyOfDesign/legacyOfDesign.png';

const LegacyOfDesign = () => {
  const { openPopup } = usePopup();

  return (
    <section className={styles.legacySection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.contentLeft}>
            <h2 className={styles.title}>
              Begin Your Transformation<br />
              With A Legacy Of Design<br />
              Excellence
            </h2>

            <button className={styles.ctaButton} onClick={openPopup}>
              Get Free Quote
            </button>
          </div>

          <div className={styles.contentRight}>
            <div className={styles.imageWrapper}>
              <Image 
                src={thumbnailImg} 
                alt="Design Excellence" 
                className={styles.thumbnail}
                width={300}
                height={300}
              />
            </div>
            
            <p className={styles.description}>
              From outdated kitchens to tired bathrooms, we<br />
              create spaces that make you fall in love with<br />
              your home again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyOfDesign;
