import React from 'react';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/Footer';
import WhatWeDoHero from '@/components/WhatWeDo/WhatWeDoHero';
import ResidentialInterior from '@/components/WhatWeDo/ResidentialInterior';
import CommercialInterior from '@/components/WhatWeDo/CommercialInterior';
import WhyChoose from '@/components/WhatWeDo/WhyChoose';
import OurProcess from '@/components/WhatWeDo/OurProcess';
import TransformYourSpaceCTA from '@/components/WhatWeDo/TransformYourSpaceCTA';

export const metadata = {
  title: 'What We Do | Neo Studio',
  description: 'Complete Interior Solutions for Every Space from cozy 2 BHK apartments to sprawling commercial complexes.',
};

export default function WhatWeDoPage() {
  return (
    <main>
      <Header />
      <WhatWeDoHero />
      <ResidentialInterior />
      <CommercialInterior />
      <WhyChoose />
      <OurProcess />
      <TransformYourSpaceCTA />
      <Footer />
    </main>
  );
}
