'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Testimonials.module.scss';

const testimonialsData = [
  {
    id: 1,
    name: 'Steven Clear',
    role: 'Building new bedroom',
    rating: 4,
    text: 'Fantastic experience with this renovation team. They turned our small bedroom into a beautiful, functional space.',
    image: require('@/assets/images/testimonials/testimonials1.png'),
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Modern Kitchen Design',
    rating: 5,
    text: 'The attention to detail was incredible. Our kitchen has become the heart of our home, exactly as we imagined.',
    image: require('@/assets/images/crafted/crafted2.jpg'),
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Living Room Remodel',
    rating: 5,
    text: 'Professional, creative, and timely. They took total ownership of the project and the results speak for themselves.',
    image: require('@/assets/images/crafted/crafted3.jpg'),
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.trustedBy}>Trusted by 12k+</span>
          <h2 className={styles.title}>Hear from families who love their new spaces</h2>
        </div>

        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 75)}%)` }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
              >
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={styles.image}
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.rating}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          fill={i < testimonial.rating ? "#1D8F4A" : "transparent"}
                          color={i < testimonial.rating ? "#1D8F4A" : "#ccc"}
                        />
                      ))}
                    </div>
                    <div>
                      <p className={styles.text}>{testimonial.text}</p>
                      <div className={styles.divider}></div>
                      <div className={styles.author}>
                        <h4 className={styles.name}>{testimonial.name}</h4>
                        <p className={styles.role}>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.controlBtn} onClick={handlePrev}>
            <ChevronLeft size={20} />
          </button>
          <button className={`${styles.controlBtn} ${styles.activeBtn}`} onClick={handleNext}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
