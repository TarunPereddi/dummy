"use client";
import HeroSection from "../components/sections/hero-section";
import AboutSection from "../components/sections/about-section";
// import MasterclassSection from "@/components/sections/masterclass-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import MasterclassDetails from "@/components/sections/masterclass-details";
// import PricingSection from "@/components/sections/pricing-section";
import FAQSection from "@/components/sections/faq-section";
import YouTubeSection from "@/components/sections/youtube-section";
import CTASection from "@/components/sections/cta-section";
import Footer from "@/components/footer";
import ClientProfilesSection from "@/components/sections/client-profiles-section";
import WhatYoullLearnSection from "@/components/sections/what-you-ll-learn-section";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatYoullLearnSection />
      {/* <MasterclassSection /> */}
      <ClientProfilesSection />
      <TestimonialsSection />
      {/* <PricingSection /> */}
      <MasterclassDetails />
      <FAQSection />
      <YouTubeSection />
      <CTASection />
      <Footer />
    </>
  );
}
