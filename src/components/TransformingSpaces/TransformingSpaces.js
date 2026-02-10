import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './TransformingSpaces.module.scss';
import Image from 'next/image';

const TransformingSpaces = () => {
  const items = [
    {
      id: 1,
      category: 'Bathroom',
      title: 'Turn your bathroom into a spa without breaking the bank',
      image: require('@/assets/images/spaces/spaces1.png')
    },
    {
      id: 2,
      category: 'Improvement',
      title: 'Homeowners must-ask questions before renovating',
      image: require('@/assets/images/spaces/spaces2.png')
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
              <Image
                src={item.image}
                alt="Kitchen Design"
                className={styles.itemImage}
                width={1000}
                height={1000}
              />
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
