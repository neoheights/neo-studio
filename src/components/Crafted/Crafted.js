'use client';

import { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Crafted.module.scss';

const dummyImages = [
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop"
];

export default function Crafted() {
  const [activeImage, setActiveImage] = useState(dummyImages[0]);

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
          {items.map((item) => (
            <div 
              key={item.id} 
              className={styles.listItem}
              onMouseEnter={() => setActiveImage(item.image)}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.imageWrapper}>
           <img src={activeImage} alt="Interior Design" className={styles.displayImage} />
        </div>
      </div>
    </section>
  );
}
