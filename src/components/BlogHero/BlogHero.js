'use client';

import React from 'react';
import styles from './BlogHero.module.scss';
import Image from 'next/image';

const BlogHero = () => {
  return (
    <section className={styles.blogHero}>
      <div className={styles.bgOverlay}></div>
      <div className={styles.content}>
        <div className={styles.badge}>BLOG</div>
        <h1 className={styles.title}>
          Interior Design Insights <br /> & Inspiration
        </h1>
        <p className={styles.description}>
          Discover the latest trends, expert tips, and timeless design principles from our team 
          of interior designers in Bangalore. Transform your space with insights from our luxury 
          2 BHK and 3 BHK interior design projects.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
