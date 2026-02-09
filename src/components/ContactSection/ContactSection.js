'use client';

import React, { useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import styles from './ContactSection.module.scss';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Property City',
    whatsapp: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        
        <div className={styles.formColumn}>
          <h2 className={styles.formTitle}>Talk to Designer</h2>
          <p className={styles.formSubtitle}>Enter your email below to login to your account</p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Name *</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Phone Number *</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="Enter Phone number" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Property City</label>
              <select 
                name="city" 
                value={formData.city} 
                onChange={handleChange}
                className={styles.select}
              >
                <option disabled>Property City</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>

            <div className={styles.checkboxGroup}>
              <input 
                type="checkbox" 
                id="whatsapp" 
                name="whatsapp"
                checked={formData.whatsapp}
                onChange={handleChange}
              />
              <label htmlFor="whatsapp">Send me updates on whatsapp</label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Let's Talk
            </button>

            <p className={styles.disclaimer}>
              By submitting, you agree to our privacy policy and terms of use, allowing us to use your information as outlined.
            </p>
          </form>
        </div>

        <div className={styles.infoColumn}>
          <h2 className={styles.infoTitle}>
            Don’t wait another day to create the home you’ve always wanted
          </h2>
          
          <div className={styles.roomCard}>
            <img 
              src="https://images.unsplash.com/photo-1556912173-3db9963f6f02?q=80&w=1200&auto=format&fit=crop" 
              alt="Living Room" 
              className={styles.roomImage} 
            />

            <div className={styles.brandChip}>
              <span className={styles.brandName}>Neo Studio</span>
              <span className={styles.brandTag}>Where Space Turn into Stories</span>
            </div>

            <div className={styles.mapOverlay}>
              <div className={styles.mapBox}>
                <img 
                  src="https://maps.googleapis.com/maps/api/staticmap?center=HSR%20Layout,Bangalore&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7CHSR%20Layout,Bangalore" 
                  alt="HSR Layout Map" 
                />
              </div>

              <div className={styles.contactRow}>
                <div className={styles.contactItem}>
                  <Mail size={18} color="#D4D433" />
                  <span>hello@theneostudio.com</span>
                </div>
                <ArrowRight className={styles.rightArrow} size={20} />
              </div>

              <div className={styles.contactRow}>
                <div className={styles.contactItem}>
                  <Phone size={18} color="#D4D433" />
                  <span>+91 99722 83300</span>
                </div>
                <ArrowRight className={styles.rightArrow} size={20} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
