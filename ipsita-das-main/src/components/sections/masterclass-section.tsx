"use client";
import { User } from "lucide-react"

export default function MasterclassSection() {
  return (
    <section className="bg-[#fcd36b] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-[#1e1e1e] text-5xl font-bold text-center mb-20">Who Is This Masterclass For?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <User className="w-24 h-24 text-[#1e1e1e] mb-6" strokeWidth={1.5} />
            <p className="text-[#1e1e1e] text-xl font-medium max-w-[250px]">
              Professionals seeking confidence & productivity
            </p>
          </div>

          <div className="flex flex-col items-center">
            <User className="w-24 h-24 text-[#1e1e1e] mb-6" strokeWidth={1.5} />
            <p className="text-[#1e1e1e] text-xl font-medium max-w-[250px]">Entrepreneurs looking for motivation</p>
          </div>

          <div className="flex flex-col items-center">
            <User className="w-24 h-24 text-[#1e1e1e] mb-6" strokeWidth={1.5} />
            <p className="text-[#1e1e1e] text-xl font-medium max-w-[250px]">Students needing clarity in life</p>
          </div>

          <div className="flex flex-col items-center">
            <User className="w-24 h-24 text-[#1e1e1e] mb-6" strokeWidth={1.5} />
            <p className="text-[#1e1e1e] text-xl font-medium max-w-[250px]">Anyone ready for a mindset shift</p>
          </div>
        </div>
      </div>
    </section>
  )
}

