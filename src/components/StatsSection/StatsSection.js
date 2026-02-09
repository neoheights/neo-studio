'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './StatsSection.module.scss';

const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = (t) => t * (2 - t);
      
      const currentCount = Math.floor(easeOutQuad(percentage) * (end - start) + start);
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, end, duration, start]);

  return { count, elementRef };
};

const StatItem = ({ end, suffix, label }) => {
    // Parse 'end' to number if it has 'K' or 'M' for calculation, then append suffix
    // Actually simpler to just count to the number part
    const { count, elementRef } = useCounter(end);
    
    return (
        <div className={styles.statItem} ref={elementRef}>
            <div className={styles.number}>
                {count}{suffix}
            </div>
            <div className={styles.label}>{label}</div>
        </div>
    );
};

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <StatItem end={2} suffix="K+" label="Projects Completed" />
        <div className={styles.divider}></div>
        <StatItem end={25} suffix="+" label="Years of Experience" />
        <div className={styles.divider}></div>
        <StatItem end={2} suffix="M" label="Square feet Built" />
      </div>
    </section>
  );
};

export default StatsSection;
