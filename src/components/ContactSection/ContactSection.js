'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Phone, ArrowRight, Loader2 } from 'lucide-react';
import styles from './ContactSection.module.scss';
import Image from 'next/image';
import BGImage from '@/assets/images/Hero/BG-1.png';

const ContactSection = ({ handleClose }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    whatsapp: false
  });
  const [status, setStatus] = useState({ sending: false, ok: null, error: null });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Industrial standard validation: check if city is selected
    if (!formData.city) {
      setStatus({ sending: false, ok: null, error: 'Please select a property city' });
      return;
    }

    setStatus({ sending: true, ok: null, error: null });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, pageUrl: window?.location?.href || 'Website' }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({ sending: false, ok: true, error: null });
        setFormData({ name: '', city: '', phone: '', whatsapp: false });
        if (typeof handleClose === 'function') {
          handleClose(); // Close the popup
        }
        router.push('/thank-you');
      } else {
        throw new Error(data.error || 'Request failed');
      }
    } catch (err) {
      setStatus({ sending: false, ok: false, error: err.message || 'Failed to send' });
    }
  };

  const indianCities = [
    "Bangalore North (KA04/KA50)", "Bangalore South (KA05/KA51)", "Bangalore East (KA03/KA53)", "Anekal/Chandapura (KA59)"
  ];

  return (
    <section className={styles.contactSection} id="contact">
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
              <label>Property City *</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="" disabled>
                  Select Property City
                </option>

                {indianCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
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

            <button type="submit" className={styles.submitButton} disabled={status.sending}>
              {status.sending ? (
                <>
                  <Loader2 className={styles.spinner} size={20} />
                  Sending...
                </>
              ) : (
                "Let's Talk"
              )}
            </button>

            <p className={styles.disclaimer}>
              By submitting, you agree to our privacy policy and terms of use, allowing us to use your information as outlined.
            </p>
          </form>
          {status.error && <p className={styles.errorMsg}>Error: {status.error}</p>}
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
