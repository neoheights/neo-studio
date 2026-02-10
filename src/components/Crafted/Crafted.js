'use client';

import { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Crafted.module.scss';
import Image from 'next/image';

const dummyImages = [
  require('@/assets/images/Hero/BG-1.png'),
  require('@/assets/images/Hero/BG-1.png'),
  require('@/assets/images/Hero/BG-1.png')
];

export default function Crafted() {
  const items = [
    {
      id: 1,
      title: 'Residential Interiors',
      description: 'Curating the Art of Living Well from modern 2 BHK flat design to expansive 3 BHK interior design.',
      image: dummyImages[0]
    },
    {
      id: 2,
      title: 'Living Room Designs',
      description: 'The Social Heart: Timeless living spaces tailored for connection.',
      image: dummyImages[1]
    },
    {
      id: 3,
      title: 'Kitchens',
      description: 'The Culinary Studio: Functional kitchen interior design that inspires.',
      image: dummyImages[2]
    }
  ];

  return (
    <section className={styles.craftedSection} id="crafted-section">
      <SectionHeader
        title="Great Spaces are Crafted with Skill, Passion, and Attention to Detail."
        description="From initial design support to final delivery, our complete business model ensures excellence at every stage of the project lifecycle."
        buttonText="Discover more"
        layout="side"
      />

      <div className={styles.contentContainer}>
        <div className={styles.listWrapper}>
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={styles.listItemWrap}
            >
              <div
                className={styles.listItem}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt="Interior Design"
                  className={styles.displayImage}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
