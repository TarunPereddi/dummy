"use client";
import Image from "next/image"

const AboutSection = ({ className = "" }) => {
  return (
    <section className={`py-16 px-4 min-h-screen bg-white ${className}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Speaker showcase - now properly responsive */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative w-full mx-auto aspect-[613/585] max-w-[550px]">
              {/* Top left image - TEDx stage (largest) */}
              <div className="absolute top-[-8%] left-[8%] w-[58%] h-auto aspect-square z-10">
                <div className="overflow-hidden w-full h-full shadow-md" style={{ borderRadius: '80px 20px 20px 20px' }}>
                  <Image
                    src="/images/tedTalk.png"
                    alt="TEDx speaker on stage"
                    width={800}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Top right image - Portrait (smallest) */}
              <div className="absolute top-[35%] right-[-2%] w-[32%] h-auto aspect-square z-10">
                <div className="overflow-hidden w-full h-full shadow-md" style={{ borderRadius: '20px 80px 20px 20px' }}>
                  <Image
                    src="/images/Ipsita2.png"
                    alt="Speaker portrait"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full object-top"
                  />
                </div>
              </div>

              {/* Bottom image - Speaker with microphone (medium) */}
              <div className="absolute bottom-[-10%] left-[30%] w-[38%] h-auto aspect-square z-10">
                <div className="overflow-hidden w-full h-full shadow-md" style={{ borderRadius: '20px 20px 20px 80px' }}>
                  <Image
                    src="/images/Ipsita3.png"
                    alt="Speaker with microphone"
                    width={550}
                    height={550}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Arrows background */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <Image
                  src="/images/Arrows.png"
                  alt="Decorative arrows"
                  width={500}
                  height={500}
                  className="object-contain w-4/5 h-4/5"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2">
            <h1 style={{
              backgroundImage: "linear-gradient(103.28deg, #E5ABCE 2%, #6D87C4 50%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
              }} className="text-4xl font-extrabold md:text-5xl lg:text-[64px] mb-2">About</h1>
            <h1 style={{
              backgroundImage: "linear-gradient(103.28deg, #E5ABCE 2%, #6D87C4 50%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
              }} className="text-4xl mb-8 font-extrabold md:text-5xl lg:text-[64px]">Ipsita Das</h1>

            <p className="text-lg text-pretty text-gray-800 mb-8">
              Ipsita, the Founder of BeingBeyond, helps self-aware individuals create deep, sustainable change—not through hype or therapy, but through actionable frameworks of emotional mastery, inner clarity, and strategic alignment. Her background spans communication, psychology, and study of the human behavior across cultures—blending academic depth with lived experience. Her work is structured, nuanced, and deeply personal/tailored. Her approach goes beyond conventional coaching to offer real tools for breakthrough transformations.
            </p>

            <div className="bg-[#D9D9D933] flex justify-center items-center rounded-[18px] py-8">
              <p className="font-bold text-center">
                "It's not life coaching as most people know it<br/>—it's transformation that sticks."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection