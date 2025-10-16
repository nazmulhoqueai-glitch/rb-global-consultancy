'use client'

import React, { useState } from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Clock, DollarSign, CheckCircle, Search, MapPin, Users, TrendingUp, ArrowRight, X, FileText, GraduationCap, Briefcase, Camera, Home, Phone, Mail } from 'lucide-react'

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

// Detailed country information
const countryDetails = {
  1: { // Australia
    overview: {
      capital: 'Canberra',
      population: '25.7 million',
      currency: 'Australian Dollar (AUD)',
      language: 'English',
      timeZone: 'UTC+8 to UTC+11',
      climate: 'Temperate to tropical',
      majorCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
      whyChoose: [
        'World-class education system',
        'High quality of life',
        'Multicultural society',
        'Strong job market',
        'Beautiful landscapes',
        'Safe and stable country'
      ]
    },
    studentVisa: {
      types: ['Student Visa (Subclass 500)', 'Student Guardian Visa (Subclass 590)', 'Training Visa (Subclass 407)'],
      requirements: [
        'Confirmation of Enrolment (CoE)',
        'Genuine Temporary Entrant (GTE) statement',
        'English language proficiency (IELTS/PTE/TOEFL)',
        'Financial capacity proof',
        'Health insurance (OSHC)',
        'Health examination',
        'Character requirements'
      ],
      processingTime: '4-6 weeks',
      fees: 'AUD $650',
      workRights: 'Up to 40 hours per fortnight during study, unlimited during holidays'
    },
    documents: {
      admission: [
        'Passport (Biodata page)',
        'All academic documents: Certificate and Marksheet/Transcript',
        'IELTS/PTE/TOEFL certificates',
        'Current Study Letter (if study gap is more than 2 years)',
        'Statement of Purpose',
        'Personal details (Residential address, Mobile no, Email ID)',
        'Professional Certificate (if any)',
        'CV and Job experience letter (for Post-Graduation)',
        'In case of credits transfer: Official transcript and course outline'
      ],
      visa: [
        'Final SOP (High Commission Standard)',
        'Student\'s All Passports All Pages Color Print + Notarized',
        'All Dependents All Passports All Pages Color Print + Notarized',
        'Student\'s National ID Card Translated + Notarized',
        'All Dependents National ID Card Translated + Notarized',
        'Student\'s Birth Certificate (Translated + Notarized)',
        'All Dependents Birth Certificate (Translated + Notarized)',
        'Student\'s Police Clearance Certificate',
        'All Dependent\'s Police Clearance Certificate',
        'Marriage Certificate + Marriage Nikahnam',
        'All COEs of the Student',
        'Offer Letter + Scholarship Letter',
        'All Academic Documents of the Student',
        'All Academic Documents of Spouse',
        'English Proficiency Test Copy',
        'CV of the Applicant + CV of the Spouse',
        'Job Documents of the Student',
        'Main Fund Bank Statements - Sponsor',
        'Source Documents of the Fund - Sponsor',
        'Regular Income Proof Documents - Sponsor',
        'Tax Documents - Sponsor (TIN Certificate, Income Tax Return Slip, Income Tax Certificate)',
        'Passport Copy or National ID Card of the Sponsor and Parents',
        'Any Name Affidavit - Notarized',
        'Notarized Financial Declaration'
      ],
      forms: [
        '157A form (Will be filled by us)',
        '956A form (Will be filled by us)',
        '80 form (Will be filled by us)',
        'Financial guarantee form (All Sponsor - both parents)',
        'Financial Matrix for DHA',
        'Affidavit self (Student declaration)',
        'Affidavit Financial Affidavit (Student declaration)',
        'Affidavit of sponsorship/Statutory Declaration (If sponsor living Abroad)',
        'Affidavit of name correction (All sponsor) If Applicable'
      ]
    },
    universities: {
      topUniversities: [
        'University of Melbourne',
        'University of Sydney',
        'Australian National University',
        'University of Queensland',
        'Monash University',
        'University of New South Wales',
        'University of Western Australia',
        'University of Adelaide'
      ],
      popularCourses: [
        'Business Administration',
        'Engineering',
        'Computer Science',
        'Medicine',
        'Law',
        'Education',
        'Arts & Humanities',
        'Sciences'
      ]
    },
    costs: {
      tuition: {
        undergraduate: 'AUD $20,000 - $45,000 per year',
        postgraduate: 'AUD $22,000 - $50,000 per year',
        phd: 'AUD $20,000 - $42,000 per year'
      },
      living: {
        accommodation: 'AUD $1,200 - $2,500 per month',
        food: 'AUD $400 - $800 per month',
        transport: 'AUD $100 - $200 per month',
        utilities: 'AUD $150 - $300 per month',
        total: 'AUD $1,850 - $3,800 per month'
      }
    },
    workOpportunities: {
      duringStudy: 'Up to 40 hours per fortnight',
      afterGraduation: 'Post-Study Work Visa (2-4 years)',
      popularJobs: [
        'Software Developer',
        'Accountant',
        'Engineer',
        'Teacher',
        'Healthcare Professional',
        'Marketing Specialist'
      ],
      averageSalary: 'AUD $50,000 - $80,000 per year'
    }
  }
}

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

      {/* Country Details Modal */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const country = countries.find(c => c.id === selectedCountry)
                const details = countryDetails[selectedCountry as keyof typeof countryDetails]
                
                if (!country || !details) return null

                return (
                  <div className="h-full overflow-y-auto">
                    {/* Modal Header */}
                    <div className={`relative bg-gradient-to-r ${country.bgGradient} p-6 text-white`}>
                      <button
                        onClick={() => setSelectedCountry(null)}
                        className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <Image
                            src={country.flag}
                            alt={country.name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold">{country.name}</h2>
                          <p className="text-white/90">{country.continent}</p>
                        </div>
                      </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 space-y-8">
                      {/* Overview Section */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <Globe className="w-6 h-6 mr-2 text-red-600" />
                          Country Overview
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Capital:</span>
                              <span className="font-semibold">{details.overview.capital}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Population:</span>
                              <span className="font-semibold">{details.overview.population}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Currency:</span>
                              <span className="font-semibold">{details.overview.currency}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Language:</span>
                              <span className="font-semibold">{details.overview.language}</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Time Zone:</span>
                              <span className="font-semibold">{details.overview.timeZone}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Climate:</span>
                              <span className="font-semibold">{details.overview.climate}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">Why Choose {country.name}?</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {details.overview.whyChoose.map((reason, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-gray-700">{reason}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Student Visa Section */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <GraduationCap className="w-6 h-6 mr-2 text-red-600" />
                          Student Visa Information
                        </h3>
                        <div className="bg-blue-50 rounded-lg p-4 mb-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center">
                              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                              <div className="text-sm text-gray-600">Processing Time</div>
                              <div className="font-bold text-blue-600">{details.studentVisa.processingTime}</div>
                            </div>
                            <div className="text-center">
                              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                              <div className="text-sm text-gray-600">Visa Fee</div>
                              <div className="font-bold text-green-600">{details.studentVisa.fees}</div>
                            </div>
                            <div className="text-center">
                              <Briefcase className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                              <div className="text-sm text-gray-600">Work Rights</div>
                              <div className="font-bold text-purple-600 text-xs">{details.studentVisa.workRights}</div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Visa Types</h4>
                            <ul className="space-y-2">
                              {details.studentVisa.types.map((type, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                                  <span className="text-gray-700">{type}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Basic Requirements</h4>
                            <ul className="space-y-2">
                              {details.studentVisa.requirements.map((req, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                                  <span className="text-gray-700">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Documents Section */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <FileText className="w-6 h-6 mr-2 text-red-600" />
                          Required Documents
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="text-lg font-semibold text-green-800 mb-3">For Admission</h4>
                            <ul className="space-y-2">
                              {details.documents.admission.map((doc, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{doc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="text-lg font-semibold text-blue-800 mb-3">For Visa Application</h4>
                            <ul className="space-y-2">
                              {details.documents.visa.slice(0, 8).map((doc, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{doc}</span>
                                </li>
                              ))}
                              <li className="text-blue-600 text-sm font-semibold">
                                +{details.documents.visa.length - 8} more documents...
                              </li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4">
                            <h4 className="text-lg font-semibold text-purple-800 mb-3">Forms (We Fill)</h4>
                            <ul className="space-y-2">
                              {details.documents.forms.map((form, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{form}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Universities & Courses */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <GraduationCap className="w-6 h-6 mr-2 text-red-600" />
                          Top Universities & Courses
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Top Universities</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {details.universities.topUniversities.map((uni, index) => (
                                <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                  <span className="text-gray-700">{uni}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Popular Courses</h4>
                            <div className="flex flex-wrap gap-2">
                              {details.universities.popularCourses.map((course, index) => (
                                <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Costs & Work Opportunities */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <DollarSign className="w-5 h-5 mr-2 text-red-600" />
                            Cost Breakdown
                          </h3>
                          <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-800 mb-2">Tuition Fees (Annual)</h4>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>Undergraduate:</span>
                                  <span className="font-semibold">{details.costs.tuition.undergraduate}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Postgraduate:</span>
                                  <span className="font-semibold">{details.costs.tuition.postgraduate}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>PhD:</span>
                                  <span className="font-semibold">{details.costs.tuition.phd}</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-800 mb-2">Living Costs (Monthly)</h4>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>Accommodation:</span>
                                  <span className="font-semibold">{details.costs.living.accommodation}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Food:</span>
                                  <span className="font-semibold">{details.costs.living.food}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Transport:</span>
                                  <span className="font-semibold">{details.costs.living.transport}</span>
                                </div>
                                <div className="flex justify-between border-t pt-1 mt-2">
                                  <span className="font-semibold">Total:</span>
                                  <span className="font-bold text-red-600">{details.costs.living.total}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <Briefcase className="w-5 h-5 mr-2 text-red-600" />
                            Work Opportunities
                          </h3>
                          <div className="space-y-4">
                            <div className="bg-green-50 rounded-lg p-4">
                              <h4 className="font-semibold text-green-800 mb-2">During Study</h4>
                              <p className="text-sm text-gray-700">{details.workOpportunities.duringStudy}</p>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4">
                              <h4 className="font-semibold text-blue-800 mb-2">After Graduation</h4>
                              <p className="text-sm text-gray-700">{details.workOpportunities.afterGraduation}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-800 mb-2">Popular Jobs</h4>
                              <div className="flex flex-wrap gap-1">
                                {details.workOpportunities.popularJobs.map((job, index) => (
                                  <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                                    {job}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-2 text-sm">
                                <span className="text-gray-600">Average Salary: </span>
                                <span className="font-semibold text-green-600">{details.workOpportunities.averageSalary}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Section */}
                      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Apply for {country.name}?</h3>
                        <p className="text-white/90 mb-6">
                          Let our expert consultants guide you through the entire process
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                          <a
                            href="https://wa.me/0182999222?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20studying%20in%20Australia."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                          >
                            WhatsApp Us
                          </a>
                          <a
                            href="/contact"
                            className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
                          >
                            Book Consultation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default CountriesPage
