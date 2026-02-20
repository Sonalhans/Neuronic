import React, { Suspense, lazy } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

// Lazy-load below-fold sections so they don't block the initial paint
const Services = lazy(() => import('./Services'));
const Process = lazy(() => import('./Process'));
const AICapabilities = lazy(() => import('./AICapabilities'));
const TechStack = lazy(() => import('./TechStack'));

const SectionFallback = () => (
  <div className="w-full py-32 bg-slate-950" aria-hidden="true" />
);

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AICapabilities />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TechStack />
      </Suspense>
    </>
  );
}
