'use client';

import React, { useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import styles from './ContactSection.module.scss';
import Image from 'next/image';
import BGImage from '@/assets/images/Hero/BG-1.png';

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
            We take total ownership of your project, so you can take pride in your home.
          </h2>

          <div className={styles.roomCard}>
            <Image
              alt="Neo studio"
              src={require('@/assets/images/Hero/BG-1.png')}
              className={styles.roomImage}
              width={1000}
              height={1000}
            />

            <div className={styles.brandChip}>
              <Image
                alt="Neo studio"
                src={require('@/assets/images/legacy/neo_studio_logo.png')}
                className={styles.brandChipImage}
                width={1000}
                height={1000}
              />
            </div>

            <div className={styles.mapOverlay}>
              <div className={styles.mapBox}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7964410.518251855!2d67.89334352499998!3d12.915926599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1575543f8845%3A0x8a842fc904ab53cc!2sThe%20Neo%20Studio!5e0!3m2!1sen!2sin!4v1770741569344!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
