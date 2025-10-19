'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
            {/* Company Info */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <Image
                  src="/logo.jpg"
                  alt="R&B Global Consultancy"
                  width={150}
                  height={60}
                />
                <Image
                  src="/logo-white2.JPEG"
                  alt="R&B Global Consultancy Secondary Logo"
                  width={150}
                  height={60}
                />
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                We are dedicated to providing exceptional immigration and visa consulting services, helping you achieve your global aspirations with confidence and ease.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/rbglobal11" className="hover:text-red-600 transition-colors">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="hover:text-red-600 transition-colors">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="hover:text-red-600 transition-colors">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="hover:text-red-600 transition-colors">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/about" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    Meet The Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/join-as-agent" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    Join As B2B Agent
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/services/student-visa" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    Student Visa
                  </Link>
                </li>
                <li>
                  <Link href="/services/business-visa" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    Business Visa
                  </Link>
                </li>
                <li>
                  <Link href="/services/work-visa" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    Work Visa
                  </Link>
                </li>
                <li>
                  <Link href="/services/tourist-visa" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    Tourist Visa
                  </Link>
                </li>
                <li>
                  <Link href="/services/immigration" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    Immigration Services
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-red-600 w-4 h-4 sm:w-5 sm:h-5 mt-1" />
                  <p className="text-sm sm:text-base">Ali plaza-2 (1st floor) Lalchand Road 4320 Chittagong, Bangladesh</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
                  <a href="tel:+0182999222" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    +8801814-195219
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
                  <a href="mailto:info@rnbgc.com" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                    info@rnbgc.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-center sm:text-left text-sm sm:text-base">
                © 2025 R&B Global Consultancy. All rights reserved.
              </p>
              <div className="flex space-x-4 sm:space-x-6">
                <Link href="/terms" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="text-sm sm:text-base hover:text-red-600 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 