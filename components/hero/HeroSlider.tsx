'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface SlideData {
  id: number
  title: string
  subtitle: string
  image: string
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Student Visa Services",
    subtitle: "Your Most Trusted Partners",
    image: "/images/slide1.jpg"
  },
  {
    id: 2,
    title: "Working Visa Services",
    subtitle: "Professional Visa Assistance",
    image: "/images/slide2.jpg"
  },
  {
    id: 3,
    title: "Tourist Visa Services",
    subtitle: "Your Journey Starts Here",
    image: "/images/slide3.jpg"
  },
  {
    id: 4,
    title: "Business Visa Services",
    subtitle: "Fast & Reliable Service",
    image: "/images/slide4.jpg"
  }
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentSlide 
              ? 'translate-x-0' 
              : index === ((currentSlide - 1 + slides.length) % slides.length)
              ? '-translate-x-full'
              : 'translate-x-full'
          }`}
          style={{
            zIndex: index === currentSlide ? 20 : 10,
            opacity: index === currentSlide ? 1 : isTransitioning ? 1 : 0,
          }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center md:pl-8 lg:pl-20 text-white">
            <div className="w-full max-w-xl px-4 md:px-0 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 max-w-md">
                {slide.subtitle}
              </p>
              <a 
                href="https://wa.me/0182999222?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20visa%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-md hover:bg-red-700 transition-colors"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-red-600' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider 