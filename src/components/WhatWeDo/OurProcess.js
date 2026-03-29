import React from 'react';
import styles from './OurProcess.module.scss';

const OurProcess = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'Free design consultation to understand your vision',
    },
    {
      num: '02',
      title: 'Design Concept',
      desc: '3D designs and material selection',
    },
    {
      num: '03',
      title: 'Execution',
      desc: 'Professional installation with quality checks',
    },
    {
      num: '04',
      title: 'Handover',
      desc: 'Final inspection and warranty documentation',
    }
  ];

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Process</h2>
          <p className={styles.subheading}>
            A streamlined approach from concept to completion
          </p>
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.largeNum}>{step.num}</div>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
