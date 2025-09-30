'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'

type Country = {
  id: number
  name: string
  image: string
  universities: number
}

type Partner = {
  id: number
  name: string
  image: string
}

interface InfiniteScrollProps {
  items: Partner[] | Country[]
  itemHeight: number
  isPartner?: boolean
}

const partners = [
  { id: 1, name: 'Biman Bangladesh Airlines', image: '/images/partners/bd-biman.png' },
  { id: 2, name: 'Emirates', image: '/images/partners/emirastes.png' },
  { id: 3, name: 'Qatar Airways', image: '/images/partners/qtr-biman.png' },
  { id: 4, name: 'Singapore Airlines', image: '/images/partners/singapore.png' },
  { id: 5, name: 'Japan Airlines', image: '/images/partners/japan.png' },
  { id: 6, name: 'Fly Dubai', image: '/images/partners/fly-dubai.png' },
  { id: 7, name: 'Ethihad Airways', image: '/images/partners/ethihad.png' },
  { id: 8, name: 'ANA Airlines', image: '/images/partners/ana.png' },
  { id: 9, name: 'Air France', image: '/images/partners/air-france.png' },
  { id: 10, name: 'Virgin Atlantic Airways', image: '/images/partners/virgin.png' },
]

const countries: Country[] = [
  { id: 1, name: 'Australia', image: '/images/countries/australia.png', universities: 45 },
  { id: 2, name: 'Canada', image: '/images/countries/canada.png', universities: 52 },
  { id: 3, name: 'United Kingdom', image: '/images/countries/uk.png', universities: 130 },
  { id: 4, name: 'United States', image: '/images/countries/usa.png', universities: 180 },
  { id: 5, name: 'Germany', image: '/images/countries/mal.png', universities: 35 },
  { id: 6, name: 'France', image: '/images/countries/france.png', universities: 42 },
  { id: 7, name: 'Italy', image: '/images/countries/dubai.png', universities: 28 },
  { id: 8, name: 'Spain', image: '/images/countries/saudi.png', universities: 25 },
  { id: 9, name: 'Japan', image: '/images/countries/romania.png', universities: 33 },
  { id: 10, name: 'South Korea', image: '/images/countries/thailand.png', universities: 30 },
]

const waveAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

const InfiniteScroll = ({ items, itemHeight, isPartner = true }: InfiniteScrollProps) => {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = useState(false)

  const handleHoverStart = () => {
    setIsHovered(true)
    controls.stop()
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
    controls.start({
      x: '-100%',
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      }
    })
  }

  React.useEffect(() => {
    controls.start({
      x: '-100%',
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      }
    })
  }, [controls])

  return (
    <div 
      className="overflow-hidden relative w-full"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div 
        className="flex gap-8 items-center"
        animate={controls}
        style={{ 
          width: 'fit-content',
          x: 0
        }}
      >
        {/* Triple the items to ensure smooth infinite scroll */}
        {[...items, ...items, ...items].map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className={`relative flex-shrink-0 ${
              isPartner 
                ? 'w-[150px] h-[60px]' 
                : 'w-[150px] h-[100px]'
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className={`object-contain transition-all duration-300 ${
                isPartner 
                  ? 'grayscale hover:grayscale-0' 
                  : 'hover:scale-110'
              }`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const PartnersAndCountries = () => {
  const partnerTitle = "We're Proud to Work with our Preferred Partners"
  const countryTitle = "Countries We Work With"
  const partnerWords = partnerTitle.split(" ")
  const countryWords = countryTitle.split(" ")

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 overflow-hidden">
              <div className="flex flex-wrap justify-center gap-x-2">
                {partnerWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={waveAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </h2>
          </div>
          
          <InfiniteScroll items={partners} itemHeight={60} isPartner={true} />
        </div>

        {/* Countries Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 overflow-hidden">
              <div className="flex flex-wrap justify-center gap-x-2">
                {countryWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={waveAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </h2>
          </div>
          
          <InfiniteScroll items={countries} itemHeight={100} isPartner={false} />
        </div>
      </div>
    </section>
  )
}

export default PartnersAndCountries 