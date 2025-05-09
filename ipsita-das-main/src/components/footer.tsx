"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubscribed(true)
      setName("")
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => setSubscribed(false), 3000)
    }, 1000)
  }

  return (
    <footer className="bg-gradient-to-r from-[#E5ABCE] to-[#6D87C4] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h3 className="text-[#1e1e1e] text-xl font-bold mb-6 font-sans">Socials</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-[#1e1e1e]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-[#1e1e1e]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-[#1e1e1e]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-[#1e1e1e]" />
              </a>
            </div>
          </div>

          <div className="mt-10 md:mt-0 w-full md:w-auto">
            <h3 className="text-[#1e1e1e] text-xl font-bold mb-6 font-sans">Get Ipsita's Weekly Letter</h3>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-3 rounded-full bg-white border-0 focus:ring-2 focus:ring-[#dc0365] font-sans"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-3 rounded-full bg-white border-0 focus:ring-2 focus:ring-[#dc0365] pr-12 font-sans"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 text-[#1e1e1e]" />
                </button>
              </div>
              {subscribed && <p className="text-green-700 font-sans">Thank you for subscribing!</p>}
            </form>
          </div>
        </div>

        <div className="border-t border-[#1e1e1e]/20 pt-6 text-center">
          <p className="text-[#1e1e1e] font-sans">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="hover:underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}


