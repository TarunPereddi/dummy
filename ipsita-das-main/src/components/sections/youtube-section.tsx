"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// YouTube video data
const videos = [
  {
    title: "5 Negative thinking patterns destroying your Confidence",
    thumbnail: "/images/YOUTUBE_THUMBNAILS/Negative-thinking.png?height=166&width=300",
    link: "https://youtube.com/watch?v=example1",
  },
  {
    title: "Reset your Life - 4 changes in 2025!",
    thumbnail: "/images/YOUTUBE_THUMBNAILS/Reset.png?height=166&width=300",
    link: "https://youtube.com/watch?v=example2",
  },
  {
    title: "5 Negative thinking patterns destroying your Confidence",
    thumbnail: "/images/YOUTUBE_THUMBNAILS/Negative-thinking.png?height=166&width=300",
    link: "https://youtube.com/watch?v=example3",
  },
  {
    title: "Reset your Life - 4 changes in 2025!",
    thumbnail: "/images/YOUTUBE_THUMBNAILS/Reset.png?height=166&width=300",
    link: "https://youtube.com/watch?v=example4",
  },
]

export default function YouTubeSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(4)

  // Responsive slides to show based on screen width
  useEffect(() => {
    function updateSlidesToShow() {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(4)
      }
    }

    updateSlidesToShow()
    window.addEventListener("resize", updateSlidesToShow)
    return () => window.removeEventListener("resize", updateSlidesToShow)
  }, [])

  const totalSlides = Math.ceil(videos.length / slidesToShow)

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev <= 0 ? totalSlides - 1 : prev - 1
      scrollToIndex(newIndex)
      return newIndex
    })
  }

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev >= totalSlides - 1 ? 0 : prev + 1
      scrollToIndex(newIndex)
      return newIndex
    })
  }

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.scrollWidth / videos.length
      sliderRef.current.scrollTo({
        left: slideWidth * index * slidesToShow,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="bg-gradient-to-r from-[#E5ABCE] to-[#6D87C4] inline-block text-transparent bg-clip-text text-5xl font-bold font-serif">
            Check Out My
            <br />
             YouTube Channel
          </h2>

          <div className="flex items-center">
            {/* <div className="hidden sm:flex mr-4">
              <span className="text-lg font-medium">
                {currentIndex + 1}/{totalSlides}
              </span>
            </div> */}
            <div className="flex gap-4">
              <button
                onClick={goToPrevious}
                className="w-16 h-16 rounded-full border-2 border-[#1e1e1e] flex items-center justify-center transition-colors hover:bg-gray-100"
                aria-label="Previous videos"
              >
                <ChevronLeft className="w-13 h-13 text-black" />
              </button>
              <button
                onClick={goToNext}
                className="w-16 h-16 rounded-full border-2 border-[#1e1e1e] flex items-center justify-center transition-colors hover:bg-gray-100"
                aria-label="Next videos"
              >
                <ChevronRight className="w-13 h-13 text-black" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-hidden scroll-smooth pb-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div
                  className={`bg-[#F7F7F7] rounded-[32px] overflow-hidden flex flex-col h-[360px] transition-all duration-300 hover:-translate-y-2 group max-w-[265px] mx-auto ${
                    index % 2 === 0 ? "hover:bg-[#E5ABCE]" : "hover:bg-[#6D87C4]"
                  }`}
                >
                  <div className="relative w-full h-[180px] overflow-hidden">
                    <Image
                      src={video.thumbnail || "https://placehold.co/300x166.svg"}
                      alt={video.title}
                      fill
                      className="object-fill transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-[#1e1e1e] text-lg font-bold mb-4 line-clamp-3 font-sans">{video.title}</h3>
                    <div className="mt-auto mb-4">
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#1e1e1e] font-sans"
                      >
                        <span className="text-lg font-bold">View</span>{" "}
                        <div className="ml-2 w-4 h-4 relative transition-all duration-300 transform group-hover:translate-x-2 group-hover:w-5 group-hover:h-5">
                          <Image 
                            src="/images/rightArrow.png" 
                            alt="Arrow" 
                            fill 
                            className="object-contain" 
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

