'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Phone, ArrowRight, Loader2, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import styles from './ContactSection.module.scss';
import Image from 'next/image';
import BGImage from '@/assets/images/Hero/BG-1.png';

const ContactSection = ({ handleClose }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertySize: '',
    propertyLocation: '',
    message: '',
    scopeOfWork: '',
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

    // Industrial standard validation
    if (!formData.propertySize || !formData.propertyLocation) {
      setStatus({ sending: false, ok: null, error: 'Please select both property size and location' });
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
        setFormData({
          name: '',
          phone: '',
          propertySize: '',
          propertyLocation: '',
          message: '',
          scopeOfWork: '',
          whatsapp: false
        });
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

  const propertySizes = [
    "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "Villa", "Plot", "Other"
  ];

  const propertyLocations = [
    "Bangalore North (KA04/KA50)", "Bangalore South (KA05/KA51)", "Bangalore East (KA03/KA53)", "Anekal/Chandapura (KA59)", "Other"
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

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>Property Size *</label>
                <select
                  name="propertySize"
                  value={formData.propertySize}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="" disabled>Select</option>
                  {propertySizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>Property Location *</label>
                <select
                  name="propertyLocation"
                  value={formData.propertyLocation}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="" disabled>Select</option>
                  {propertyLocations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Scope of work</label>
              <textarea
                name="scopeOfWork"
                placeholder="Message"
                value={formData.scopeOfWork}
                onChange={handleChange}
                className={styles.textarea}
              />
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
                  <div className={styles.mailIconBox}>
                    <Mail size={16} color="#fff" />
                  </div>
                  <span>hello@theneostudio.com</span>
                </div>
                <ArrowRight className={styles.rightArrow} size={20} />
              </div>

              <div className={styles.contactRow}>
                <div className={styles.contactItem}>
                  <div className={styles.phoneIconBox}>
                    <Phone size={16} color="#fff" />
                  </div>
                  <span>+91 99722 83300</span>
                </div>
                <ArrowRight className={styles.rightArrow} size={18} />
              </div>
            </div>
          </div>

          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Facebook size={20} fill="currentColor" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Linkedin size={20} fill="currentColor" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Youtube size={20} fill="currentColor" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
