'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight } from 'lucide-react';
import styles from './header.module.scss';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  // Desktop nav usually shows fewer items
  const desktopNavLinks = navLinks.filter(link => ['Projects', 'About', 'Services', 'Contact'].includes(link.name));

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <Image
          src={require('@/assets/images/logo.png')}
          alt="Neo_studio"
          className={styles.logo}
          width={200}
          height={200}
        />

        <div className={styles.headerNavbar}>
          <nav className={styles.navDesktop}>
            {desktopNavLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>

          <button className={styles.menuButton} onClick={toggleDrawer}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 30V26.6667H35V30H5ZM5 21.6667V18.3333H35V21.6667H5ZM5 13.3333V10H35V13.3333H5Z" fill="white" />
            </svg>
          </button>
        </div>
      </header>

      {/* Drawer Overlay */}
      <div
        className={`${styles.drawerOverlay} ${isDrawerOpen ? styles.open : ''}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer Menu */}
      <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
          <div className={styles.drawerLogo}>
            <Image
              src={require('@/assets/images/logo.png')}
              alt="Neo_studio"
              className={styles.imgLogo}
              width={200}
              height={200}
            />
            <div className={styles.logoText}>
              <span>TheNeoStudio</span>
              <span>Interior Design Studio</span>
            </div>
          </div>
          <button className={styles.closeButton} onClick={() => setIsDrawerOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsDrawerOpen(false)}>
              {link.name}
              <ChevronRight className={styles.arrow} size={20} />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
