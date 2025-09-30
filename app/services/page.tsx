'use client'

import React from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, GraduationCap, Briefcase, Plane, Building2, Users, FileCheck, Globe, Check } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Student Visa',
    description: 'Expert guidance for international students seeking to study abroad. We help with university selection, application process, and visa requirements.',
    image: '/images/student-visa.jpg',
    icon: GraduationCap,
    link: '/services/student-visa',
    features: ['University Selection', 'Application Assistance', 'Visa Processing', 'Pre-departure Support']
  },
  {
    id: 2,
    title: 'Work Visa',
    description: 'Professional assistance for individuals looking to work abroad. We handle work permit applications and employment visa processing.',
    image: '/images/work-visa.jpg',
    icon: Briefcase,
    link: '/services/work-visa',
    features: ['Job Search Support', 'Work Permit Processing', 'Visa Application', 'Employment Documentation']
  },
  {
    id: 3,
    title: 'Tourist Visa',
    description: 'Hassle-free tourist visa services for your travel needs. We ensure smooth processing of your travel documents.',
    image: '/images/tourist-visa.jpg',
    icon: Plane,
    link: '/services/tourist-visa',
    features: ['Travel Planning', 'Visa Processing', 'Documentation Support', 'Travel Insurance']
  },
  {
    id: 4,
    title: 'Business Visa',
    description: 'Comprehensive business visa solutions for entrepreneurs and corporate professionals expanding globally.',
    image: '/images/business-visa.jpg',
    icon: Building2,
    link: '/services/business-visa',
    features: ['Business Planning', 'Corporate Solutions', 'Legal Documentation', 'Global Network']
  }
]

const ServicesPage = () => {
  return (
    <>
      <TopNav />
      <MainNav />

      {/* Hero Section */}
      <section className="relative py-28 sm:py-32 md:py-40 lg:py-48 bg-gray-900">
        <div className="absolute inset-0 bg-[url('/images/services-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive visa and immigration solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                {/* Service Image */}
                <div className="relative h-64 sm:h-72">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-200 text-sm line-clamp-2">{service.description}</p>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-red-600 mb-4" />
                    <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Check className="w-5 h-5 text-red-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">Learn More</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-16 sm:mt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-center mb-12"
            >
              Additional Immigration Services
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <Users className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Family Immigration</h3>
                <p className="text-gray-600 mb-4">
                  Reunite with your family through our comprehensive family immigration services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <FileCheck className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Document Authentication</h3>
                <p className="text-gray-600 mb-4">
                  Professional assistance with document verification and authentication services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <Globe className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Migration</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance for permanent residency and citizenship applications worldwide.
                </p>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 bg-gray-50 p-8 sm:p-12 rounded-lg text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and take the first step towards your international goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ServicesPage 