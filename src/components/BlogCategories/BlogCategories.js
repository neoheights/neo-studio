'use client';

import React, { useState } from 'react';
import styles from './BlogCategories.module.scss';

const categories = [
  { id: 'all', name: 'All Articles', count: 12 },
  { id: 'residential', name: 'Residential', count: 8 },
  { id: 'commercial', name: 'Commercial', count: 4 },
  { id: 'kitchen', name: 'Kitchen Designs', count: 3 },
  { id: 'living', name: 'Living Room', count: 5 },
  { id: 'bedroom', name: 'Bedroom', count: 6 }
];

const BlogCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.categoriesList}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.categoryItem} ${activeCategory === cat.id ? styles.active : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name} <span>({cat.count})</span>
          </button>
        ))}
      </div>
      {/* <div className={styles.searchIcon}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div> */}
    </div>
  );
};

export default BlogCategories;
