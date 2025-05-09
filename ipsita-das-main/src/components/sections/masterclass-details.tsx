// src/components/sections/masterclass-details.tsx
"use client";

import PricingDisplay from "../PricingDisplay";
import ReserveButton from "../ReserveButton";

export default function MasterclassDetails() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-r from-[#E5ABCE] to-[#6D87C4] rounded-3xl p-8 text-center">
          <h1 className="text-white text-5xl font-bold mb-8">Masterclass Details</h1>
          
          <div className="bg-white/10 max-w-4xl p-8 backdrop-blur-sm rounded-3xl mb-8 mx-auto" style={{ boxShadow: "0px 0px 100px -16px rgba(255, 255, 255, 0.8) inset" }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center md:border-r md:border-white/20">
                <p className="text-white text-2xl mb-2">Date</p>
                <h1 className="text-white text-4xl font-bold">18<sup>th</sup> May</h1>
              </div>
              
              <div className="flex flex-col items-center md:border-r md:border-white/20">
                <p className="text-white text-2xl mb-2">Time</p>
                <h1 className="text-white text-4xl font-bold">12:00 PM</h1>
              </div>
              
              <div className="flex flex-col items-center md:border-r md:border-white/20">
                <p className="text-white text-2xl mb-2">Format</p>
                <h1 className="text-white text-4xl font-bold">Online Session</h1>
              </div>
              
              <PricingDisplay />
            </div>
          </div>
          
          <p className="text-white text-xl font-medium mb-8">Bonus: Free Workbook & Exclusive Resources</p>
          
          {/* Replaced button with ReserveButton component */}
          <ReserveButton />
        </div>
      </div>
    </section>
  );
}