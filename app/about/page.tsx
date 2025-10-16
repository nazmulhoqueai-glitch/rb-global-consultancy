'use client'

import React from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import Image from 'next/image'
import { Check, Users, Globe, Award, Building } from 'lucide-react'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <>
      <TopNav />
      <MainNav />

      {/* Hero Section */}
      <section className="relative py-28 sm:py-32 md:py-40 lg:py-48 bg-gray-900">
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About R&B Global Consultancy
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted partner in immigration and visa consulting services since 2014.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Overview */}
          <div className="max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who We Are
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8 text-base sm:text-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              R&B Global Consultancy is a leading immigration and visa consulting firm based in Chittagong, Bangladesh. With over a decade of experience, we've helped thousands of individuals and families achieve their dreams of studying, working, and living abroad.
            </motion.p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">12+</div>
              <div className="text-gray-600 text-sm sm:text-base">Years Experience</div>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">5000+</div>
              <div className="text-gray-600 text-sm sm:text-base">Successful Cases</div>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm sm:text-base">Countries Covered</div>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm sm:text-base">Success Rate</div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mr-3" />
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To provide exceptional immigration and visa consulting services that help our clients achieve their global aspirations with confidence and ease. We strive to make the complex process of international relocation simple and stress-free.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mr-3" />
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To be the most trusted and respected immigration consulting firm in Bangladesh, known for our integrity, expertise, and commitment to client success. We aim to be the bridge that connects people to global opportunities.
              </p>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Award className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Our team consists of experienced immigration consultants and legal experts who stay updated with the latest immigration policies.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Building className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Global Network</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Strong partnerships with educational institutions, employers, and immigration authorities worldwide.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Check className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Proven Success</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  High success rate with thousands of satisfied clients who have successfully relocated abroad.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Integrity</h3>
                  <p className="text-gray-600 text-sm sm:text-base">We maintain the highest ethical standards in all our dealings.</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-gray-600 text-sm sm:text-base">We strive for excellence in every service we provide.</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Client Focus</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Our clients' success is our top priority.</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm sm:text-base">We continuously improve our services and processes.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutPage 