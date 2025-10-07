'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Award, Trophy, Star, Calendar } from 'lucide-react'

// Gallery data structure - you can add more images here
const galleryData = [
  {
    id: 1,
    category: 'Awards',
    title: 'Excellence in Visa Services 2024',
    image: '/images/gallery/achievement1.png',
    date: 'January 2024',
    description: 'Recognized for outstanding service in visa consultation'
  },
  {
    id: 2,
    category: 'Events',
    title: 'USIM University Event',
    image: '/images/gallery/achievement2.png',
    date: 'March 2024',
    description: 'Awarded ISO certification for quality management'
  },
  {
    id: 3,
    category: 'Milestones',
    title: '1000+ Successful Visa Applications',
    image: '/images/gallery/achievement3.png',
    date: 'June 2024',
    description: 'Celebrating a major milestone in helping clients'
  },
  {
    id: 4,
    category: 'Events',
    title: 'University of Sains Islam Malaysia Event',
    image: '/images/gallery/achievement4.png',
    date: 'August 2024',
    description: 'Honored as the best immigration consultant in the region'
  },
  {
    id: 5,
    category: 'Events',
    title: 'International Islamic College Event',
    image: '/images/gallery/achievement5.png',
    date: 'September 2024',
    description: 'Celebrating success with our valued clients'
  },
  {
    id: 6,
    category: 'Milestones',
    title: 'Saudia Visa Complition',
    image: '/images/gallery/achievement6.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 7,
    category: 'Milestones',
    title: 'Malaysian Visit Visa Complition',
    image: '/images/gallery/achievement7.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 8,
    category: 'Milestones',
    title: 'Malaysian Visit Visa Complition',
    image: '/images/gallery/achievement8.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 9,
    category: 'Milestones',
    title: 'Malaysian Visit Visa Complition',
    image: '/images/gallery/achievement9.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 10,
    category: 'Milestones',
    title: 'Saudi Visa Complition',
    image: '/images/gallery/achievement10.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 11,
    category: 'Milestones',
    title: 'Malaysian Student Visa Complition',
    image: '/images/gallery/achievement11.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 12,
    category: 'Milestones',
    title: 'Malaysian Visit Visa Complition',
    image: '/images/gallery/achievement12.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 13,
    category: 'Milestones',
    title: 'Malaysian Visit Visa Complition',
    image: '/images/gallery/achievement13.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 14,
    category: 'Milestones',
    title: 'Malaysian Visit Visa Complition',
    image: '/images/gallery/achievement14.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 15,
    category: 'Milestones',
    title: 'Malaysian Student Visa Complition',
    image: '/images/gallery/achievement15.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 16,
    category: 'Milestones',
    title: 'Romanian Visa Complition',
    image: '/images/gallery/achievement16.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 17,
    category: 'Milestones',
    title: 'Saudi Visa Complition',
    image: '/images/gallery/achievement17.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 18,
    category: 'Milestones',
    title: 'Saudi Visa Complition',
    image: '/images/gallery/achievement18.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 19,
    category: 'Milestones',
    title: 'Saudi Visa Complition',
    image: '/images/gallery/achievement19.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 20,
    category: 'Milestones',
    title: 'Saudi Visa Complition',
    image: '/images/gallery/achievement20.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  },
  {
    id: 21,
    category: 'Milestones',
    title: 'Thailand Visit Visa Complition',
    image: '/images/gallery/achievement21.png',
    date: 'October 2024',
    description: 'Official government recognition and accreditation'
  }
]

const categories = ['All', 'Awards', 'Certifications', 'Milestones', 'Events']

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Filter images based on selected category
  const filteredGallery = selectedCategory === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory)

  // Navigation for lightbox
  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredGallery.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Awards':
        return <Trophy className="w-5 h-5" />
      case 'Certifications':
        return <Award className="w-5 h-5" />
      case 'Milestones':
        return <Star className="w-5 h-5" />
      case 'Events':
        return <Calendar className="w-5 h-5" />
      default:
        return <Trophy className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-red-200 font-medium tracking-wider uppercase mb-4 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Journey
            </motion.span>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Gallery of Achievements
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-red-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Celebrating our milestones, awards, and the success stories that define our commitment to excellence
            </motion.p>
          </motion.div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12 sticky top-0 bg-white z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedImage(index)}
                >
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-sm font-medium mb-2">{item.date}</p>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg">
                      {getCategoryIcon(item.category)}
                      {item.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform rotate-45 translate-x-10 -translate-y-10"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredGallery.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 mb-4">
                <Trophy className="w-16 h-16 mx-auto" />
              </div>
              <p className="text-xl text-gray-600">No achievements found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-50"
            >
              <X className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Previous Button */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
                className="absolute left-4 text-white hover:text-red-500 transition-colors z-50"
              >
                <ChevronLeft className="w-10 h-10 sm:w-12 sm:h-12" />
              </button>
            )}

            {/* Next Button */}
            {selectedImage < filteredGallery.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                className="absolute right-4 text-white hover:text-red-500 transition-colors z-50"
              >
                <ChevronRight className="w-10 h-10 sm:w-12 sm:h-12" />
              </button>
            )}

            {/* Image Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src={filteredGallery[selectedImage].image}
                  alt={filteredGallery[selectedImage].title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1536px) 100vw, 1536px"
                />
              </div>
              
              {/* Image Info */}
              <div className="bg-white rounded-b-lg p-4 sm:p-6 mt-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {getCategoryIcon(filteredGallery[selectedImage].category)}
                        {filteredGallery[selectedImage].category}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {filteredGallery[selectedImage].title}
                    </h3>
                    <p className="text-gray-600 mb-2">{filteredGallery[selectedImage].description}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {filteredGallery[selectedImage].date}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                    {selectedImage + 1} / {filteredGallery.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg sm:text-xl text-red-100 mb-8">
              Join hundreds of satisfied clients who have achieved their visa goals with our expert guidance
            </p>
            <motion.a
              href="https://wa.me/8801814195219?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20visa%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage

