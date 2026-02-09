import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './TransformingSpaces.module.scss';

const TransformingSpaces = () => {
  const items = [
    {
      id: 1,
      category: 'Bathroom',
      title: 'Turn your bathroom into a spa without breaking the bank',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'Improvement',
      title: 'Homeowners must-ask questions before renovating',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  return (
    <section className={styles.transformingSection}>
      <SectionHeader 
        title="Transforming spaces into beautiful rooms you'll love"
        description="From initial design support to final delivery, our complete business model ensures excellence at every stage of the project lifecycle."
        layout="side"
      />

      <div className={styles.contentList}>
        {items.map(item => (
          <div key={item.id} className={styles.item}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} className={styles.itemImage} />
            </div>
            <div className={styles.textContent}>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransformingSpaces;
