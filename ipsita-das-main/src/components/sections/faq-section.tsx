"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// FAQ data
const faqs = [
  {
    question: "Will there be a recording?",
    answer:
      "Yes, all participants will receive a recording of the masterclass that will be available for 30 days after the live session.",
  },
  {
    question: "Do I need prior knowledge?",
    answer: "No prior experience is needed. Just bring an open mind!",
  },
  {
    question: "Will there be a recording?",
    answer:
      "Yes, all participants will receive a recording of the masterclass that will be available for 30 days after the live session.",
  },
  
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0) // Second item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-16 bg-[#F7F7F7] px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className=" text-5xl font-bold text-center mb-12 font-serif"><span className="bg-gradient-to-r from-[#E5ABCE] to-[#6D87C4] inline-block text-transparent bg-clip-text ">FAQ's</span></h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#EFEFEF] rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-[#1e1e1e] text-xl font-bold font-sans">{faq.question}</h3>
                <div className="w-8 h-8 rounded-full border-2 border-[#000] flex items-center justify-center flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#000]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#000]" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#1e1e1e] text-lg font-sans">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

