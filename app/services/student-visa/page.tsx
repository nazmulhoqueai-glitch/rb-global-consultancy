'use client'

import React, { useState } from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Clock, DollarSign, CheckCircle, MapPin, Users, TrendingUp, ArrowRight, X, FileText, GraduationCap, Briefcase, Camera, Home, Phone, Mail, Calendar } from 'lucide-react'

// Filtered countries for Student Visa (only the 8 specified countries)
const studentVisaCountries = [
  {
    id: 1,
    name: 'Malaysia',
    flag: '/images/countries/Malaysia.jpg',
    image: '/images/countries/Malaysia.jpg',
    continent: 'Asia',
    visaTypes: ['Student Visa', 'Work Visa', 'Business Visa', 'Tourist Visa'],
    processingTime: '4-6 weeks',
    universities: 50,
    successRate: 95,
    popularCities: ['Kuala Lumpur', 'Penang', 'Johor Bahru', 'Kuching'],
    description: 'Affordable education, multicultural society, and gateway to Southeast Asia.',
    requirements: ['Valid Passport', 'Academic Certificates', 'IELTS Certificate', 'Medical Report'],
    bgGradient: 'from-red-600 via-white to-blue-600'
  },
  {
    id: 2,
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
    id: 3,
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
    name: 'Denmark',
    flag: '/images/countries/Denmark.jpg',
    image: '/images/countries/Denmark.jpg',
    continent: 'Europe',
    visaTypes: ['Student Visa', 'Work Visa', 'Family Reunification Visa'],
    processingTime: '2-3 months',
    universities: 20,
    successRate: 89,
    popularCities: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg'],
    description: 'High-quality education system, no tuition fees for EU students, and excellent work-life balance.',
    requirements: ['Valid Passport', 'Admission Letter', 'Financial Proof', 'Health Insurance'],
    bgGradient: 'from-red-600 via-white to-red-600'
  },
  {
    id: 6,
    name: 'China',
    flag: '/images/countries/China.jpg',
    image: '/images/countries/China.jpg',
    continent: 'Asia',
    visaTypes: ['Student Visa (X1)', 'Student Visa (X2)', 'Work Visa', 'Business Visa'],
    processingTime: '7-15 working days',
    universities: 200,
    successRate: 92,
    popularCities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'],
    description: 'Rapidly growing economy, world-class universities, and rich cultural heritage.',
    requirements: ['Valid Passport', 'Admission Notice', 'JW201/JW202 Form', 'Financial Proof'],
    bgGradient: 'from-red-600 via-yellow-400 to-red-600'
  },
  {
    id: 7,
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
    id: 8,
    name: 'Malta',
    flag: '/images/countries/Malta.jpg',
    image: '/images/countries/Malta.jpg',
    continent: 'Europe',
    visaTypes: ['Student Visa', 'Work Visa', 'Business Visa', 'Tourist Visa'],
    processingTime: '20 days',
    universities: 8,
    successRate: 88,
    popularCities: ['Valletta', 'Sliema', 'St. Julian\'s', 'Mdina'],
    description: 'EU member state, English-speaking country, and gateway to Europe.',
    requirements: ['Valid Passport', 'MOI Certificate', 'Financial Proof', 'Health Insurance'],
    bgGradient: 'from-red-600 via-white to-red-600'
  }
]

const continents = ['All', 'Asia', 'Europe', 'North America', 'Oceania']

// Detailed country information (copied from Countries page)
const countryDetails = {
  1: { // Malaysia
    overview: {
      capital: 'Kuala Lumpur',
      population: '33.9 million',
      currency: 'Malaysian Ringgit (MYR)',
      language: 'Malay, English',
      timeZone: 'UTC+8',
      climate: 'Tropical',
      majorCities: ['Kuala Lumpur', 'Penang', 'Johor Bahru', 'Kuching', 'Kota Kinabalu'],
      whyChoose: [
        'Affordable education',
        'Multicultural society',
        'Gateway to Southeast Asia',
        'English-speaking country',
        'Safe and peaceful',
        'Rich cultural heritage'
      ]
    },
    studentVisa: {
      types: ['Student Visa', 'Work Visa', 'Business Visa', 'Tourist Visa'],
      requirements: [
        'Valid passport (minimum 18 months validity)',
        'Academic certificates and transcripts',
        'Passport-size photos (white background)',
        'IELTS/English certificate (if required)',
        'Application form (filled & signed)',
        'Medical declaration form',
        'EMGS processing fee'
      ],
      processingTime: '4-6 weeks',
      fees: 'EMGS Processing Fee (paid by university)',
      workRights: 'Limited work rights during study'
    },
    documents: {
      admission: [
        'Valid Passport (minimum 18 months validity)',
        'Academic Certificates & Transcripts (SSC, HSC, Bachelor, etc.)',
        'Passport-size Photos (white background)',
        'IELTS/English Certificate (if required)',
        'Application Form (filled & signed)',
        'Registration or admission fee'
      ],
      visa: [
        'Offer Letter from university',
        'Passport Copy',
        'Academic Certificates',
        'Medical Declaration Form',
        'EMGS Processing Fee (paid by university)',
        'Visa Approval Letter (VAL)',
        'Medical Report',
        'Passport-size Photos',
        'Travel Insurance',
        'Flight Ticket',
        'Accommodation Confirmation',
        'Financial Proof',
        'University Registration Documents'
      ],
      forms: [
        'University Application Form',
        'Medical Declaration Form',
        'EMGS Application Form',
        'Student Pass Application',
        'i-Kad Application Form'
      ]
    },
    universities: {
      topUniversities: [
        'Universiti Teknologi Malaysia (UTM)',
        'Asia Pacific University (APU)',
        'Multimedia University (MMU)',
        'INTI International University',
        'SEGi University',
        'Limkokwing University',
        'Taylor\'s University',
        'University of Malaya',
        'Universiti Putra Malaysia',
        'Universiti Kebangsaan Malaysia'
      ],
      popularCourses: [
        'Engineering & Technology',
        'Business Administration',
        'Computer Science',
        'Tourism & Hospitality',
        'Medicine',
        'Arts & Design',
        'Languages',
        'Social Sciences'
      ]
    },
    costs: {
      tuition: {
        undergraduate: '15,000-35,000 MYR per year',
        postgraduate: '20,000-45,000 MYR per year',
        phd: '25,000-50,000 MYR per year'
      },
      living: {
        accommodation: '800-2,000 MYR per month',
        food: '600-1,200 MYR per month',
        transport: '200-400 MYR per month',
        utilities: '150-300 MYR per month',
        total: '1,750-3,900 MYR per month'
      }
    },
    workOpportunities: {
      duringStudy: 'Limited work rights during study',
      afterGraduation: 'Work visa available after graduation',
      popularJobs: [
        'Software Developer',
        'Business Analyst',
        'Engineer',
        'Tourism Professional',
        'Teacher',
        'Healthcare Professional'
      ],
      averageSalary: '3,000-8,000 MYR per month'
    },
    process: {
      steps: [
        'Start Your Journey – University Application',
        'Receive Offer Letter',
        'Apply for Visa Approval Letter (VAL)',
        'Pre-Arrival Medical Check-Up',
        'Visa Stamping & Flight Preparation',
        'Arrival in Malaysia'
      ],
      details: [
        'Choose university and prepare documents (passport, certificates, photos, IELTS)',
        'Receive offer letter and pay registration/admission fee',
        'Apply for VAL through EMGS with offer letter, passport, certificates, medical form',
        'Complete medical check-up at EMGS-approved center',
        'Apply for entry visa at Malaysian High Commission and prepare travel documents',
        'Arrive in Malaysia, register at university, complete post-arrival medical check-up, submit passport for student pass sticker, collect i-Kad'
      ]
    },
    checklist: {
      summary: [
        'University Application: Passport, Certificates, Photos',
        'Offer Letter: Admission/Registration Fee',
        'VAL Application (via EMGS): Offer Letter, Passport, Medical Form',
        'Pre-arrival Medical: EMGS Approved Clinic Report',
        'Visa Stamping: VAL, Passport, Offer Letter',
        'Arrival & Student Pass: Medical, Registration, i-Kad'
      ]
    },
    specialNotes: [
      'Keep both hard copies and soft copies (PDF) of every document',
      'Track visa progress at https://educationmalaysia.gov.my',
      'EMGS processing fee is paid by your university',
      'Post-arrival medical check-up must be done within 7 days',
      'Student Pass sticker is required for long-term stay',
      'i-Kad serves as your student ID in Malaysia',
      'Shortcut: Apply → Offer Letter → VAL → Entry Visa → Fly → Medical → Student Passport'
    ]
  },
  // Add other countries' details here (Australia, Canada, USA, Denmark, China, UK, Malta)
  // For brevity, I'll add a few key ones
  2: { // Australia
    overview: {
      capital: 'Canberra',
      population: '25.7 million',
      currency: 'Australian Dollar (AUD)',
      language: 'English',
      timeZone: 'UTC+8 to UTC+10',
      climate: 'Diverse',
      majorCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
      whyChoose: [
        'World-class education',
        'Diverse culture',
        'Excellent quality of life',
        'Strong economy',
        'Safe environment',
        'Post-study work opportunities'
      ]
    },
    studentVisa: {
      types: ['Student Visa', 'Work Visa', 'Tourist Visa', 'Business Visa'],
      requirements: [
        'Valid passport',
        'Financial proof',
        'Health insurance',
        'English proficiency test',
        'Academic documents',
        'Medical examination'
      ],
      processingTime: '4-6 weeks',
      fees: 'AUD $650',
      workRights: '20 hours per week during study, full-time during holidays'
    }
  }
  // Add more countries as needed...
}

const StudentVisaPage = () => {
  const [selectedContinent, setSelectedContinent] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null)

  const filteredCountries = studentVisaCountries.filter(country => {
    const matchesContinent = selectedContinent === 'All' || country.continent === selectedContinent
    return matchesContinent
  })

  return (
    <>
      <TopNav />
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative py-28 sm:py-32 md:py-40 lg:py-48 bg-gray-900">
        <div className="absolute inset-0 bg-[url('/images/student-visa-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Student Visa Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Your pathway to international education starts here. We help students achieve their dreams of studying abroad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Choose Our Student Visa Services?</h2>
            <p className="text-gray-600 mb-8">
              We understand that pursuing education abroad is a significant decision. Our experienced team provides comprehensive support throughout your student visa application process, ensuring a smooth transition to your chosen educational institution.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <GraduationCap className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">University Selection</h3>
                <p className="text-gray-600">Expert guidance in choosing the right university and program aligned with your goals.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Clock className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Timely Processing</h3>
                <p className="text-gray-600">Efficient handling of your application to meet university and visa deadlines.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <FileText className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Document Assistance</h3>
                <p className="text-gray-600">Complete support in preparing and verifying all required documentation.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Globe className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                <p className="text-gray-600">Strong relationships with universities worldwide for better admission chances.</p>
              </div>
            </div>

            {/* Process Steps */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Student Visa Process</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">Free consultation to understand your requirements and educational goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">University Application</h3>
                  <p className="text-gray-600">Assistance in selecting and applying to suitable universities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visa Application</h3>
                  <p className="text-gray-600">Complete support in preparing and submitting your student visa application.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pre-Departure Support</h3>
                  <p className="text-gray-600">Guidance on travel arrangements and settling in your new country.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Our Success in Numbers</h2>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">5000+</div>
                <div className="text-gray-300 text-sm sm:text-base">Students Helped</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300 text-sm sm:text-base">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">8</div>
                <div className="text-gray-300 text-sm sm:text-base">Countries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-300 text-sm sm:text-base">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-2 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Continent Filter */}
            <div className="flex overflow-x-auto gap-2 sm:gap-3 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center">
              {continents.map((continent) => (
                <button
                  key={continent}
                  onClick={() => setSelectedContinent(continent)}
                  className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all text-xs sm:text-base whitespace-nowrap flex-shrink-0 ${
                    selectedContinent === continent
                      ? 'bg-red-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {continent}
                </button>
              ))}
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
                key={selectedContinent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filteredCountries.map((country) => (
                  <motion.div
                    key={country.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedCountry(country.id)}
                  >
                    {/* Country Header with Flag */}
                    <div className={`relative h-48 bg-gradient-to-r ${country.bgGradient} p-6 flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-white shadow-xl">
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.error('Image failed to load:', country.flag);
                              e.currentTarget.src = '/images/countries/australia.png'; // Fallback
                            }}
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
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="w-4 h-4 text-red-600 mr-1" />
                            <span className="text-xs text-gray-500">Univ</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-800">{country.universities}</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                            <span className="text-xs text-gray-500">Success</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-800">{country.successRate}%</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Clock className="w-4 h-4 text-blue-600 mr-1" />
                            <span className="text-xs text-gray-500">Time</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-800">{country.processingTime}</div>
                        </div>
                      </div>

                      {/* Visa Types */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Visa Types Available:</h4>
                        <div className="flex flex-wrap gap-1">
                          {country.visaTypes.slice(0, 3).map((type, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              {type}
                            </span>
                          ))}
                          {country.visaTypes.length > 3 && (
                            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">
                              +{country.visaTypes.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Popular Cities */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Cities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {country.popularCities.slice(0, 3).map((city, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                              {city}
                            </span>
                          ))}
                          {country.popularCities.length > 3 && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                              +{country.popularCities.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* View Details Button */}
                      <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
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
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const country = studentVisaCountries.find(c => c.id === selectedCountry)
                const details = countryDetails[selectedCountry as keyof typeof countryDetails]
                
                if (!country) return null

                return (
                  <>
                    {/* Modal Header */}
                    <div className={`relative bg-gradient-to-r ${country.bgGradient} p-6 text-white flex-shrink-0`}>
                      <button
                        onClick={() => setSelectedCountry(null)}
                        className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.error('Modal image failed to load:', country.flag);
                              e.currentTarget.src = '/images/countries/australia.png'; // Fallback
                            }}
                          />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold">{country.name}</h2>
                          <p className="text-white/90">{country.continent}</p>
                        </div>
                      </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 space-y-8 overflow-y-auto flex-1">
                      {/* Overview */}
                      {details?.overview && (
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
                          
                          {/* Why Choose */}
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Why Choose {country.name}?</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {details.overview.whyChoose.map((reason, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{reason}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Student Visa Information */}
                      {details?.studentVisa && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <GraduationCap className="w-6 h-6 mr-2 text-red-600" />
                            Student Visa Information
                          </h3>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Processing Time:</span>
                                  <span className="font-semibold">{details.studentVisa.processingTime}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Fees:</span>
                                  <span className="font-semibold">{details.studentVisa.fees}</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Work Rights:</span>
                                  <span className="font-semibold">{details.studentVisa.workRights}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* CTA Section */}
                      <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-6 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Apply for Student Visa?</h3>
                        <p className="text-white/90 mb-6">Get expert guidance for your {country.name} student visa application.</p>
                        <a
                          href={`https://wa.me/0182999222?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20studying%20in%20${country.name}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                        >
                          WhatsApp Us
                        </a>
                      </div>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h3>
              <p className="text-gray-600 mb-6 text-lg">Contact us today for a free consultation and take the first step towards your international education.</p>
              <a
                href="https://wa.me/0182999222?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20student%20visa%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors inline-flex items-center text-lg font-semibold"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default StudentVisaPage