import React from 'react';
import { MapPin, Mail, Phone, ArrowRight, Facebook, Instagram, Linkedin, Globe, Youtube } from 'lucide-react';
import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.footerWithBanner}>
      <Image
        src={require('@/assets/images/footer_banner.png')}
        alt="footer_banner"
        className={styles.footerBanner}
        width={1000}
        height={1000}
      />
      <footer className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.topSection}>
            <div className={styles.headingWrapper}>
              <h2 className={styles.heading}>
                Let's discuss your Vision <br />
                <span className={styles.highlight}>Connect</span> with us
              </h2>
            </div>
            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>
                From outdated kitchens to tired bathrooms, we create spaces that make you fall in love with your home again.
              </p>
            </div>
          </div>

          <div className={styles.contactRow}>
            <div className={`${styles.contactCard} ${styles.addressCard}`}>
              <div className={styles.iconContent}>
                <MapPin className={styles.icon} size={20} />
                <p>Achuth Square Complex, 1018/1, 1st Floor 24th Main Rd, 13th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
              </div>
              <ArrowRight className={styles.arrow} size={20} />
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconContent}>
                <Mail className={styles.icon} size={20} />
                <p>hello@theneostudio.com</p>
              </div>
              <ArrowRight className={styles.arrow} size={20} />
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconContent}>
                <Phone className={styles.icon} size={20} />
                <p>+91 99722 83300</p>
              </div>
              <ArrowRight className={styles.arrow} size={20} />
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.bottomSection}>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}><Facebook size={18} /></a>
              <a href="#" className={styles.socialIcon}><Instagram size={18} /></a>
              <a href="#" className={styles.socialIcon}><Linkedin size={18} /></a>
              <a href="#" className={styles.socialIcon}><Globe size={18} /></a>
              <a href="#" className={styles.socialIcon}><Youtube size={18} /></a>
            </div>
            <div className={styles.copyright}>
              2026 © All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
