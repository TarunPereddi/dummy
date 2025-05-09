"use client";

import React, { useState, useEffect } from "react";

export default function WhatYoullLearnSection() {
  const learningPoints = [
    "How to control yourself using Inward facing and Outward facing emotion regulation technique.",
    "How to diffuse the tension in the conflict using crucial mindset reframes.",
    "How to talk so that they want to listen, using the DISA model of human behavioral categorization."
  ];

  const bonusCards = [
    {
      title: "Exclusive Takeaway: Bonus",
      content: "Participants will receive a professionally crafted communication template—featuring precise, psychologically attuned language—to navigate and resolve relational misunderstandings with clarity and confidence."
    },
    {
      title: "Curated Live Q&A Experience",
      content: "Conclude the masterclass with an intimate, live Q&A, where I will address select real-life relational challenges submitted by participants—offering nuanced, strategic insights tailored to high-stakes dynamics."
    }
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add listener for screen resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToCard = (index: number) => {
    setCurrentCardIndex(index);
  };

  return (
    <>
      {/* Top section with light gray background */}
      <section className="py-16 px-6 relative" style={{ background: "#F7F7F7" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="bg-gradient-to-r from-[#E5ABCE] to-[#6D87C4] bg-clip-text text-transparent text-5xl md:text-6xl font-bold mb-12">
                What<br />You'll Learn
              </h2>

              <div className="space-y-8">
                {learningPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <img 
                      src="/images/tick.png" 
                      alt="Checkmark" 
                      className="w-6 h-6 mt-1 flex-shrink-0 "
                    />
                    <p className="text-gray-600 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coach card image with natural overflow */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src="/images/card.png"
                alt="Ipsita Das - Life Coach"
                className="max-w-full md:max-w-[110%] md:absolute top-[-25%] scale-85 "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom section with gradient background - carousel only on mobile */}
      <section 
        className="py-16 md:py-25 px-6"
        style={{ background: "linear-gradient(94.25deg, #E5ABCE 0%, #6D87C4 100%)" }}
      >
        <div className="container mx-auto max-w-6xl">
          {/* Mobile Carousel View */}
          {isMobile ? (
            <>
              <div className="relative">
                {bonusCards.map((card, index) => (
                  <div 
                    key={index}
                    className={`transition-opacity duration-300 ease-in-out ${
                      currentCardIndex === index ? 'opacity-100' : 'opacity-0 hidden'
                    }`}
                  >
                    <div className="bg-white/10 hover:bg-white text-white hover:text-gray-800 p-8 rounded-2xl backdrop-blur-sm" 
                        style={{ boxShadow: "0px 0px 100px -16px rgba(255, 255, 255, 0.8) inset" }}>
                      <h3 className="text-2xl font-bold mb-4">
                        {card.title}
                      </h3>
                      <p>
                        {card.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel dots navigation - only shown on mobile */}
              <div className="flex justify-center mt-6">
                {bonusCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToCard(index)}
                    className={`w-3 h-3 mx-1.5 rounded-full ${
                      index === currentCardIndex ? "bg-white" : "bg-white/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            /* Desktop Grid View */
            <div className="grid grid-cols-2 gap-8">
              {bonusCards.map((card, index) => (
                <div 
                  key={index}
                  className="bg-white/10 hover:bg-white text-white hover:text-gray-800 p-8 rounded-2xl backdrop-blur-sm"
                  style={{ boxShadow: "0px 0px 100px -16px rgba(255, 255, 255, 0.8) inset" }}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {card.title}
                  </h3>
                  <p>
                    {card.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}