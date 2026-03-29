import React from 'react';
import styles from './ResidentialInterior.module.scss';
import Image from 'next/image';

const ResidentialInterior = () => {
  const cards = [
    {
      id: 1,
      title: '2BHK Interior Design',
      desc: 'Modern, functional designs perfect for compact 2BHK apartments with smart storage solutions.',
      img: require('@/assets/images/whatWeDo/residential1.jpg')
    },
    {
      id: 2,
      title: '3BHK Interior Design',
      desc: 'Luxurious 3BHK interiors that combine elegance with functionality for modern families.',
      img: require('@/assets/images/whatWeDo/residential2.jpg')
    },
    {
      id: 3,
      title: 'Villa Interior Design',
      desc: 'Grand villa interiors with bespoke designs tailored to your lifestyle and preferences.',
      img: require('@/assets/images/whatWeDo/residential3.jpg')
    }
  ];

  return (
    <section className={styles.residentialSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Residential Interior</h2>
        <p className={styles.subheading}>
          Curating the Art of Living Well from modern 2 BHK flat design to expansive villa interiors. Transform your house into a home that reflects your personality.
        </p>

        <div className={styles.cardsGrid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={card.img}
                  alt={card.title}
                  className={styles.cardImage}
                  width={400}
                  height={300}
                />
                <div className={styles.imageOverlay}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
              </div>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentialInterior;
