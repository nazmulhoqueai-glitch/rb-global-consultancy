'use client'

import React from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Award, Globe } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Abdul Momen Rafi',
    role: 'CEO & Founder',
    image: '/images/team/ceo.jpg',
    bgColor: 'bg-yellow-50',
    email: 'rafi@r&bglobalconsultancy.com',
    phone: '+880182999222',
    bio: 'With over 12 years of experience in immigration consulting, Abdul Momen Rafi founded R&B Global Consultancy to help individuals achieve their dreams of studying, working, and living abroad. His expertise and dedication have helped thousands of clients successfully navigate complex immigration processes.',
    expertise: [
      'Immigration Law & Policy',
      'Business Visa Strategy',
      'Corporate Immigration Solutions',
      'International Education Consulting'
    ],
    achievements: [
      '10+ Years Experience',
      '5000+ Successful Cases',
      '98% Success Rate'
    ],
    socials: {
      facebook: 'https://www.facebook.com/momen.rafi.3',
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
    email: 'director@r&bglobalconsultancy.com',
    phone: '+8801814-195219',
    bio: 'As Director of R&B Global Consultancy, Doulatun Nesa brings extensive experience in operational management and client relations. She ensures every client receives personalized attention and comprehensive support throughout their immigration journey.',
    expertise: [
      'Operations Management',
      'Client Relations',
      'Student Visa Services',
      'Family Immigration'
    ],
    achievements: [
      '6+ Years Experience',
      'Client Satisfaction Expert',
      'Strategic Planning Specialist'
    ],
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 3,
    name: 'MD Sajjad Hossain',
    role: 'Senior Visa Consultant',
    image: '/images/team/consultant1.jpg',
    bgColor: 'bg-green-50',
    email: 'sajjad@r&bglobalconsultancy.com',
    phone: '+8801891656032',
    bio: 'MD Sajjad Hossain specializes in student and work visa applications, with a deep understanding of visa requirements for major destinations. His attention to detail and commitment to excellence have resulted in numerous successful visa approvals.',
    expertise: [
      'Student Visa Processing',
      'Work Permit Applications',
      'Document Verification',
      'Embassy Liaison'
    ],
    achievements: [
      '3 Years Experience',
      '500+ Visa Approvals',
      'University Partnership Expert'
    ],
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 4,
    name: 'Taharatul Sikdar Minar',
    role: 'Customer Service Officer',
    image: '/images/team/consultant3.jpg',
    bgColor: 'bg-red-50',
    email: 'minar@r&bglobalconsultancy.com',
    phone: '+8801814-195219',
    bio: 'Taharatul Sikdar Minar is dedicated to providing exceptional customer service and support to all our clients. With excellent communication skills and a client-first approach, he ensures every inquiry is handled with care and professionalism, making the visa application experience smooth and welcoming.',
    expertise: [
      'Customer Support',
      'Client Relations',
      'Query Resolution',
      'Service Coordination'
    ],
    achievements: [
      '1+ Years Experience',
      'Customer Satisfaction Leader',
      'Quick Response Specialist'
    ],
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 5,
    name: 'Mohammad Ibrahim',
    role: 'Business Development Officer',
    image: '/images/team/consultant4.jpg',
    bgColor: 'bg-orange-50',
    email: 'ibrahim@r&bglobalconsultancy.com',
    phone: '+8801814-195219',
    bio: 'Mohammad Ibrahim drives business growth and develops strategic partnerships for R&B Global Consultancy. His expertise in identifying new opportunities and building strong relationships with educational institutions and partners worldwide has significantly expanded our service reach and client base.',
    expertise: [
      'Business Strategy',
      'Partnership Development',
      'Market Expansion',
      'Client Acquisition'
    ],
    achievements: [
      '2+ Years Experience',
      '50+ Strategic Partnerships',
      'Business Growth Expert'
    ],
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 6,
    name: 'Arshad Khan Wasim',
    role: 'Regional Sales Director',
    image: '/images/team/consultant5.jpg',
    bgColor: 'bg-teal-50',
    email: 'wasim@r&bglobalconsultancy.com',
    phone: '+8801960-083147',
    bio: 'Arshad Khan Wasim leads our regional sales efforts, bringing innovative strategies and a deep understanding of client needs. His leadership in developing and executing sales initiatives has been instrumental in establishing R&B Global Consultancy as a trusted name in immigration services across the region.',
    expertise: [
      'Sales Strategy',
      'Team Leadership',
      'Market Analysis',
      'Client Engagement'
    ],
    achievements: [
      '5+ Years Experience',
      'Regional Sales Leader',
      'Revenue Growth Specialist'
    ],
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 7,
    name: 'MD Abid',
    role: 'Office Executive',
    image: '/images/team/consultant2.jpg',
    bgColor: 'bg-purple-50',
    email: 'abid@r&bglobalconsultancy.com',
    phone: '+8801305-577022',
    bio: 'MD Abid manages the day-to-day operations and administrative functions of R&B Global Consultancy. His organizational skills and attention to detail ensure smooth workflow, efficient document processing, and seamless coordination between different departments for optimal client service delivery.',
    expertise: [
      'Office Management',
      'Administrative Operations',
      'Document Processing',
      'Team Coordination'
    ],
    achievements: [
      '5+ Years Experience',
      'Operations Efficiency Expert',
      'Process Optimization Specialist'
    ],
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  }
]

const TeamPage = () => {
  return (
    <>
      <TopNav />
      <MainNav />

      {/* Hero Section */}
      <section className="relative py-28 sm:py-32 md:py-40 lg:py-48 bg-gray-900">
        <div className="absolute inset-0 bg-[url('/images/team-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Expert Team
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dedicated professionals committed to making your immigration journey successful and stress-free.
          </motion.p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Our Team Makes the Difference
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-base sm:text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our team of experienced immigration consultants brings together decades of combined expertise in visa processing, immigration law, and international education. We pride ourselves on our personalized approach, attention to detail, and unwavering commitment to client success.
            </motion.p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">53+</div>
              <div className="text-gray-600 text-sm sm:text-base">Years Combined Experience</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">5000+</div>
              <div className="text-gray-600 text-sm sm:text-base">Successful Cases</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm sm:text-base">Countries Served</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm sm:text-base">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                } md:flex`}
              >
                {/* Image Section */}
                <div className={`md:w-2/5 relative ${member.bgColor}`}>
                  <div className="relative h-64 sm:h-80 md:h-full min-h-[400px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-red-600 font-semibold text-lg">{member.role}</p>
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href={member.socials.facebook} 
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook size={16} />
                      </a>
                      <a 
                        href={member.socials.linkedin} 
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="w-5 h-5 text-red-600 mr-2" />
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Globe className="w-5 h-5 text-red-600 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm sm:text-base">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t pt-6 mt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center text-gray-600 hover:text-red-600 transition-colors text-sm sm:text-base"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        {member.email}
                      </a>
                      <a 
                        href={`tel:${member.phone}`}
                        className="flex items-center text-gray-600 hover:text-red-600 transition-colors text-sm sm:text-base"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gray-50 p-8 sm:p-12 rounded-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Work With Our Team?</h2>
            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              Schedule a consultation with one of our expert consultants and take the first step towards your immigration goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors text-base sm:text-lg font-semibold"
            >
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default TeamPage