import React from 'react';
import Image from 'next/image';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Milestones.module.scss';
import milestoneImage from '../../assets/images/milestone.png';

const Milestones = () => {
  return (
    <section className={styles.milestonesSection}>
      <SectionHeader 
        title="Our Milestones"
        description="Every milestone is built on passion, detail, and collaboration for our clients. Let's create the next one together."
        layout="center"
      />
      <div className={styles.imageWrapper}>
        <Image 
          src={milestoneImage} 
          alt="Our Milestones and Awards" 
          className={styles.milestoneImage}
          priority
        />
      </div>
    </section>
  );
};

export default Milestones;
