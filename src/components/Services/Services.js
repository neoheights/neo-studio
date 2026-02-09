'use client';

import { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import styles from './Services.module.scss';
import Image from 'next/image';

// Dummy images for now
const dummyImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop";

export default function Services() {
  const [activeTab, setActiveTab] = useState('Residential'); // 'Residential' | 'Commercial'

  const toggleTab = () => {
    setActiveTab(activeTab === 'Residential' ? 'Commercial' : 'Residential');
  };

  const servicesData = {
    Residential: [
      { id: 1, title: 'Economy', image: dummyImage },
      { id: 2, title: 'Elite', image: dummyImage },
      { id: 3, title: 'Luxe', image: dummyImage },
    ],
    Commercial: [
      { id: 4, title: 'Office', image: dummyImage },
      { id: 5, title: 'Retail', image: dummyImage },
      { id: 6, title: 'Hospitality', image: dummyImage },
    ]
  };

  return (
    <section className={styles.servicesSection}>
      <SectionHeader 
        title="Designing Interiors with Purpose"
        description="From initial design support to final delivery, our complete business model ensures excellence at every stage of the project lifecycle."
        buttonText="Explore Services"
        layout="center"
      />

      <div className={styles.tabsContainer}>
        <div className={styles.centerTabs}>
            <div 
            className={`${styles.tabItem} ${activeTab === 'Residential' ? styles.active : ''}`}
            onClick={() => setActiveTab('Residential')}
            >
            Residential
            </div>
            <div 
            className={`${styles.tabItem} ${activeTab === 'Commercial' ? styles.active : ''}`}
            onClick={() => setActiveTab('Commercial')}
            >
            Commercial
            </div>
        </div>
        
        <div className={styles.arrowWrapper}>
            <button className={styles.arrowButton} onClick={toggleTab}>
            {activeTab === 'Residential' ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
        </div>
      </div>

      <div className={styles.gridContainer}>
        {servicesData[activeTab].map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.cardLabel}>
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
