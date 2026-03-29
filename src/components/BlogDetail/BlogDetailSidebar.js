'use client';

import React, { useState, useEffect } from 'react';
import styles from './BlogDetailSidebar.module.scss';
import { usePopup } from '@/components/PopupProvider';

const BlogDetailSidebar = ({ blog }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { openPopup } = usePopup();

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = Math.round((winScroll / height) * 100);
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(sections).indexOf(entry.target);
            if (idx !== -1) setActiveSection(idx);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('[data-section]');
    if (sections[index]) {
      const top = sections[index].getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.stickyWrapper}>
        <div className={styles.tocCard}>
          <h3 className={styles.tocTitle}>Table of Contents</h3>
          <nav className={styles.tocNav}>
            {blog.tableOfContents.map((item, i) => (
              <button
                key={i}
                className={`${styles.tocItem} ${activeSection === i ? styles.tocItemActive : ''}`}
                onClick={() => scrollToSection(i)}
              >
                <span className={styles.tocNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.tocText}>{item.text}</span>
              </button>
            ))}
          </nav>

          <div className={styles.progressContainer}>
            <div className={styles.progressHeader}>
              <span className={styles.progressLabel}>Reading Progress</span>
              <span className={styles.progressValue}>{scrollProgress}%</span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${scrollProgress}%` }} />
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.saveButton}>Save Article</button>
            <button className={styles.quoteButton} onClick={openPopup}>
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BlogDetailSidebar;
