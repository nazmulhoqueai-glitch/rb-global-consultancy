'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const consultants = [
  {
    id: 1,
    name: 'Abdul Momen Rafi',
    role: 'CEO & Founder',
    image: '/images/team/ceo.jpg',
    bgColor: 'bg-yellow-50',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 2,
    name: 'Doulatun Nesa',
    role: 'Director',
    image: '/images/team/director.jpg',
    bgColor: 'bg-blue-50',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 3,
    name: 'Arshad Khan Wasim',
    role: 'Regional Sales Director',
    image: '/images/team/consultant5.jpg',
    bgColor: 'bg-red-50',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 4,
    name: 'Mishkatur Rahman Sajid',
    role: 'Administration officer',
    image: '/images/team/consultant1.JPEG',
    bgColor: 'bg-green-50',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 5,
    name: 'Taharatul Sikdar Minar',
    role: 'Customer Service Officer',
    image: '/images/team/consultant3.jpg',
    bgColor: 'bg-red-50',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 6,
    name: 'Mohammad Ibrahim',
    role: 'Business Development Officer',
    image: '/images/team/consultant4.jpg',
    bgColor: 'bg-red-50',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  
  {
    id: 7,
    name: 'Abdun Nur Tusher Abid',
    role: 'Office Executive',
    image: '/images/team/consultant2.jpg',
    bgColor: 'bg-purple-50',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  }
]

const ConsultantTeam = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* First Section: Title + Featured Consultants */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Text content */}
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Our trusted immigration<br />
                <span className="text-gray-600">support team</span>
              </motion.h2>
              <motion.p 
                className="text-gray-600 text-lg"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                At the heart of our commitment to providing exceptional immigration solutions stands our dedicated team of experts.
              </motion.p>
            </div>

            {/* Right side - Two Featured Consultants */}
            <div className="grid grid-cols-2 gap-6">
              {consultants.slice(0, 2).map((consultant, index) => (
                <ConsultantCard key={consultant.id} consultant={consultant} index={index} />
              ))}
            </div>
          </div>

          {/* Second Section: Three Consultants */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[calc(100%-2rem)] md:max-w-3xl lg:max-w-4xl mx-auto">
            {consultants.slice(2).map((consultant, index) => (
              <ConsultantCard key={consultant.id} consultant={consultant} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>
    </section>
  )
}

// Consultant Card Component
const ConsultantCard = ({ 
  consultant, 
  index 
}: { 
  consultant: typeof consultants[0]
  index: number 
}) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 * index }}
  >
    <div className="relative rounded-xl overflow-hidden shadow-md group">
      {/* Background Shape */}
      <div className={`absolute inset-0 ${consultant.bgColor} clip-diagonal`}></div>
      
      {/* Image Container */}
      <div className="relative aspect-[3/4]">
        <Image
          src={consultant.image}
          alt={consultant.name}
          fill
          className="object-cover object-center clip-diagonal transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Social Icons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
          <SocialIcon href={consultant.socials.facebook} icon={<Facebook size={18} />} />
          <SocialIcon href={consultant.socials.twitter} icon={<Twitter size={18} />} />
          <SocialIcon href={consultant.socials.linkedin} icon={<Linkedin size={18} />} />
          <SocialIcon href={consultant.socials.instagram} icon={<Instagram size={18} />} />
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90">
        <h3 className="text-lg font-bold">{consultant.name}</h3>
        <p className="text-gray-600 text-sm">{consultant.role}</p>
      </div>
    </div>
  </motion.div>
)

// Social Icon Component
const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors shadow-lg"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
)

export default ConsultantTeam 