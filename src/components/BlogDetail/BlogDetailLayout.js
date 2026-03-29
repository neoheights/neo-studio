'use client';

import React from 'react';
import styles from './BlogDetailLayout.module.scss';
import BlogDetailHero from './BlogDetailHero';
import BlogDetailContent from './BlogDetailContent';
import BlogDetailSidebar from './BlogDetailSidebar';

const BlogDetailLayout = ({ blog }) => {
  return (
    <article className={styles.articleWrapper}>
      <BlogDetailHero blog={blog} />

      <div className={styles.bodyContainer}>
        <div className={styles.bodyGrid}>
          <main className={styles.mainContent}>
            <BlogDetailContent blog={blog} />
          </main>
          <BlogDetailSidebar blog={blog} />
        </div>
      </div>
    </article>
  );
};

export default BlogDetailLayout;
