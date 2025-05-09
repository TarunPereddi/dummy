// src/components/ReserveButton.tsx
"use client";

import { useEffect, useState } from "react";

// Payment links
const PAYMENT_LINKS = {
  IN: "https://rzp.io/rzp/Qjcj1mXd", // Indian payment link
  INTERNATIONAL: "https://rzp.io/rzp/ap1Oee8", // International payment link
};

// Create a module-level cache to avoid multiple API calls
let cachedPaymentLink: string | null = null;
let isDetecting = false;
const callbacks: Array<(link: string) => void> = [];

// Shared function to detect country and determine payment link
async function detectCountryAndGetLink(): Promise<string> {
  // If we already have a cached result, return it immediately
  if (cachedPaymentLink) return cachedPaymentLink;
  
  // If detection is in progress, return a promise that will resolve when detection is complete
  if (isDetecting) {
    return new Promise((resolve) => {
      callbacks.push(resolve);
    });
  }
  
  // Start detection process
  isDetecting = true;
  
  try {
    // Use ipapi.co API to detect country
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    
    // Set the appropriate payment link based on country
    const link = data.country_code === "IN" ? PAYMENT_LINKS.IN : PAYMENT_LINKS.INTERNATIONAL;
    
    // Cache the result
    cachedPaymentLink = link;
    
    // Notify all waiting callbacks
    callbacks.forEach(callback => callback(link));
    
    return link;
  } catch (error) {
    console.error("Error detecting location:", error);
    // Default to international link if detection fails
    const defaultLink = PAYMENT_LINKS.INTERNATIONAL;
    cachedPaymentLink = defaultLink;
    
    // Notify all waiting callbacks
    callbacks.forEach(callback => callback(defaultLink));
    
    return defaultLink;
  } finally {
    isDetecting = false;
  }
}

interface ReserveButtonProps {
  className?: string;
  text?: string;
}

export default function ReserveButton({ 
  className = "", 
  text = "Reserve Your Spot Now" 
}: ReserveButtonProps) {
  const [paymentLink, setPaymentLink] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use the shared detection function
    detectCountryAndGetLink().then(link => {
      setPaymentLink(link);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isLoading) {
      e.preventDefault();
      return;
    }
    
    // If using analytics, you could track this click event here
    // analytics.track('reserve_button_clicked', { paymentLink });
  };

  return (
    <a
      href={isLoading ? "#" : paymentLink}
      onClick={handleClick}
      className={`inline-block bg-[#6EC473] hover:bg-[#5db362] text-white font-bold py-4 px-8 rounded-full text-xl transition-colors duration-300 ${isLoading ? 'opacity-90 cursor-wait' : ''} ${className}`}
      rel="noopener noreferrer"
    >
      {isLoading ? "Loading..." : text}
    </a>
  );
}