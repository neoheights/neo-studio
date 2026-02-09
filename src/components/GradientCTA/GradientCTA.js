import React from 'react';
import styles from './GradientCTA.module.scss';

const GradientCTA = () => {
  return (
    <section className={styles.gradientSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Don't wait another day to create the home you've always wanted
          </h2>
          <button className={styles.ctaButton}>
            Get Free Quote
          </button>
        </div>
        
        <div className={styles.imageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1556912173-3db9963f6f02?q=80&w=1000&auto=format&fit=crop" 
            alt="Kitchen Interior" 
            className={styles.insetImage} 
          />
        </div>
        
        <div className={styles.footerText}>
          From outdated kitchens to tired bathrooms, we create spaces that make you fall in love with your home again.
        </div>
      </div>
    </section>
  );
};

export default GradientCTA;
