'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './BlogDetailContent.module.scss';

const ScrollImages = ({ images }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.scrollImagesWrapper}>
      <button className={`${styles.scrollArrow} ${styles.scrollLeft}`} onClick={() => scroll(-1)} aria-label="Scroll left">
        &#8592;
      </button>
      <div className={styles.scrollImagesTrack} ref={scrollRef}>
        {images.map((img, i) => (
          <div key={i} className={styles.scrollImageItem}>
            <Image src={img} alt={`Section image ${i + 1}`} className={styles.scrollImg} width={480} height={320} />
          </div>
        ))}
      </div>
      <button className={`${styles.scrollArrow} ${styles.scrollRight}`} onClick={() => scroll(1)} aria-label="Scroll right">
        &#8594;
      </button>
    </div>
  );
};

const ContentBlock = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className={styles.paragraph}>{block.content}</p>;

    case 'sub-title':
      return <h3 className={styles.subTitle}>{block.content}</h3>;

    case 'bullet-points':
      return (
        <ul className={styles.bulletList}>
          {block.content.map((item, i) => (
            <li key={i} className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      );

    case 'image':
      return (
        <figure className={styles.imageBlock}>
          <div className={styles.imageWrapper}>
            <Image
              src={block.content}
              alt={block.caption || ''}
              className={styles.contentImage}
              width={800}
              height={500}
            />
          </div>
          {block.caption && <figcaption className={styles.caption}>{block.caption}</figcaption>}
        </figure>
      );

    case 'scroll-images':
      return <ScrollImages images={block.content} />;

    case 'highlight':
      return (
        <div className={styles.highlightBox}>
          <h4 className={styles.highlightLabel}>{block.label}</h4>
          {block.content.length > 0 && (
            <ul className={styles.highlightList}>
              {block.content.map((item, i) => (
                <li key={i} className={styles.highlightItem}>
                  <span className={styles.checkIcon}></span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case 'quote':
      return (
        <blockquote className={styles.quoteBlock}>
          <p className={styles.quoteText}>{block.text}</p>
          {block.author && <cite className={styles.quoteAuthor}>— {block.author}</cite>}
        </blockquote>
      );

    case 'note':
      return (
        <div className={styles.noteBox}>
          <span className={styles.noteLabel}>Design Tip</span>
          <p className={styles.noteText}>{block.content}</p>
        </div>
      );

    default:
      return null;
  }
};

const BlogDetailContent = ({ blog }) => {
  return (
    <div className={styles.contentBody}>
      {blog.content.intro.map((para, i) => (
        <p key={i} className={styles.introPara}>
          {para}
        </p>
      ))}

      {blog.content.sections.map((section, i) => (
        <section key={i} id={section.id} data-section className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>{section.title}</h2>
          <div className={styles.sectionContent}>
            {section.sectionContent.map((block, j) => (
              <ContentBlock key={j} block={block} />
            ))}
          </div>
        </section>
      ))}

      {blog.content.tags && (
        <div className={styles.tagsContainer}>
          <span className={styles.tagsLabel}>Tags:</span>
          <div className={styles.tagsList}>
            {blog.content.tags.map((tag, i) => (
              <span key={i} className={styles.tagItem}>{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetailContent;
