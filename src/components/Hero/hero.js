'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Home, Box, Mountain, Building } from 'lucide-react';
import styles from './HeroStyles.module.scss';
import { usePopup } from '../PopupProvider';

// Import images
import BG from '../../assets/images/Hero/BG.png';
import BG1 from '../../assets/images/Hero/BG-1.png';
import BG2 from '../../assets/images/Hero/BG-2.png';
import BG3 from '../../assets/images/Hero/BG-3.png';
import BG4 from '../../assets/images/Hero/BG-4.png';
import BG5 from '../../assets/images/Hero/BG-5.png';
import BG6 from '../../assets/images/Hero/BG-6.png';

const images = [BG, BG1, BG2, BG3, BG4, BG5, BG6];

export default function Hero() {
  const { openPopup } = usePopup();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
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
    <section className={styles.heroSection} id='home'>
      <div className={styles.overlayContainer}></div>

      {/* Background Carousel */}
      <div className={styles.backgroundCarousel}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.bgImage} ${index === currentImageIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${img.src})` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1>Timeless Interiors.<br />Crafted for You.</h1>
        <p>
          As premier interior designers in Bangalore, we blend engineering excellence with bespoke
          aesthetics to transform your space into a beautiful room you&apos;ll love specializing in high-end 2
          BHK interior design and luxury 3 BHK flat interior design.
        </p>
        <button className={styles.ctaButton} onClick={openPopup}>Get Free Quote</button>
      </div>

      {/* Bottom Right Popup */}
      {isPopupOpen && (
        <div className={styles.verticalsPopup}>
          <div className={styles.popupHeader}>
            <span>Our Other Verticals</span>
            <X size={18} className={styles.closeIcon} onClick={() => setIsPopupOpen(false)} />
          </div>
          <div className={styles.verticalsList}>
            <div className={styles.verticalItem} title="Vertical 1">
              <Image
                src={require('@/assets/images/Hero/vertex1.png')}
                alt="i"
                className={styles.verticalItemImage}
                width={1000}
                height={1000}
              />
            </div>
            <div className={styles.verticalItem} title="Vertical 2">
              <Image
                src={require('@/assets/images/Hero/vertex2.png')}
                alt="i"
                className={styles.verticalItemImage}
                width={1000}
                height={1000}
              />
            </div>
            <div className={styles.verticalItem} title="Vertical 3">
              <Image
                src={require('@/assets/images/Hero/vertex3.png')}
                alt="i"
                className={styles.verticalItemImage}
                width={1000}
                height={1000}
              />
            </div>
            <div className={styles.verticalItem} title="Vertical 4">
              <Image
                src={require('@/assets/images/Hero/vertex4.png')}
                alt="i"
                className={styles.verticalItemImage}
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
