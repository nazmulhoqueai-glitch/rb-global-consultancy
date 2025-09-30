'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Business Visa',
    description: 'Expert guidance for business visas, ensuring smooth processing for your corporate travel needs.',
    image: '/images/business-visa.jpg',
    link: '/services/business-visa'
  },
  {
    id: 2,
    title: 'Student Visa',
    description: 'Comprehensive support for student visas, helping you pursue your educational dreams abroad.',
    image: '/images/student-visa.jpg',
    link: '/services/student-visa'
  },
  {
    id: 3,
    title: 'Work Visa',
    description: 'Professional assistance for work visas, facilitating your international career opportunities.',
    image: '/images/work-visa.jpg',
    link: '/services/work-visa'
  },
  {
    id: 4,
    title: 'Tourist Visa',
    description: 'Reliable tourist visa services, making your travel experiences hassle-free and enjoyable.',
    image: '/images/tourist-visa.jpg',
    link: '/services/tourist-visa'
  }
]

const waveAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

const cardAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0
  }
}

const Services = () => {
  const title = "Explore Our Visa Citizenship & Immigration Services"
  const words = title.split(" ")

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h3 
            className="text-red-600 font-medium tracking-wider uppercase mb-3 sm:mb-4 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SERVICE WE PROVIDE
          </motion.h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 overflow-hidden">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 px-4">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={waveAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 max-w-lg sm:max-w-none mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-52 sm:h-48 md:h-56 lg:h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors text-sm sm:text-base group"
                >
                  <span className="mr-2 group-hover:mr-3 transition-all">Read More</span>
                  <ArrowRight 
                    size={16} 
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" 
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 