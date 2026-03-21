import { Metadata } from "next";

export const metadata = {
  title: "Neo Studio",
  description:
    "Neo Studio offers end-to-end interior design solutions, transforming spaces with creativity, precision, and excellence.",
};

import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import Services from "../components/Services/Services";
import Crafted from "../components/Crafted/Crafted";
import Partners from "../components/Partners/Partners";
import Milestones from "../components/Milestones/Milestones";
import TransformingSpaces from "../components/TransformingSpaces/TransformingSpaces";
import StatsSection from "../components/StatsSection/StatsSection";
import EndToEnd from "../components/EndToEnd/EndToEnd";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import GradientCTA from "../components/GradientCTA/GradientCTA";
import ContactSection from "../components/ContactSection/ContactSection";
import FAQSection from "../components/FAQSection/FAQSection";
import Footer from "../components/Footer/Footer";
import StickyQuoteButton from "../components/StickyQuoteButton/StickyQuoteButton";
import CTASection from "@/components/CTASection/CTASection";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import Legacy from "@/components/Legacy/Legacy";
import LegacyOfDesign from "@/components/LegacyOfDesign/LegacyOfDefsign";
import { MessageCircle } from "lucide-react";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-17EXSCS0R9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-17EXSCS0R9');
          `}
        </Script>
      </head>
      <Header />
      <StickyQuoteButton targetId="crafted-section" />
      <Hero />
      <TrustedBy />
      <Services />
      <Crafted />
      <Partners />
      <CTASection />
      <Milestones />
      <TransformingSpaces />
      <StatsSection />
      <EndToEnd />
      <WhyChooseUs />
      <Testimonials />
      <Legacy />
      {/* <GradientCTA /> */}
      <LegacyOfDesign />
      <ContactSection />
      <FAQSection />
      <Footer />
      <a
        href="https://wa.me/919972283300?text=Hello%20I%20am%20interested%20in%20your%20services"
        className="whatsappFloat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={30} fill="currentColor" />
      </a>
    </main>
  );
}
