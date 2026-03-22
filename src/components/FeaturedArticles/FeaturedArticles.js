'use client';

import React from 'react';
import styles from './FeaturedArticles.module.scss';
import Image from 'next/image';

const featuredPosts = [
  {
    id: 1,
    category: 'Residential',
    title: 'Luxury 3 BHK Interior Design: Creating Timeless Elegance',
    description: 'Explore how our team transforms spacious 3 BHK apartments into sophisticated living spaces that blend functionality with high-end aesthetics. From modern minimalism to classic luxury.',
    date: 'March 1, 2026',
    readTime: '8 min read',
    image: require('@/assets/images/blogs/main/residential.jpg'),
    isMain: true
  },
  {
    id: 2,
    category: 'Commercial',
    title: 'Modern Office Design Trends for 2026',
    description: 'The evolution of workspace design and how to create productive environments',
    date: 'Feb 28, 2026',
    readTime: '5 min read',
    image: require('@/assets/images/blogs/main/commercial.jpg'),
    isMain: false
  },
  {
    id: 3,
    category: 'Kitchen Design',
    title: 'The Culinary Studio: Functional Kitchen Excellence',
    description: "Essential tips for creating a kitchen that's both beautiful and highly functional",
    date: 'Feb 26, 2026',
    readTime: '6 min read',
    image: require('@/assets/images/blogs/main/kitchen.jpg'),
    isMain: false
  }
];

const FeaturedArticles = () => {
  const mainPost = featuredPosts.find(p => p.isMain);
  const secondaryPosts = featuredPosts.filter(p => !p.isMain);

  return (
    <section className={styles.featuredSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Featured Articles</h2>
        <p className={styles.sectionDesc}>Dive deep into our most popular interior design stories, innovations, and project showcases.</p>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.mainArticle}>
          <div className={styles.card}>
            <Image src={mainPost.image} alt={mainPost.title} className={styles.image} layout="fill" objectFit="cover" />
            <div className={styles.overlay}></div>
            <div className={styles.cardContent}>
              <span className={styles.categoryBadge}>{mainPost.category}</span>
              <h3 className={styles.title}>{mainPost.title}</h3>
              <p className={styles.description}>{mainPost.description}</p>
              <div className={styles.meta}>
                <span>{mainPost.date}</span>
                <span className={styles.dot}></span>
                <span>{mainPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.secondaryArticles}>
          {secondaryPosts.map(post => (
            <div key={post.id} className={styles.secondaryCard}>
              <div className={styles.card}>
                <Image src={post.image} alt={post.title} className={styles.image} layout="fill" objectFit="cover" />
                <div className={styles.overlay}></div>
                <div className={styles.cardContent}>
                  <span className={styles.categoryBadge}>{post.category}</span>
                  <h3 className={styles.title}>{post.title}</h3>
                  <p className={styles.description}>{post.description}</p>
                  <div className={styles.meta}>
                    <span>{post.date}</span>
                    <span className={styles.dot}></span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
