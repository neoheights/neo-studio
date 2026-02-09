import React from 'react';
import styles from './EndToEnd.module.scss';
import Image from 'next/image';

const EndToEnd = () => {
  return (
    <section className={styles.endToEndSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              End-To-End By One Interior Company
            </h2>
            <p className={styles.subheading}>
              We find the place of your dreams
            </p>

            <div className={styles.bannerPlaceholder}>
              <Image
                src={require('@/assets/images/EndToEnd/spaceToStories.png')}
                alt="City Skyline View"
                className={styles.bannerPlaceholderImage}
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className={styles.imageContent}>
            <video
              className={styles.imageContentImage}
              autoPlay
              muted
              loop
              controls={false}
              // playsInline
            >
              <source src="/videos/right.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndToEnd;
