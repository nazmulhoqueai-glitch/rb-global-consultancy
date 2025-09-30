'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Kawser Ahmed',
    role: 'Web Developer',
    image: '/images/testimonials/person1.jpg',
    feedback: 'creative agency, we believe in the Eid and innovation. We are constantly melt of what is possible, and strive to cat only bea utiful and effective,but shark inventore veritatis et quasi archite cto beatae citae dicta sunt atlantic'
  },
  {
    id: 2,
    name: 'Salman Ahmed',
    role: 'Web Developer',
    image: '/images/testimonials/person2.jpg',
    feedback: 'creative agency, we believe in the Eid and innovation. We are constantly melt of what is possible, and strive to cat only bea utiful and effective,but shark inventore veritatis et quasi archite cto beatae citae dicta sunt atlantic'
  },
  {
    id: 3,
    name: 'Salman Ahmed',
    role: 'Web Developer',
    image: '/images/testimonials/person3.jpg',
    feedback: 'creative agency, we believe in the Eid and innovation. We are constantly melt of what is possible, and strive to cat only bea utiful and effective,but shark inventore veritatis et quasi archite cto beatae citae dicta sunt atlantic'
  },
  // Add more testimonials to make 12 total
]

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const title = "Let's Explore What People Say About Our Services"
  const words = title.split(" ")

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <motion.span 
              className="text-red-600 font-medium tracking-wider uppercase mb-4 inline-block text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              OUR TESTIMONIALS
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let's Explore What People Say About Our Services
            </motion.h2>
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${activeSlide * 33.333}%)` }}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="min-w-[100%] sm:min-w-[50%] md:min-w-[33.333%] px-4"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-red-600 text-3xl sm:text-4xl">"</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{testimonial.feedback}</p>
                    <div className="mt-4 text-red-600">
                      <span className="text-xs sm:text-sm">January 23, 2024</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                    index === activeSlide ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                  onClick={() => {
                    setActiveSlide(index)
                    setIsAutoPlaying(false)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 