'use client'

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Choose A Service',
    description: 'In a free hour, when our power of choice is untrammeled',
    icon: '/images/icons/passport.png',
    iconPosition: 'top',
    textPosition: 'bottom'
  },
  {
    number: 2,
    title: 'Documents And Payments',
    description: 'In a free hour, when our power of choice is untrammeled',
    icon: '/images/icons/dollar.png',
    iconPosition: 'bottom',
    textPosition: 'top'
  },
  {
    number: 3,
    title: 'Request A Meeting',
    description: 'In a free hour, when our power of choice is untrammeled',
    icon: '/images/icons/cs.png',
    iconPosition: 'top',
    textPosition: 'bottom'
  },
  {
    number: 4,
    title: 'Receive Your Visa Now',
    description: 'In a free hour, when our power of choice is untrammeled',
    icon: '/images/icons/visa.png',
    iconPosition: 'bottom',
    textPosition: 'top'
  }
]

const WorkingProcess = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.span 
            className="text-red-600 font-medium tracking-wider uppercase mb-3 sm:mb-4 text-sm sm:text-base block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            WORKING PROCESS
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            4 Step Follow You Can Get<br className="hidden sm:block" /> Your Visa Easily
          </motion.h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute left-0 w-full h-full" style={{ top: '0' }}>
            {/* Line 1: First to Second (top icon to bottom icon) */}
            <div 
              className="absolute border-t-2 border-dotted border-red-500"
              style={{ 
                left: '120px',
                top: '56px',
                width: '350px',
                transform: 'rotate(30deg)',
                transformOrigin: 'left'
              }}
            ></div>
            {/* Line 2: Second to Third (bottom icon to top icon) */}
            <div 
              className="absolute border-t-2 border-dotted border-red-500"
              style={{ 
                left: '480px',
                top: '244px',
                width: '350px',
                transform: 'rotate(-30deg)',
                transformOrigin: 'left'
              }}
            ></div>
            {/* Line 3: Third to Fourth (top icon to bottom icon) */}
            <div 
              className="absolute border-t-2 border-dotted border-red-500"
              style={{ 
                left: '840px',
                top: '56px',
                width: '350px',
                transform: 'rotate(30deg)',
                transformOrigin: 'left'
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20 lg:gap-y-20 gap-y-8 md:gap-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center px-4 relative h-auto lg:h-[300px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Mobile Layout - Stacked */}
                <div className="flex flex-col items-center lg:hidden">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gray-100 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.1)] flex items-center justify-center mb-4">
                    <img 
                      src={step.icon} 
                      alt={step.title} 
                      className="w-10 h-10"
                    />
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm max-w-[280px] mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Desktop Layout - Original */}
                <div className="hidden lg:block">
                  {/* Icon Section */}
                  <div className={`absolute ${
                    step.iconPosition === 'top' ? 'top-0' : 'bottom-0'
                  } left-1/2 transform -translate-x-1/2`}>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gray-100 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.1)] flex items-center justify-center relative z-10">
                      <img 
                        src={step.icon} 
                        alt={step.title} 
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className={`absolute ${
                    step.textPosition === 'top' ? 'top-12' : 'bottom-12'
                  } left-0 right-0`}>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base max-w-[250px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkingProcess 