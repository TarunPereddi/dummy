"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The past 7 months have been monumental in improving myself as a human being. Credit to Ipsita for being the best coach I've ever worked with!",
      name: "Rajesh Kumar",
      date: "15th Mar, 2025",
      rating: 5
    },
    {
      quote: "I appreciate how Ipsita simplifies complex concepts. She helped me overcome my limiting beliefs and develop a growth mindset that transformed my business.",
      name: "Priya Singh",
      date: "28th Jan, 2025",
      rating: 5
    },
    {
      quote: "Working with Ipsita was the best investment in myself I've ever made. Her methods are practical, actionable, and get real results.",
      name: "Michael Chen",
      date: "12th Feb, 2025",
      rating: 5
    },
    {
      quote: "The mindset shifts I experienced during Ipsita's program were truly life-changing. I'm now more confident and clear about my goals than ever before.",
      name: "Sarah Johnson",
      date: "3rd Apr, 2025",
      rating: 5
    },
    {
      quote: "After just three months of coaching with Ipsita, I received a promotion I'd been working toward for years. Her guidance was instrumental in my success.",
      name: "Vikram Malhotra",
      date: "19th Feb, 2025",
      rating: 4
    },
    {
      quote: "Ipsita helped me break through patterns that had been holding me back for decades. I'm forever grateful for her insights and compassionate approach.",
      name: "Anita Desai",
      date: "7th Mar, 2025",
      rating: 5
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(2)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isContentLoaded, setIsContentLoaded] = useState(true)
  
  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerPage(window.innerWidth < 768 ? 1 : 2)
    }
    
    // Set initial value
    handleResize()
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // This will run when the currentIndex changes
  useEffect(() => {
    if (currentIndex !== undefined) {
      // First set content as not loaded
      setIsContentLoaded(false)
      
      // Set animation state to create the fade out effect
      setIsAnimating(true)
      
      // Much shorter timeout for fade out
      setTimeout(() => {
        // Load new content immediately
        setIsContentLoaded(true)
        
        // Very short delay before fade in
        setTimeout(() => {
          // Quickly fade in
          setIsAnimating(false)
        }, 50)
      }, 100)
    }
  }, [currentIndex])
  
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  const goToPrevious = () => {
    if (isAnimating) return;
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - testimonialsPerPage : prev - testimonialsPerPage));
  }

  const goToNext = () => {
    if (isAnimating) return;
    setCurrentIndex((prev) => (prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage));
  }

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    Math.min(currentIndex + testimonialsPerPage, testimonials.length),
  )

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="bg-gradient-to-r from-[#E5ABCE] to-[#6D87C4] bg-clip-text text-transparent text-5xl md:text-6xl font-bold leading-tight mb-4 md:mb-0">
            Success Stories<br />
            & Testimonials
          </h2>
          <div className="flex gap-4">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center transition-colors hover:bg-gray-100"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-13 h-13 text-black" />
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center transition-colors hover:bg-gray-100"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-13 h-13 text-black" />
            </button>
          </div>
        </div>

        <p className="text-gray-600 text-lg md:text-xl font-normal mb-12 max-w-2xl">
          Hear from real people whose lives have changed after working with Ipsita!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[350px]">
          {isContentLoaded && visibleTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`relative transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <div
                className="bg-white p-6 md:p-8 rounded-xl shadow border border-gray-100 flex flex-col justify-between h-[300px]"
              >
                <div>
                  <div className="flex items-center mb-4">
                    <svg 
                      className="w-5 h-5 text-black"
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-black font-medium">{testimonial.rating}/5</span>
                  </div>
                  <p className="text-gray-800 text-lg md:text-xl font-normal">{testimonial.quote}</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#E5ABCE] to-[#6D87C4] absolute bottom-0 w-full text-white px-4 py-3 rounded-lg rounded-t-[0] mt-auto">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm opacity-90">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating) return;
                setCurrentIndex(index * testimonialsPerPage);
              }}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === Math.floor(currentIndex / testimonialsPerPage) 
                  ? "bg-[#E5ABCE]" 
                  : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}