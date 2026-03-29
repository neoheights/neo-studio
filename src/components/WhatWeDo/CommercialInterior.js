import React from 'react';
import styles from './CommercialInterior.module.scss';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const CommercialInterior = () => {
  const cards = [
    {
      id: 1,
      title: 'Saloon & Spa',
      desc: 'Serene and sophisticated spa interiors that enhance the wellness experience.',
      img: require('@/assets/images/whatWeDo/commercial1.jpg')
    },
    {
      id: 2,
      title: 'Restaurant & Cafe',
      desc: 'Captivating dining spaces that create memorable experiences for your customers.',
      img: require('@/assets/images/whatWeDo/commercial2.jpg')
    },
    {
      id: 3,
      title: 'Educational Institution',
      desc: 'Innovative learning environments designed to inspire creativity and collaboration.',
      img: require('@/assets/images/whatWeDo/commercial3.jpg')
    },
    {
      id: 4,
      title: 'Hotel & Resort',
      desc: 'Luxurious hospitality interiors that provide comfort and elegance for guests.',
      img: require('@/assets/images/whatWeDo/commercial4.jpg')
    },
    {
      id: 5,
      title: 'Hospital & Clinic',
      desc: 'Healing spaces designed with patient comfort and operational efficiency in mind.',
      img: require('@/assets/images/whatWeDo/commercial5.jpg')
    },
    {
      id: 6,
      title: 'Office Workspace',
      desc: 'Productive workspaces that boost employee morale and reflect your brand identity.',
      img: require('@/assets/images/whatWeDo/commercial6.jpg')
    }
  ];

  return (
    <section className={styles.commercialSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.heading}>Commercial Interior</h2>
          <div className={styles.iconWrapper}>
            <ChevronRight size={20} className={styles.icon} />
          </div>
        </div>

        <p className={styles.subheading}>
          Professional interior solutions for businesses. From retail stores to corporate offices, we create spaces that enhance productivity and customer experience.
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

export default CommercialInterior;
