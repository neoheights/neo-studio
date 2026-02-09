import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageCircle, PenTool, Truck, Key } from 'lucide-react';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      image: require('@/assets/images/chooseUs/consultation.png'),
      title: 'Free Consultation',
      hoverContent: 'Expert advice with a free consultation. Let us help you find the right solution.',
    },
    {
      id: 2,
      image: require('@/assets/images/chooseUs/planning.png'),
      title: 'Space Planning',
      hoverContent: 'Professional guidance with a complimentary consultation. ',
    },
    {
      id: 3,
      image: require('@/assets/images/chooseUs/execution.png'),
      title: 'Delivery & Execution',
      hoverContent: 'Expert advice with a free consultation. Let us help you find the right solution.',
    },
    {
      id: 4,
      image: require('@/assets/images/chooseUs/onTime.png'),
      title: 'On Time Handover',
      hoverContent: 'Professional guidance with a complimentary consultation. ',
    }
  ];

  return (
    <section className={styles.whySection}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>Why To Choose Us?</h2>
        <div className={styles.descriptionBlock}>
          <p className={styles.description}>
            We at The Neo Studio plan your interior project from its conception to completion. 
            Our experienced creative design consultants will undertake your needs to understand 
            an intensive functional requirement on site level. We'll gain a thorough understanding 
            of the intricacies and specific needs of your interiors.
          </p>
          <a href="#" className={styles.learnMore}>
            Learn more <ArrowRight size={16} className={styles.arrow} />
          </a>
        </div>
      </div>

      <div className={styles.cardsGrid}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={feature.image}
                alt={feature.title}
                className={styles.cardImage}
                width={80}
                height={80}
              />
            </div>
            <div className={styles.hoverOverlay}>
              <span className={styles.hoverText}>{feature.hoverContent}</span>
            </div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
