'use client'

import React, { useState } from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Clock, DollarSign, CheckCircle, Search, MapPin, Users, TrendingUp, ArrowRight } from 'lucide-react'

const countries = [
  {
    id: 1,
    name: 'Australia',
    flag: '/images/countries/australia.png',
    image: '/images/countries/australia.png',
    continent: 'Oceania',
    visaTypes: ['Student Visa', 'Work Visa', 'Tourist Visa', 'Business Visa'],
    processingTime: '4-6 weeks',
    universities: 45,
    successRate: 95,
    popularCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
    description: 'Known for world-class education, diverse culture, and excellent quality of life.',
    requirements: ['Valid Passport', 'Financial Proof', 'Health Insurance', 'English Proficiency'],
    bgGradient: 'from-yellow-400 to-green-500'
  },
  {
    id: 2,
    name: 'Canada',
    flag: '/images/countries/canada.png',
    image: '/images/countries/canada.png',
    continent: 'North America',
    visaTypes: ['Student Visa', 'Work Visa', 'PR Application', 'Business Visa'],
    processingTime: '8-12 weeks',
    universities: 52,
    successRate: 92,
    popularCities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
    description: 'Welcoming immigration policies, top universities, and multicultural society.',
    requirements: ['Valid Passport', 'Biometrics', 'Medical Exam', 'Police Clearance'],
    bgGradient: 'from-red-500 to-white'
  },
  {
    id: 3,
    name: 'United Kingdom',
    flag: '/images/countries/uk.png',
    image: '/images/countries/uk.png',
    continent: 'Europe',
    visaTypes: ['Student Visa', 'Work Visa', 'Tourist Visa', 'Business Visa'],
    processingTime: '3-6 weeks',
    universities: 130,
    successRate: 90,
    popularCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham'],
    description: 'Historic universities, rich culture, and excellent career opportunities.',
    requirements: ['Valid Passport', 'TB Test', 'Financial Evidence', 'English Test'],
    bgGradient: 'from-blue-600 via-white to-red-600'
  },
  {
    id: 4,
    name: 'United States',
    flag: '/images/countries/usa.png',
    image: '/images/countries/usa.png',
    continent: 'North America',
    visaTypes: ['Student Visa (F-1)', 'Work Visa (H-1B)', 'Tourist Visa (B-2)', 'Business Visa'],
    processingTime: '6-10 weeks',
    universities: 180,
    successRate: 88,
    popularCities: ['New York', 'Los Angeles', 'Boston', 'San Francisco'],
    description: 'World-leading education system, innovation hub, and diverse opportunities.',
    requirements: ['Valid Passport', 'Visa Interview', 'I-20 Form', 'SEVIS Fee'],
    bgGradient: 'from-blue-700 via-white to-red-600'
  },
  {
    id: 5,
    name: 'Germany',
    flag: '/images/countries/mal.png',
    image: '/images/countries/mal.png',
    continent: 'Europe',
    visaTypes: ['Student Visa', 'Work Visa', 'Job Seeker Visa', 'EU Blue Card'],
    processingTime: '6-12 weeks',
    universities: 35,
    successRate: 93,
    popularCities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
    description: 'Low-cost education, strong economy, and excellent work opportunities.',
    requirements: ['Valid Passport', 'Blocked Account', 'Health Insurance', 'Admission Letter'],
    bgGradient: 'from-black via-red-600 to-yellow-400'
  },
  {
    id: 6,
    name: 'France',
    flag: '/images/countries/france.png',
    image: '/images/countries/france.png',
    continent: 'Europe',
    visaTypes: ['Student Visa', 'Work Visa', 'Tourist Visa', 'Business Visa'],
    processingTime: '4-8 weeks',
    universities: 42,
    successRate: 91,
    popularCities: ['Paris', 'Lyon', 'Marseille', 'Toulouse'],
    description: 'Rich cultural heritage, quality education, and vibrant lifestyle.',
    requirements: ['Valid Passport', 'Campus France', 'Financial Proof', 'Health Insurance'],
    bgGradient: 'from-blue-600 via-white to-red-600'
  },
  {
    id: 7,
    name: 'Dubai (UAE)',
    flag: '/images/countries/dubai.png',
    image: '/images/countries/dubai.png',
    continent: 'Middle East',
    visaTypes: ['Work Visa', 'Tourist Visa', 'Business Visa', 'Golden Visa'],
    processingTime: '2-4 weeks',
    universities: 28,
    successRate: 96,
    popularCities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'],
    description: 'Tax-free income, modern infrastructure, and strategic business location.',
    requirements: ['Valid Passport', 'Job Offer', 'Medical Test', 'Emirates ID'],
    bgGradient: 'from-emerald-500 to-red-600'
  },
  {
    id: 8,
    name: 'Saudi Arabia',
    flag: '/images/countries/saudi.png',
    image: '/images/countries/saudi.png',
    continent: 'Middle East',
    visaTypes: ['Work Visa', 'Business Visa', 'Umrah Visa', 'Tourist Visa'],
    processingTime: '3-6 weeks',
    universities: 25,
    successRate: 94,
    popularCities: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca'],
    description: 'Growing economy, excellent salary packages, and career growth.',
    requirements: ['Valid Passport', 'Job Contract', 'Medical Certificate', 'PCC'],
    bgGradient: 'from-green-600 to-green-800'
  },
  {
    id: 9,
    name: 'Romania',
    flag: '/images/countries/romania.png',
    image: '/images/countries/romania.png',
    continent: 'Europe',
    visaTypes: ['Student Visa', 'Work Visa', 'Business Visa'],
    processingTime: '4-8 weeks',
    universities: 33,
    successRate: 89,
    popularCities: ['Bucharest', 'Cluj-Napoca', 'Timișoara', 'Iași'],
    description: 'Affordable education, EU member state, and emerging opportunities.',
    requirements: ['Valid Passport', 'Admission Letter', 'Financial Proof', 'Health Insurance'],
    bgGradient: 'from-blue-600 via-yellow-400 to-red-600'
  },
  {
    id: 10,
    name: 'Thailand',
    flag: '/images/countries/thailand.png',
    image: '/images/countries/thailand.png',
    continent: 'Asia',
    visaTypes: ['Tourist Visa', 'Work Visa', 'Business Visa', 'Retirement Visa'],
    processingTime: '2-4 weeks',
    universities: 30,
    successRate: 97,
    popularCities: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya'],
    description: 'Beautiful destinations, low cost of living, and friendly culture.',
    requirements: ['Valid Passport', 'Bank Statement', 'Hotel Booking', 'Return Ticket'],
    bgGradient: 'from-red-600 via-white to-blue-600'
  }
]

const continents = ['All', 'Asia', 'Europe', 'North America', 'Oceania', 'Middle East']

const CountriesPage = () => {
  const [selectedContinent, setSelectedContinent] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null)

  const filteredCountries = countries.filter(country => {
    const matchesContinent = selectedContinent === 'All' || country.continent === selectedContinent
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         country.popularCities.some(city => city.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesContinent && matchesSearch
  })

  return (
    <>
      <TopNav />
      <MainNav />

      {/* Hero Section */}
      <section className="relative py-28 sm:py-32 md:py-40 lg:py-48 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/world-map.png')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        </div>
        
        {/* Animated Globe Effect */}
        <div className="absolute top-10 right-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <Globe className="w-64 h-64 text-blue-400" />
          </motion.div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Explore Global
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover visa options, requirements, and success stories from 50+ countries worldwide
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-sm sm:text-base">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">600+</div>
              <div className="text-gray-300 text-sm sm:text-base">Universities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">93%</div>
              <div className="text-gray-300 text-sm sm:text-base">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-gray-300 text-sm sm:text-base">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search countries or cities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-red-500 focus:outline-none text-gray-700 text-base"
                />
              </div>
            </div>

            {/* Continent Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {continents.map((continent) => (
                <button
                  key={continent}
                  onClick={() => setSelectedContinent(continent)}
                  className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
                    selectedContinent === continent
                      ? 'bg-red-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {continent}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mt-4 text-gray-600">
              Showing <span className="font-semibold text-red-600">{filteredCountries.length}</span> countries
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedContinent + searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filteredCountries.map((country, index) => (
                  <motion.div
                    key={country.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedCountry(country.id)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  >
                    {/* Country Header with Flag */}
                    <div className={`relative h-48 bg-gradient-to-r ${country.bgGradient} p-6 flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-white shadow-xl">
                          <Image
                            src={country.flag}
                            alt={country.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{country.name}</h3>
                        <p className="text-white/90 text-sm mt-1">{country.continent}</p>
                      </div>
                    </div>

                    {/* Country Info */}
                    <div className="p-6">
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{country.description}</p>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="text-center p-2 bg-blue-50 rounded-lg">
                          <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">Universities</div>
                          <div className="font-bold text-blue-600 text-sm">{country.universities}</div>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded-lg">
                          <TrendingUp className="w-4 h-4 text-green-600 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">Success</div>
                          <div className="font-bold text-green-600 text-sm">{country.successRate}%</div>
                        </div>
                        <div className="text-center p-2 bg-purple-50 rounded-lg">
                          <Clock className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">Processing</div>
                          <div className="font-bold text-purple-600 text-xs">{country.processingTime}</div>
                        </div>
                      </div>

                      {/* Visa Types */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-700 mb-2">Visa Types Available:</h4>
                        <div className="flex flex-wrap gap-1">
                          {country.visaTypes.slice(0, 3).map((visa, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
                              {visa}
                            </span>
                          ))}
                          {country.visaTypes.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                              +{country.visaTypes.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Popular Cities */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          Popular Cities:
                        </h4>
                        <p className="text-sm text-gray-600">{country.popularCities.slice(0, 3).join(', ')}</p>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg font-semibold group-hover:from-red-700 group-hover:to-red-800 transition-all flex items-center justify-center space-x-2">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* No Results */}
            {filteredCountries.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Globe className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No countries found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let our expert consultants guide you through the visa application process
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                Book Free Consultation
              </a>
              <a
                href="/services"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CountriesPage
