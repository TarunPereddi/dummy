'use client'

import { useEffect, useState } from 'react'
import { Hourglass } from 'lucide-react'
import { getPricing } from '@/lib/pricing'
import { DEFAULT_COUNTRY_CODE } from '@/lib/countries'

export default function PricingSection() {
  const [pricing, setPricing] = useState({
    regularPrice: '',
    salePrice: '',
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function detectCountry() {
      try {
        // Use ipapi.co API directly to get country code
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        const countryCode = data.country_code || DEFAULT_COUNTRY_CODE
        
        // Get pricing based on country
        const pricingData = getPricing(countryCode)
        setPricing({
          regularPrice: pricingData.regularPrice,
          salePrice: pricingData.salePrice,
        })
      } catch (error) {
        console.error('Error detecting country:', error)
        // Fallback to default pricing
        const pricingData = getPricing(DEFAULT_COUNTRY_CODE)
        setPricing({
          regularPrice: pricingData.regularPrice,
          salePrice: pricingData.salePrice,
        })
      } finally {
        setIsLoading(false)
      }
    }

    detectCountry()
  }, [])

  return (
    <section className="py-16 px-4 bg-[#F8F6F2]">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-[#dc0365] text-5xl font-bold mb-12 font-serif">
          Pricing and Offers
        </h2>
        
        <div className="max-w-3xl mx-auto mb-6">
          <p className="text-[#1e1e1e] text-2xl font-sans mb-2">
            <span className="font-bold">Limited-Time Offer</span>: Get access for just{' '}
            {isLoading ? (
              <span className="animate-pulse">...</span>
            ) : (
              <span className="font-bold">{pricing.salePrice}</span>
            )}
          </p>
          
          <p className="text-[#1e1e1e] text-2xl font-sans mb-6">
            instead of{' '}
            {isLoading ? (
              <span className="animate-pulse">...</span>
            ) : (
              <span className="line-through">{pricing.regularPrice}</span>
            )}!
          </p>
          
          <p className="text-[#1e1e1e] text-xl font-sans flex items-center justify-center gap-2 mb-2">
            <Hourglass className="h-5 w-5" /> Hurry!
          </p>
          
          <p className="text-[#1e1e1e] text-xl font-sans mb-10">
            Offer valid for the first 100 registrations only.
          </p>
        </div>
        
        <a 
          href="#register" 
          className="inline-block bg-[#dc0365] text-white text-xl font-bold py-4 px-10 rounded-full hover:bg-[#c00358] transition-colors font-sans"
        >
          Grab Your Spot Now
        </a>
      </div>
    </section>
  )
}
