'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { X, ChevronRight } from 'lucide-react';
import styles from './header.module.scss';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id) => {
    setIsDrawerOpen(false); // For mobile screens, close the navbar while clicking navbar element
    
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    const offset = 120; // navbar height
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleNavClick = (link) => {
    if (link.href.startsWith('/')) {
      setIsDrawerOpen(false);
      router.push(link.href);
    } else {
      scrollToSection(link.href);
    }
  };

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

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
    { name: 'Home', href: 'home' },
    { name: 'Projects', href: 'projects' },
    { name: 'About', href: 'about' },
    { name: 'What we do', href: '/what-we-do' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: 'contact' },
  ];

  // Desktop nav usually shows fewer items
  const desktopNavLinks = navLinks.filter(link => ['Projects', 'About', 'What we do', 'Blogs', 'Contact'].includes(link.name));

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <Image
          src={require('@/assets/images/logo.png')}
          alt="Neo_studio"
          className={`${styles.logo} ${isScrolled ? styles.logoOpen : ''}`}
          width={200}
          height={200}
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />

        <div className={styles.headerNavbar}>
          <nav className={styles.navDesktop}>
            {desktopNavLinks.map((link) => (
              <a key={link.name} className={styles.navItem} >
                <span role="presentation" onClick={() => handleNavClick(link)}>{link.name}</span>
              </a>
            ))}
          </nav>

          <button className={styles.menuButton} onClick={toggleDrawer}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 30V26.6667H35V30H5ZM5 21.6667V18.3333H35V21.6667H5ZM5 13.3333V10H35V13.3333H5Z" fill="currentColor" />
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
          <div className={styles.drawerLogo} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
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
            <a key={link.name} onClick={() => handleNavClick(link)}>
              {link.name}
              <ChevronRight className={styles.arrow} size={20} />
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
