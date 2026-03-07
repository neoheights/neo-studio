'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, X } from 'lucide-react';
import styles from './thank-you.module.scss';
import BGImage from '@/assets/images/thankYou/thankYouBg.jpg';
import Script from 'next/script';

const ThankYouPage = () => {
  return (
    <main>
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-17EXSCS0R9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-17EXSCS0R9');
          `}
        </Script>
      </head>
      <div className={styles.pageWrapper}>
        <div className={styles.thankYouCard}>
          <div className={styles.topSection}>
            <div className={styles.bottomWhiteBg} />
            <Image
              src={BGImage}
              alt="Thank You Background"
              className={styles.bgImage}
              priority
            />
            <Link href="/" className={styles.closeButton}>
              <X size={24} />
            </Link>
            <div className={styles.checkCircle}>
              <Check size={32} strokeWidth={3} />
            </div>
          </div>

          <div className={styles.contentSection}>
            <h1 className={styles.title}>Thank You!</h1>
            <p className={styles.description}>
              Your design journey begins now. Our expert interior
              designer will reach out to you within 24 hours to
              discuss your vision.
            </p>

            <div className={styles.divider}>
              <span className={styles.dot}></span>
            </div>

            <Link href="/" className={styles.exploreButton}>
              Continue Exploring
            </Link>

            <p className={styles.footerText}>
              Check your email for confirmation details
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;
