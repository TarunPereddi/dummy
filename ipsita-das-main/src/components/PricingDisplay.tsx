// src/components/PricingDisplay.tsx
"use client";

import { useEffect, useState } from "react";

// Currency conversion rates and symbols
const CURRENCY_DATA = {
  INR: { symbol: "₹", rate: 1 },
  USD: { symbol: "$", rate: 0.012 },
  EUR: { symbol: "€", rate: 0.011 },
  GBP: { symbol: "£", rate: 0.0095 },
  AUD: { symbol: "A$", rate: 0.018 },
  CAD: { symbol: "C$", rate: 0.016 },
  JPY: { symbol: "¥", rate: 1.85 },
  SGD: { symbol: "S$", rate: 0.016 },
  NZD: { symbol: "NZ$", rate: 0.019 },
  CHF: { symbol: "CHF", rate: 0.011 },
  // Add more currencies as needed
};

interface PricingDisplayProps {
  className?: string;
}

export default function PricingDisplay({ className = "" }: PricingDisplayProps) {
  const [price, setPrice] = useState<string>("Loading...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function detectLocationAndSetPrice() {
      try {
        // Use ipapi.co API to get location information
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        
        if (data.country_code === "IN") {
          // Fixed price for India
          setPrice("₹499");
        } else {
          // For other countries: convert ₹1499 to local currency
          const currencyCode = data.currency as keyof typeof CURRENCY_DATA;
          
          if (currencyCode && CURRENCY_DATA[currencyCode]) {
            const { symbol, rate } = CURRENCY_DATA[currencyCode];
            const convertedAmount = Math.round(1499 * rate);
            
            // Format number with commas for thousands
            const formattedPrice = new Intl.NumberFormat('en-US').format(convertedAmount);
            setPrice(`${symbol}${formattedPrice}`);
          } else {
            // Fallback to USD if currency not in our list
            const convertedAmount = Math.round(1499 * CURRENCY_DATA.USD.rate);
            setPrice(`$${convertedAmount}`);
          }
        }
      } catch (error) {
        console.error("Error detecting location:", error);
        // Default fallback price
        setPrice("₹1,499");
      } finally {
        setIsLoading(false);
      }
    }

    detectLocationAndSetPrice();
  }, []);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <p className="text-white text-2xl mb-2">Price</p>
      
      {isLoading ? (
        <div className="animate-pulse bg-white/20 h-12 w-24 rounded"></div>
      ) : (
        <h1 className="text-white text-4xl font-bold">{price}</h1>
      )}
    </div>
  );
}