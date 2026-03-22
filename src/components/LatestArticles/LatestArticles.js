'use client';

import React from 'react';
import styles from './LatestArticles.module.scss';
import Image from 'next/image';

const latestPosts = [
  {
    id: 1,
    category: 'Bathrooms',
    title: 'Turn your bathroom into a spa without breaking the bank',
    description: 'Discover affordable ways to create a luxurious spa-like bathroom experience with smart design choices and quality fixtures.',
    date: 'Feb 25, 2026',
    readTime: '7 min read',
    image: require('@/assets/images/blogs/main/bathroom.png')
  },
  {
    id: 2,
    category: 'Improvement',
    title: 'Homeowners must-ask questions before renovating',
    description: 'Essential questions every homeowner should consider before starting their renovation journey to ensure success.',
    date: 'Feb 24, 2026',
    readTime: '6 min read',
    image: require('@/assets/images/blogs/main/improvement.png')
  },
  {
    id: 3,
    category: 'Living Room',
    title: 'Creating the perfect living room for entertaining guests',
    description: "Design tips for crafting a welcoming and functional living space that's perfect for hosting friends and family.",
    date: 'Feb 26, 2026',
    readTime: '5 min read',
    image: require('@/assets/images/blogs/main/living.png')
  },
  {
    id: 4,
    category: 'Residential',
    title: 'Small space solutions for modern 2 BHK apartments',
    description: 'Maximize every inch of your 2 BHK flat with clever storage solutions and multi-functional furniture pieces.',
    date: 'Feb 22, 2026',
    readTime: '8 min read',
    image: require('@/assets/images/blogs/main/residential_latest.png')
  },
  {
    id: 5,
    category: 'Kitchen Design',
    title: 'Modern kitchen layouts that enhance workflow',
    description: 'Explore the latest kitchen design trends that combine beauty with ergonomic functionality for the modern home.',
    date: 'Feb 21, 2026',
    readTime: '6 min read',
    image: require('@/assets/images/blogs/main/kitchen.jpg')
  },
  {
    id: 6,
    category: 'Commercial',
    title: 'Office design trends shaping the future of work',
    description: 'How contemporary commercial spaces are being redesigned to support hybrid work models and employee wellbeing.',
    date: 'Feb 20, 2026',
    readTime: '7 min read',
    image: require('@/assets/images/blogs/main/commercial.jpg')
  },
  {
    id: 7,
    category: 'Residential',
    title: 'Sustainable materials for eco-friendly interiors',
    description: 'A comprehensive guide to choosing environmentally responsible materials for your next interior design project.',
    date: 'Feb 19, 2026',
    readTime: '9 min read',
    image: require('@/assets/images/blogs/main/residential.jpg')
  }
];

const LatestArticles = () => {
  return (
    <section className={styles.latestSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Latest Articles</h2>
        <p className={styles.sectionDesc}>Stay updated with the latest trends, tips, and insights from our interior design experts.</p>
      </div>

      <div className={styles.postsList}>
        {latestPosts.map((post) => (
          <article key={post.id} className={styles.postCard}>
            <div className={styles.imageWrapper}>
              <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className={styles.postImage} />
            </div>
            <div className={styles.content}>
              <span className={styles.category}>{post.category}</span>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.description}>{post.description}</p>
              <div className={styles.meta}>
                <span>{post.date}</span>
                <span className={styles.dot}></span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.loadMore}>
        <button className={styles.loadMoreBtn}>Load More Articles</button>
      </div>
    </section>
  );
};

export default LatestArticles;
