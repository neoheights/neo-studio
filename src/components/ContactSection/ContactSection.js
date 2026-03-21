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
              <label>Name <span>*</span></label>
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
              <label>Phone Number <span>*</span></label>
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
                <label>Property Size <span>*</span></label>
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
                <label>Property Location <span>*</span></label>
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
              <label>Scope of work</label>
              <textarea
                name="scopeOfWork"
                placeholder="Message"
                value={formData.scopeOfWork}
                onChange={handleChange}
                className={styles.textarea}
              />
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12.75 20.2153V14.25H15C15.1989 14.25 15.3897 14.171 15.5303 14.0303C15.671 13.8897 15.75 13.6989 15.75 13.5C15.75 13.3011 15.671 13.1103 15.5303 12.9697C15.3897 12.829 15.1989 12.75 15 12.75H12.75V10.5C12.75 10.1022 12.908 9.72064 13.1893 9.43934C13.4706 9.15804 13.8522 9 14.25 9H15.75C15.9489 9 16.1397 8.92098 16.2803 8.78033C16.421 8.63968 16.5 8.44891 16.5 8.25C16.5 8.05109 16.421 7.86032 16.2803 7.71967C16.1397 7.57902 15.9489 7.5 15.75 7.5H14.25C13.4544 7.5 12.6913 7.81607 12.1287 8.37868C11.5661 8.94129 11.25 9.70435 11.25 10.5V12.75H9C8.80109 12.75 8.61033 12.829 8.46967 12.9697C8.32902 13.1103 8.25 13.3011 8.25 13.5C8.25 13.6989 8.32902 13.8897 8.46967 14.0303C8.61033 14.171 8.80109 14.25 9 14.25H11.25V20.2153C9.13575 20.0223 7.17728 19.0217 5.78198 17.4215C4.38667 15.8214 3.66195 13.7449 3.75855 11.6241C3.85515 9.50324 4.76564 7.50127 6.30064 6.0346C7.83563 4.56793 9.87696 3.74947 12 3.74947C14.1231 3.74947 16.1644 4.56793 17.6994 6.0346C19.2344 7.50127 20.1449 9.50324 20.2415 11.6241C20.3381 13.7449 19.6133 15.8214 18.218 17.4215C16.8227 19.0217 14.8643 20.0223 12.75 20.2153Z" fill="white" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7.5C11.11 7.5 10.24 7.76392 9.49993 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18868 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0243 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM20.25 16.5C20.25 17.4946 19.8549 18.4484 19.1516 19.1516C18.4484 19.8549 17.4946 20.25 16.5 20.25H7.5C6.50544 20.25 5.55161 19.8549 4.84835 19.1516C4.14509 18.4484 3.75 17.4946 3.75 16.5V7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75H16.5C17.4946 3.75 18.4484 4.14509 19.1516 4.84835C19.8549 5.55161 20.25 6.50544 20.25 7.5V16.5ZM18 7.125C18 7.3475 17.934 7.56501 17.8104 7.75002C17.6868 7.93502 17.5111 8.07922 17.3055 8.16436C17.1 8.24951 16.8738 8.27179 16.6555 8.22838C16.4373 8.18498 16.2368 8.07783 16.0795 7.9205C15.9222 7.76316 15.815 7.56271 15.7716 7.34448C15.7282 7.12625 15.7505 6.90005 15.8356 6.69448C15.9208 6.48891 16.065 6.31321 16.25 6.1896C16.435 6.06598 16.6525 6 16.875 6C17.1734 6 17.4595 6.11853 17.6705 6.3295C17.8815 6.54048 18 6.82663 18 7.125Z" fill="white" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM20.25 20.25H3.75V3.75H20.25V20.25ZM9 10.5V16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5ZM17.25 13.125V16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.891C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125ZM9.375 7.875C9.375 8.0975 9.30902 8.31501 9.1854 8.50002C9.06179 8.68502 8.88609 8.82922 8.68052 8.91436C8.47495 8.99951 8.24875 9.02179 8.03052 8.97838C7.81229 8.93498 7.61184 8.82783 7.4545 8.6705C7.29717 8.51316 7.19002 8.31271 7.14662 8.09448C7.10321 7.87625 7.12549 7.65005 7.21064 7.44448C7.29578 7.23891 7.43998 7.06321 7.62498 6.9396C7.80999 6.81598 8.0275 6.75 8.25 6.75C8.54837 6.75 8.83452 6.86853 9.0455 7.0795C9.25647 7.29048 9.375 7.57663 9.375 7.875Z" fill="white" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4163 11.3756L10.9163 8.37563C10.8033 8.30025 10.6719 8.25697 10.5363 8.2504C10.4006 8.24382 10.2657 8.27421 10.146 8.33831C10.0263 8.40241 9.9262 8.49783 9.85645 8.61436C9.7867 8.7309 9.74991 8.86419 9.75 9V15C9.74991 15.1358 9.7867 15.2691 9.85645 15.3856C9.9262 15.5022 10.0263 15.5976 10.146 15.6617C10.2657 15.7258 10.4006 15.7562 10.5363 15.7496C10.6719 15.743 10.8033 15.6998 10.9163 15.6244L15.4163 12.6244C15.5191 12.5559 15.6035 12.4631 15.6618 12.3542C15.7202 12.2452 15.7507 12.1236 15.7507 12C15.7507 11.8764 15.7202 11.7548 15.6618 11.6458C15.6035 11.5369 15.5191 11.4441 15.4163 11.3756ZM11.25 13.5984V10.4063L13.6481 12L11.25 13.5984ZM21.9684 6.5175C21.8801 6.17189 21.7109 5.85224 21.4747 5.58491C21.2385 5.31758 20.9421 5.11024 20.61 4.98C17.3962 3.73875 12.2812 3.75 12 3.75C11.7188 3.75 6.60375 3.73875 3.39 4.98C3.0579 5.11024 2.76153 5.31758 2.52534 5.58491C2.28915 5.85224 2.1199 6.17189 2.03156 6.5175C1.78875 7.45313 1.5 9.16313 1.5 12C1.5 14.8369 1.78875 16.5469 2.03156 17.4825C2.11977 17.8283 2.28895 18.1481 2.52515 18.4156C2.76136 18.6831 3.0578 18.8906 3.39 19.0209C6.46875 20.2088 11.2875 20.25 11.9381 20.25H12.0619C12.7125 20.25 17.5341 20.2088 20.61 19.0209C20.9422 18.8906 21.2386 18.6831 21.4748 18.4156C21.711 18.1481 21.8802 17.8283 21.9684 17.4825C22.2113 16.545 22.5 14.8369 22.5 12C22.5 9.16313 22.2113 7.45313 21.9684 6.5175ZM20.5163 17.1113C20.4877 17.2263 20.4323 17.3329 20.3545 17.4224C20.2768 17.5118 20.179 17.5816 20.0691 17.6259C17.1019 18.7716 12.0553 18.7509 12.0066 18.7509H12C11.9494 18.7509 6.90656 18.7697 3.9375 17.6259C3.8276 17.5816 3.72977 17.5118 3.65204 17.4224C3.57431 17.3329 3.51888 17.2263 3.49031 17.1113C3.2625 16.2553 3 14.6784 3 12C3 9.32157 3.2625 7.74469 3.48375 6.89344C3.51179 6.77774 3.56697 6.67037 3.64473 6.58022C3.7225 6.49007 3.8206 6.41972 3.93094 6.375C6.79219 5.26969 11.5866 5.25 11.9794 5.25H12.0047C12.0553 5.25 17.1028 5.23313 20.0672 6.375C20.1771 6.41936 20.2749 6.48913 20.3526 6.57859C20.4304 6.66806 20.4858 6.77467 20.5144 6.88969C20.7375 7.74469 21 9.32157 21 12C21 14.6784 20.7375 16.2553 20.5163 17.1066V17.1113Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
