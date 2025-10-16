'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const MainNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="VisaLand Logo"
              width={150}
              height={40}
              className="w-32 sm:w-40 md:w-[150px] object-contain"
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-110 font-medium text-sm lg:text-base"
            >
              Home
            </Link>
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-110 font-medium flex items-center text-sm lg:text-base">
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className={`absolute top-full left-0 w-48 py-2 bg-white rounded-md shadow-lg transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link 
                  href="/services/student-visa" 
                  className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all transform hover:scale-105 text-sm"
                >
                  Student Visa
                </Link>
                <Link 
                  href="/services/work-visa" 
                  className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all transform hover:scale-105 text-sm"
                >
                  Work Visa
                </Link>
                <Link 
                  href="/services/tourist-visa" 
                  className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all transform hover:scale-105 text-sm"
                >
                  Tourist Visa
                </Link>
                <Link 
                  href="/services/business-visa" 
                  className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all transform hover:scale-105 text-sm"
                >
                  Business Visa
                </Link>
              </div>
            </div>
            <Link 
              href="/countries" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-110 font-medium text-sm lg:text-base"
            >
              Countries
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-110 font-medium text-sm lg:text-base"
            >
              About Us
            </Link>
            <Link 
              href="/team" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-110 font-medium text-sm lg:text-base"
            >
              Our Team
            </Link>
            <Link 
              href="/gallery" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-110 font-medium text-sm lg:text-base"
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-110 font-medium text-sm lg:text-base"
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <div className="flex flex-col items-end">
              <span className="text-gray-600 text-xs lg:text-sm">PHONE:</span>
              <a href="tel:+0182999222" className="text-red-600 font-semibold hover:text-red-700 text-sm lg:text-base">
                +8801814-195219
              </a>
            </div>
            <a
              href="https://wa.me/0182999222?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20visa%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-4 lg:px-6 py-2 rounded-md hover:bg-red-700 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[calc(100vh-4rem)] py-4 overflow-y-auto' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-105 font-medium py-2 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            {/* Mobile Services Menu */}
            <div className="space-y-2">
              <div className="text-gray-700 font-medium text-base">Services</div>
              <div className="space-y-2 pl-4">
                <Link 
                  href="/services/student-visa" 
                  className="block text-gray-700 hover:text-red-600 transition-all transform hover:scale-105 py-1 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Student Visa
                </Link>
                <Link 
                  href="/services/work-visa" 
                  className="block text-gray-700 hover:text-red-600 transition-all transform hover:scale-105 py-1 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Work Visa
                </Link>
                <Link 
                  href="/services/tourist-visa" 
                  className="block text-gray-700 hover:text-red-600 transition-all transform hover:scale-105 py-1 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tourist Visa
                </Link>
                <Link 
                  href="/services/business-visa" 
                  className="block text-gray-700 hover:text-red-600 transition-all transform hover:scale-105 py-1 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Business Visa
                </Link>
              </div>
            </div>
            <Link 
              href="/countries" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-105 font-medium py-2 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Countries
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-105 font-medium py-2 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/team" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-105 font-medium py-2 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link 
              href="/gallery" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-105 font-medium py-2 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-red-600 transition-all transform hover:scale-105 font-medium py-2 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="flex flex-col space-y-1 py-2">
              <span className="text-gray-600 text-sm">PHONE:</span>
              <a href="tel:+0182999222" className="text-red-600 font-semibold text-base">
                +8801814-195219
              </a>
            </div>
            <a
              href="https://wa.me/0182999222?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20visa%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors text-center text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav 