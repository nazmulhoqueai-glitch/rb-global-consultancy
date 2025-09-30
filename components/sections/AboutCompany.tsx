'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

const AboutCompany = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative order-2 md:order-1">
            {/* Red decorative lines */}
            <div className="absolute left-0 top-0 w-1 h-[80%] bg-red-600 z-30"></div>
            <div className="absolute left-0 top-[80%] w-[40%] h-1 bg-red-600 z-30"></div>
            <div className="absolute left-[40%] top-[80%] w-1 h-[20%] bg-red-600 z-30"></div>

            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
              <div className="absolute top-0 left-0 w-[80%] h-[80%] z-10">
                <Image
                  src="/images/about1.jpg"
                  alt="Visa Consulting Team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] z-20">
                <Image
                  src="/images/about2.jpg"
                  alt="Visa Consultation Session"
                  fill
                  className="object-cover rounded-lg border-4 sm:border-8 border-white"
                />
              </div>
              <div className="absolute top-[20%] right-[10%] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-red-600 rounded-full z-30 flex flex-col items-center justify-center text-white">
                <div className="text-2xl sm:text-3xl font-bold">12+</div>
                <div className="text-xs sm:text-sm text-center">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <div className="uppercase text-red-600 font-semibold tracking-wider text-sm sm:text-base">
              ABOUT COMPANY
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Welcome To R&B Global Consultancy Firm
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We help students achieve their dreams of studying abroad by providing expert guidance on university selection, application processes, visa assistance, and scholarships. Our mission is to make international education accessible and hassle-free, ensuring a smooth transition to top universities worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 my-6 sm:my-8">
              <div className="flex items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                  <div className="absolute inset-0 bg-red-600 rounded-full opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-bold text-red-600">
                    68%
                  </div>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="font-semibold text-sm sm:text-base">Business Strategy</h3>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                  <div className="absolute inset-0 bg-red-600 rounded-full opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-bold text-red-600">
                    93%
                  </div>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="font-semibold text-sm sm:text-base">Real Technology Solutions</h3>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Immigration & Visa Consulting</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Direct Online Interview</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">99% Visa Approvals</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 sm:mt-8">
              <Link 
                href="/about"
                className="w-full sm:w-auto bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-red-700 transition-colors inline-flex items-center justify-center text-sm sm:text-base"
              >
                About Us
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 relative rounded-full overflow-hidden">
                  <Image
                    src="/images/ceo.jpg"
                    alt="CEO & Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">Abdul Momen Rafi</div>
                  <div className="text-xs sm:text-sm text-red-600">CEO & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany 