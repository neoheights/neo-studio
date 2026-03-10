'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './ContactPopup.module.scss';
import ContactSection from '../ContactSection/ContactSection';
import { usePopup } from '../PopupProvider';

export default function ContactPopup() {
    const { isPopupOpen, closePopup, openPopup } = usePopup();

    const handleClose = () => {
        localStorage.setItem('contact_popup_shown', 'true');
        closePopup();
    }

    useEffect(() => {
        // show only first time
        const alreadyShown = localStorage.getItem('contact_popup_shown');

        if (alreadyShown) return;

        const timer = setTimeout(() => {
            openPopup();
            localStorage.setItem('contact_popup_shown', 'true');
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
    }, [openPopup]);

    if (!isPopupOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <div
                    className={styles.closeBtn}
                    onClick={closePopup}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1H27C29.2091 1 31 2.79086 31 5V27C31 29.2091 29.2091 31 27 31H5C2.79086 31 1 29.2091 1 27V5C1 2.79086 2.79086 1 5 1Z" fill="#D6DE29" />
                        <path d="M5 1H27C29.2091 1 31 2.79086 31 5V27C31 29.2091 29.2091 31 27 31H5C2.79086 31 1 29.2091 1 27V5C1 2.79086 2.79086 1 5 1Z" stroke="black" stroke-width="2" />
                        <path d="M15.9987 14.5865L20.9485 9.63672L22.3627 11.0509L17.4129 16.0007L22.3627 20.9504L20.9485 22.3646L15.9987 17.4149L11.049 22.3646L9.63477 20.9504L14.5845 16.0007L9.63477 11.0509L11.049 9.63672L15.9987 14.5865Z" fill="black" />
                    </svg>

                </div>

                {/* Contact component goes here */}
                <ContactSection handleClose={handleClose} />
            </div>
        </div>
    );
}
