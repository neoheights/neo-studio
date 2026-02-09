import React from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './SectionHeader.module.scss';

export default function SectionHeader({ 
  title, 
  description, 
  buttonText, 
  layout = 'center', // 'center' | 'side'
  onButtonClick 
}) {
  return (
    <div className={`${styles.sectionHeader} ${styles[layout]}`}>
      {layout === 'center' ? (
        <>
          <h2>{title}</h2>
          <p>{description}</p>
          {buttonText && (
            <button className={styles.actionButton} onClick={onButtonClick}>
              {buttonText}
            </button>
          )}
        </>
      ) : (
        <>
          <div className={styles.titleWrapper}>
            <h2>{title}</h2>
          </div>
          <div className={styles.contentWrapper}>
            <p>{description}</p>
            {buttonText && (
              <button className={styles.actionLink} onClick={onButtonClick}>
                {buttonText}
                <span className={styles.iconBox}>
                   <ChevronRight size={16} />
                </span>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
