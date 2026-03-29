import React from 'react';
import styles from './TransformYourSpaceCTA.module.scss';
import { Phone, Mail } from 'lucide-react';

const TransformYourSpaceCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Ready to Transform Your Space?</h2>
        <p className={styles.subheading}>
          Get a free consultation and 3D design preview. Our experts are ready to bring
          <br className={styles.break}/> your vision to life.
        </p>
        
        <div className={styles.buttonGroup}>
          <a href="tel:+919876543210" className={styles.callButton}>
            <Phone size={20} className={styles.icon} />
            Call: +91 98765 43210
          </a>
          <a href="mailto:info@neostudio.com" className={styles.mailButton}>
            <Mail size={20} className={styles.icon} />
            info@neostudio.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransformYourSpaceCTA;
