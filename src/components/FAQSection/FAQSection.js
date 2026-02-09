'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQSection.module.scss';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer end-to-end interior design services including consultation, space planning, delivery, execution, and handover for both residential and commercial properties."
    },
    {
      question: "Do you handle both residential and commercial projects?",
      answer: "Yes, we specialize in both. Our portfolio includes diverse projects ranging from luxury homes to modern office spaces."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope, but a typical residential interior project takes between 45 to 90 days from design approval to handover."
    },
    {
      question: "Can you work with my existing furniture?",
      answer: "Absolutely. We can incorporate your cherished pieces into the new design plan to ensure a cohesive look."
    },
    {
      question: "How can I start a project with you?",
      answer: "You can start by filling out the 'Talk to Designer' form above or contacting us directly for a free consultation."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently asked questions</h2>
          <a href="mailto:hello@theneostudio.com" className={styles.subtitle}>
            Need More help? <span className={styles.link}>hello@theneostudio.com</span>
          </a>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.questionRow}>
                <span className={styles.question}>{faq.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </div>
              <div className={styles.answerWrapper}>
                <div className={styles.answer}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
