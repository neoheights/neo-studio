import React from 'react';
import styles from './Partners.module.scss';
import Image from 'next/image';

const Partners = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.topRow}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Exclusive Partners</h2>
          <p className={styles.description}>
            Together, we are not just building interiors we're curating living experiences that reflect individuality, detail, and enduring quality.
          </p>
        </div>
        <div className={styles.logoColumn}>
          <Image
            src={require('@/assets/images/partner/partner_1.png')}
            alt="partner"
            className={styles.partnerLogo}
            width={400}
            height={400}
          />
          <Image
            src={require('@/assets/images/partner/partner_2.png')}
            alt="partner"
            className={styles.partnerLogo}
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className={styles.imageRow}>
        <div className={styles.imageWrapper}>
          <Image
            src={require('@/assets/images/Hero/BG.png')}
            alt="Wardrobe Design" 
            className={styles.partnerImage} 
            width={1000}
            height={1000}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={require('@/assets/images/Hero/BG.png')}
            alt="Kitchen Design" 
            className={styles.partnerImage} 
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
