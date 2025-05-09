// src/components/sections/hero-section.tsx
import Image from "next/image";
import ReserveButton from "../ReserveButton";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#ffffff] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 relative">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="object-contain"
            priority
          />
        </div>

        {/* Main content - Desktop layout */}
        <div className="hidden md:flex md:flex-row items-start md:items-center">
          {/* Left column - Text content */}
          <div className="md:w-1/2 z-10 pr-0 lg:pr-8">
            <h1
              style={{
              backgroundImage: "linear-gradient(103.28deg, #E5ABCE 2%, #6D87C4 50%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
              }}
              className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6"
            >
              Emotional <br />
              Mastery
            </h1>

            <p className="text-[#1e1e1e] text-lg md:text-xl mb-10 max-w-xl font-sans">
              The Art of Fight: Turn Clash into Connection. Learn step by step emotional regulation techniques, mindset reframes and strategic communication templates to use disagreements and make your relationships stronger than ever before.
            </p>

            {/* Replaced Link with ReserveButton component */}
            <ReserveButton />
          </div>

          {/* Right column - Image (desktop version) */}
          <div className="md:w-1/2 mt-12 lg:mt-0 relative h-[400px] md:h-[500px] lg:h-[600px] w-full transform -translate-y-[4rem] -translate-x-[2rem]">
            <div className="absolute right-0 top-0 w-full h-full">
              <Image
                src="/images/Ipsita.png"
                alt="Ipsita Das, Life Coach"
                width={900}
                height={800}
                className="object-cover scale-130"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile layout - using same desktop image */}
        <div className="md:hidden">
          {/* Heading at top */}
          <h1
            style={{
              backgroundImage: "linear-gradient(103.28deg, #E5ABCE 2%, #6D87C4 50%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            className="text-5xl font-bold mb-6"
          >
            Emotional <br />
            Mastery
          </h1>

          {/* Mobile image container */}
          <div className="relative w-full mb-8" style={{ height: "450px", overflow: "hidden" }}>
            <Image
              src="/images/Ipsita.png"
              alt="Ipsita Das, Life Coach"
              fill
              style={{ 
                objectFit: "cover",
                objectPosition: "center right"
              }}
              priority
            />
          </div>

          {/* Text content container with background to ensure readability */}
          <div className="relative z-20 bg-white/90 -mt-12 pt-8 px-2">
            <p className="text-[#1e1e1e] text-lg mb-8 font-sans">
              The Art of Fight: Turn Clash into Connection. Learn step by step emotional regulation techniques, mindset reframes and strategic communication templates to use disagreements and make your relationships stronger than ever before.
            </p>

            {/* Replaced Link with ReserveButton component */}
            <ReserveButton />
          </div>
        </div>
      </div>
    </div>
  );
}