import React from 'react';
import styles from './WhyChoose.module.scss';
import { Check } from 'lucide-react';

const WhyChoose = () => {
  const cards = [
    {
      id: 1,
      title: 'Expert Design Team',
      desc: 'Experienced interior designers with 10+ years expertise',
    },
    {
      id: 2,
      title: 'End-to-End Execution',
      desc: 'From concept to completion, we handle everything',
    },
    {
      id: 3,
      title: 'Quality Materials',
      desc: 'Premium materials sourced from trusted partners',
    },
    {
      id: 4,
      title: 'Timely Delivery',
      desc: 'Projects completed on schedule, every time',
    },
    {
      id: 5,
      title: 'Transparent Pricing',
      desc: 'No hidden costs, clear quotations upfront',
    },
    {
      id: 6,
      title: 'Post-Service Support',
      desc: '10-year warranty on all interior work',
    }
  ];

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose Neo Studio?</h2>
        <p className={styles.subheading}>
          We combine engineering excellence with bespoke aesthetics to deliver interiors
          <br className={styles.break}/> that stand the test of time.
        </p>

        <div className={styles.cardsGrid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.iconCircle}>
                <Check size={20} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
