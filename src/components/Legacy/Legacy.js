"use client";

import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';
import styles from './Legacy.module.scss';

import LeftSideImage from '@/assets/images/legacy/left_side_image.png';
import ArulGrpLogo from '@/assets/images/legacy/arul_group_log.png';
import Arul_1997 from '@/assets/images/legacy/arul_1997.png';
import Arul_1998 from '@/assets/images/legacy/arul_1998.png';
import NeoStuidoLogo from '@/assets/images/legacy/neo_studio_logo.png';

const Legacy = () => {
    return (
        <section className={styles.legacySection}>
            <div className={`container ${styles.container}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={LeftSideImage}
                        alt="Legacy of Arul Group"
                        className={styles.legacyImage}
                        placeholder="blur"
                    />
                    <div className={styles.quoteCard}>
                        <Quote className={styles.quoteIcon} size={24} fill="currentColor" />
                        <div className={styles.quoteTextWrap}>
                            <p className={styles.quoteText}>
                                Our legacy is defined by the structures we build and the trust we earn with every client.
                            </p>
                            <span className={styles.quoteAuthor}>— Arul Group Leadership</span>
                        </div>
                    </div>
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.mainLogo}>
                        <Image
                            src={ArulGrpLogo}
                            alt="Arul Group"
                            width={120}
                            height={80}
                            className={styles.logoImage}
                        />
                    </div>

                    <h2 className={styles.title}>
                        A Legacy Built on Trust and Engineering Excellence
                    </h2>

                    <p className={styles.description}>
                        Neo Heights, part of the Arul Group, offers civil, PEB, interior, and MEP solutions focused on quality and long-term value.
                    </p>

                    <div className={styles.subLogos}>
                        <div className={styles.subLogoItem}>
                            <Image src={Arul_1997} alt="Arul Polymers" className={styles.subLogoImg} />
                        </div>
                        <div className={styles.subLogoItem}>
                            <Image src={Arul_1998} alt="Arul Rubbers" className={styles.subLogoImg} />
                        </div>
                        <div className={styles.subLogoItem}>
                            <Image src={NeoStuidoLogo} alt="Neo Studio" className={styles.subLogoImg} />
                        </div>
                    </div>

                    <a href="#" className={styles.learnMoreLink}>
                        Learn More <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Legacy;
