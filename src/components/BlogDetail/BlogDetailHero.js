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
      } catch { }
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {blog.date}
            </span>
            <span className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {blog.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.sharePanel}>
        <span className={styles.shareLabel}>Share</span>
        <button className={styles.shareBtn} onClick={() => handleShare('facebook')} aria-label="Share on Facebook">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_582_3678)">
              <path d="M17.9985 9.05398C17.9985 4.08415 13.9691 0.0547485 8.99923 0.0547485C4.02941 0.0547485 0 4.08415 0 9.05398C0 13.5461 3.29072 17.2688 7.5931 17.9437V11.6555H5.30805V9.05323H7.5931V7.0719C7.5931 4.81684 8.93699 3.57045 10.9926 3.57045C11.9765 3.57045 13.0069 3.74668 13.0069 3.74668V5.96124H11.8715C10.7533 5.96124 10.4046 6.65493 10.4046 7.36662V9.05398H12.9004L12.5014 11.6563H10.4046V17.9445C14.7077 17.2688 17.9985 13.5453 17.9985 9.05398Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_582_3678">
                <rect width="17.9985" height="17.9985" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className={styles.shareBtn} onClick={() => handleShare('twitter')} aria-label="Share on Twitter">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_582_3681)">
              <path d="M17.9632 3.42723C17.2894 3.72391 16.5755 3.91975 15.8446 4.00843C16.6142 3.54591 17.1903 2.82057 17.4668 1.96636C16.7536 2.38257 15.9631 2.68555 15.1217 2.85428C14.5666 2.26066 13.831 1.86693 13.0291 1.73425C12.2273 1.60158 11.404 1.73737 10.6873 2.12054C9.97053 2.50371 9.40034 3.11282 9.06527 3.85329C8.73019 4.59376 8.64898 5.42414 8.83424 6.2155C5.76701 6.07076 3.04999 4.59713 1.22989 2.37132C0.899019 2.93364 0.726436 3.57499 0.730438 4.22742C0.730438 5.50981 1.38288 6.63696 2.3713 7.29915C1.78549 7.28051 1.21263 7.12212 0.70044 6.83719V6.88219C0.700108 7.73441 0.994616 8.5605 1.534 9.22031C2.07338 9.88011 2.82442 10.333 3.65969 10.5021C3.11846 10.6472 2.55159 10.6689 2.00083 10.5659C2.2379 11.2993 2.69802 11.9405 3.31698 12.3998C3.93594 12.8592 4.68286 13.1139 5.45353 13.1284C4.14829 14.1528 2.53664 14.7087 0.877425 14.707C0.58495 14.707 0.293225 14.6898 0 14.6568C1.69164 15.7399 3.65857 16.3149 5.66727 16.3134C12.4564 16.3134 16.1649 10.6919 16.1649 5.82553C16.1649 5.66804 16.1649 5.51056 16.1536 5.35307C16.8781 4.83176 17.5029 4.18453 17.9985 3.44223L17.9632 3.42723Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_582_3681">
                <rect width="17.9985" height="17.9985" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className={styles.shareBtn} onClick={() => handleShare('linkedin')} aria-label="Share on LinkedIn">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_582_3684)">
              <path d="M14.2488 0H3.74968C1.67911 0 0 1.67911 0 3.74968V14.2488C0 16.3194 1.67911 17.9985 3.74968 17.9985H14.2488C16.3201 17.9985 17.9985 16.3194 17.9985 14.2488V3.74968C17.9985 1.67911 16.3201 0 14.2488 0ZM5.99949 14.2488H3.74968V5.99949H5.99949V14.2488ZM4.87458 5.04857C4.15015 5.04857 3.5622 4.45612 3.5622 3.72568C3.5622 2.99524 4.15015 2.40279 4.87458 2.40279C5.59902 2.40279 6.18697 2.99524 6.18697 3.72568C6.18697 4.45612 5.59977 5.04857 4.87458 5.04857ZM14.9987 14.2488H12.7489V10.0461C12.7489 7.52036 9.74917 7.71159 9.74917 10.0461V14.2488H7.49936V5.99949H9.74917V7.32312C10.7961 5.38379 14.9987 5.24055 14.9987 9.17997V14.2488Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_582_3684">
                <rect width="17.9985" height="17.9985" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className={styles.shareBtn} onClick={handleNativeShare} aria-label="Share">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_582_3687)">
              <path d="M3 8.99921V14.9987C3 15.3965 3.15802 15.778 3.4393 16.0593C3.72058 16.3405 4.10208 16.4986 4.49987 16.4986H13.4991C13.8969 16.4986 14.2784 16.3405 14.5597 16.0593C14.841 15.778 14.999 15.3965 14.999 14.9987V8.99921" stroke="white" stroke-width="1.49987" />
              <path d="M11.9995 4.49962L8.99974 1.49988L6 4.49962" stroke="white" stroke-width="1.49987" />
              <path d="M9 1.49988V11.249" stroke="white" stroke-width="1.49987" />
            </g>
            <defs>
              <clipPath id="clip0_582_3687">
                <rect width="17.9985" height="17.9985" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default BlogDetailHero;
