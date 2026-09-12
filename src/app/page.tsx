import React from 'react';
import Header from '@/components/Header';
import DemoHero from '@/components/demo/DemoHero';
import InteractiveAppSimulator from '@/components/demo/InteractiveAppSimulator';
import FeatureSpotlights from '@/components/demo/FeatureSpotlights';
import PricingCalculator from '@/components/demo/PricingCalculator';
import TestimonialsSection from '@/components/demo/TestimonialsSection';
import DemoFooter from '@/components/demo/DemoFooter';

export const metadata = {
  title: 'فرسان | FursanHub - المنظومة السحابية المعتمدة لإدارة المرابط والاسطبلات',
  description: 'المنظومة القيادية المتكاملة لإدارة الخيول العربية الأصيلة، أتمتة البوكسات الفندقية، الرعاية البيطرية الاستباقية، والامتثال المالي لهيئة الزكاة والضريبة.',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased relative selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Interactive Demo Hero Section */}
        <DemoHero />

        {/* Live Interactive Simulator (Boxes, Pedigree, Arena Booking, Finance) */}
        <InteractiveAppSimulator />

        {/* Core Capabilities Spotlight */}
        <FeatureSpotlights />

        {/* Interactive ROI & Pricing Calculator */}
        <PricingCalculator />

        {/* Prestigious Client Testimonials */}
        <TestimonialsSection />
      </main>
      <DemoFooter />
    </div>
  );
}
