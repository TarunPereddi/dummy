// src/components/sections/cta-section.tsx
"use client";

import ReserveButton from "../ReserveButton";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#F7F7F7] px-4 text-center">
      <div className="container mx-auto max-w-3xl">
        <h1 className="bg-gradient-to-r from-[#E5ABCE] to-[#6D87C4] inline-block text-transparent bg-clip-text text-5xl mb-6">
          Ready to Transform<br /> Your Life?
        </h1>
  
        <p className="text-[#1e1e1e] text-xl mb-10">
          Click below and take the first step towards a better YOU!
        </p>
  
        {/* Replaced link with ReserveButton component */}
        <ReserveButton />
      </div>
    </section>
  );
}