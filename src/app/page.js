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
import GradientCTA from "../components/GradientCTA/GradientCTA";
import ContactSection from "../components/ContactSection/ContactSection";
import FAQSection from "../components/FAQSection/FAQSection";
import Footer from "../components/Footer/Footer";
import StickyQuoteButton from "../components/StickyQuoteButton/StickyQuoteButton";
import CTASection from "@/components/CTASection/CTASection";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import Legacy from "@/components/Legacy/Legacy";

export default function Home() {
  return (
    <main>
      <Header />
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
      <Legacy />
      {/* <GradientCTA /> */}
      <ContactSection />
      <FAQSection />
      <Footer />
      <StickyQuoteButton targetId="crafted-section" />
    </main>
  );
}
