'use client';

import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import styles from './BlogDetailHero.module.scss';

const BlogDetailHero = ({ blog }) => {
  const handleShare = (platform) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = blog.title;
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
    };
    if (shareUrls[platform]) window.open(shareUrls[platform], '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: blog.title, url: window.location.href });
      } catch {}
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgImage}>
        <Image
          src={blog.heroImage}
          alt={blog.title}
          fill
          className={styles.img}
          priority
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.contentWrapper}>
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
          {blog.breadcrumb.map((crumb, i) => (
            <React.Fragment key={crumb}>
              <span className={i === blog.breadcrumb.length - 1 ? styles.breadcrumbActive : styles.breadcrumbItem}>
                {crumb}
              </span>
              {i < blog.breadcrumb.length - 1 && <span className={styles.breadcrumbSep}>/</span>}
            </React.Fragment>
          ))}
        </nav>

        <div className={styles.categoryBadge}>{blog.category}</div>

        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.subtitle}>{blog.subtitle}</p>

        <div className={styles.metaRow}>
          <div className={styles.authorBox}>
            <div className={styles.authorAvatar}>{blog.author.initials}</div>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{blog.author.name}</span>
              <span className={styles.authorRole}>{blog.author.role}</span>
            </div>
          </div>
          <div className={styles.metaDetails}>
            <span className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {blog.date}
            </span>
            <span className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {blog.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.sharePanel}>
        <span className={styles.shareLabel}>Share</span>
        <button className={styles.shareBtn} onClick={() => handleShare('facebook')} aria-label="Share on Facebook">
          <Facebook size={18} />
        </button>
        <button className={styles.shareBtn} onClick={() => handleShare('twitter')} aria-label="Share on Twitter">
          <Twitter size={18} />
        </button>
        <button className={styles.shareBtn} onClick={() => handleShare('linkedin')} aria-label="Share on LinkedIn">
          <Linkedin size={18} />
        </button>
        <button className={styles.shareBtn} onClick={handleNativeShare} aria-label="Share">
          <Share2 size={18} />
        </button>
      </div>
    </section>
  );
};

export default BlogDetailHero;
