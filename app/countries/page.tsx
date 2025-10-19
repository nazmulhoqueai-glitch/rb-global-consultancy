'use client'

import React, { useState } from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Clock, DollarSign, CheckCircle, MapPin, Users, TrendingUp, ArrowRight, X, FileText, GraduationCap, Briefcase, Camera, Home, Phone, Mail, Calendar } from 'lucide-react'

const countries = [
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
  },
  {
    id: 14,
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
        accommodation: '300-1,000 MYR per month',
        food: '200-800 MYR per month',
        transport: '200-400 MYR per month',
        total: '1,000-2,000 MYR per month'
      }
    },
    workOpportunities: {
      duringStudy: 'Limited work rights during study',
      afterGraduation: 'Work visa available after graduation(On Progress)',
      popularJobs: [
        'Software Developer',
        'Business Analyst',
        'Engineer',
        'Tourism Professional',
        'Teacher',
        'Healthcare Professional'
      ],
      averageSalary: '4,000+ MYR per month'
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
  2: { // Australia
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
  },
  4: { // Denmark
    overview: {
      capital: 'Copenhagen',
      population: '5.8 million',
      currency: 'Danish Krone (DKK)',
      language: 'Danish, English',
      timeZone: 'UTC+1 (CET)',
      climate: 'Temperate oceanic',
      majorCities: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg'],
      whyChoose: [
        'High-quality education system',
        'No tuition fees for EU students',
        'Strong economy and job market',
        'Excellent work-life balance',
        'Safe and peaceful country',
        'English-taught programs available'
      ]
    },
    studentVisa: {
      types: ['Student Visa (Residence Permit)', 'Family Reunification Visa', 'Work Permit'],
      requirements: [
        'Valid passport',
        'Admission letter from Danish university',
        'Proof of financial means',
        'Health insurance',
        'Accommodation proof',
        'IELTS/TOEFL (for non-UK degree holders)',
        'Academic documents',
        'CV and Statement of Purpose'
      ],
      processingTime: '2-3 months',
      fees: '2200 DKK (Immigration) + 1700 DKK (Embassy) + 1680 BDT (VFS)',
      workRights: '20 hours per week during study, full-time during holidays'
    },
    documents: {
      admission: [
        'Passport (updated)',
        'Old Passport (if any)',
        'Academic Documents: Transcript/Certificate',
        'Personal Statement (SOP)',
        'Recommendation Letter (LOR)',
        'CV (formal)',
        'Extra-Curricular Activities Documents (if any)',
        'Travel History (Seal Page with Departure and Arrival Date)',
        'Passport Size Photo (4 copies)',
        'IELTS Certificate (if required)'
      ],
      visa: [
        'Valid passport with sufficient validity',
        'Admission letter from Danish university',
        'Proof of financial means (if applicable)',
        'Health insurance documentation',
        'Accommodation proof in Denmark',
        'Academic transcripts and certificates',
        'Statement of Purpose (SOP)',
        'Recommendation letters',
        'CV/Resume',
        'Passport-sized photographs',
        'Travel history documentation',
        'Bank statements (for family applicants)',
        'Marriage certificate (if spouse applying)',
        'Birth certificates (if children applying)',
        'Medical examination results',
        'Police clearance certificate'
      ],
      forms: [
        'Residence permit application form',
        'Financial guarantee form',
        'Health insurance declaration',
        'Accommodation confirmation form',
        'Family information form (if applicable)'
      ]
    },
    universities: {
      topUniversities: [
        'University of Copenhagen',
        'Technical University of Denmark',
        'Aarhus University',
        'University of Southern Denmark',
        'Aalborg University',
        'Roskilde University',
        'IT University of Copenhagen',
        'Copenhagen Business School',
        'Royal Danish Academy',
        'Danish University of Pharmaceutical Science'
      ],
      popularCourses: [
        'Business Administration',
        'Engineering & Technology',
        'Computer Science',
        'Medicine & Health Sciences',
        'Design & Architecture',
        'Environmental Sciences',
        'Social Sciences',
        'Arts & Humanities'
      ]
    },
    costs: {
      tuition: {
        undergraduate: 'Free for EU students, 6,000-16,000 EUR/year for non-EU',
        postgraduate: 'Free for EU students, 8,000-18,000 EUR/year for non-EU',
        phd: 'Free for EU students, 6,000-15,000 EUR/year for non-EU'
      },
      living: {
        accommodation: '3,000-6,000 DKK per month',
        food: '2,000-3,000 DKK per month',
        transport: '500-800 DKK per month',
        utilities: '800-1,200 DKK per month',
        total: '6,300-11,000 DKK per month'
      }
    },
    workOpportunities: {
      duringStudy: '20 hours per week during study',
      afterGraduation: '6-month job search visa, then work permit',
      popularJobs: [
        'Software Developer',
        'Business Analyst',
        'Engineer',
        'Designer',
        'Researcher',
        'Consultant'
      ],
      averageSalary: '25,000-45,000 DKK per month'
    },
    ielts: {
      bachelor: '6.0 (No band less than 5.5)',
      master: '6.5 (No band less than 6.0)',
      note: 'IELTS required only for non-UK degree holders'
    },
    intakes: ['February', 'September'],
    specialNotes: [
      'No bank statement required for single applicants',
      'Study gap acceptable',
      'No hidden charges',
      'Family applicants need 13 Lakh BDT bank statement for 2 months',
      'Processing time: 2-3 months minimum'
    ]
  },
  3: { // Canada
    overview: {
      capital: 'Ottawa',
      population: '38.2 million',
      currency: 'Canadian Dollar (CAD)',
      language: 'English, French',
      timeZone: 'UTC-3.5 to UTC-8',
      climate: 'Continental, Arctic',
      majorCities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Edmonton'],
      whyChoose: [
        'World-class education system',
        'Multicultural society',
        'Post-graduation work permit',
        'High quality of life',
        'Safe and peaceful country',
        'Strong economy and job market'
      ]
    },
    studentVisa: {
      types: ['Study Permit', 'Post-Graduation Work Permit', 'Visitor Visa'],
      requirements: [
        'Valid passport',
        'Letter of Acceptance from Canadian institution',
        'Proof of financial support',
        'Medical examination',
        'Police clearance certificate',
        'English/French proficiency test',
        'Statement of Purpose',
        'Academic documents'
      ],
      processingTime: '8-12 weeks',
      fees: '150 CAD (Application) + 135 CAD (Embassy) + 85 CAD (Biometric)',
      workRights: '20 hours per week during study, full-time during holidays'
    },
    documents: {
      admission: [
        'Passport copy (previous & current data) - Bio-data page',
        'Birth Certificate / National ID card',
        'All academic certificates & transcript along with backlogs',
        'Internship Certificate & Medium of English Certificate (if any)',
        'Testimonial or Teacher\'s Recommendation Letter (if any)',
        'IELTS / PTE / TOEFL / GRE / GMAT / SAT / DUOLINGO result',
        'Study plan',
        'Updated Resume / CV (if applicable for PG Students)',
        'Job experience certificate (if applicable)',
        'Salary pay slip last 6 months or salary account statement',
        'Current Studentship letter & Semester\'s Transcript (where required)',
        'Sponsor\'s Original Bank Solvency Certificate & Statement (Main Fund)'
      ],
      visa: [
        'Valid passport with sufficient validity',
        'Letter of Acceptance from Canadian institution',
        'Proof of financial support (bank statements, sponsorship letters)',
        'Medical examination results',
        'Police clearance certificate (home & abroad)',
        'English/French proficiency test results',
        'Academic transcripts and certificates',
        'Statement of Purpose (SOP)',
        'Recommendation letters',
        'CV/Resume',
        'Passport-sized photographs',
        'Travel history documentation',
        'Accommodation proof in Canada',
        'Health insurance documentation',
        'Family information forms'
      ],
      forms: [
        'Study permit application form',
        'Financial guarantee form',
        'Medical examination form',
        'Police clearance application',
        'Family information form (if applicable)'
      ]
    },
    universities: {
      topUniversities: [
        'University of Toronto',
        'University of British Columbia',
        'McGill University',
        'University of Alberta',
        'McMaster University',
        'University of Waterloo',
        'Queen\'s University',
        'University of Calgary',
        'Simon Fraser University',
        'University of Ottawa'
      ],
      popularCourses: [
        'Business Administration',
        'Engineering & Technology',
        'Computer Science',
        'Medicine & Health Sciences',
        'Environmental Sciences',
        'Social Sciences',
        'Arts & Humanities',
        'Natural Sciences'
      ]
    },
    costs: {
      tuition: {
        undergraduate: '15,000-35,000 CAD per year',
        postgraduate: '18,000-40,000 CAD per year',
        phd: '8,000-20,000 CAD per year'
      },
      living: {
        accommodation: '800-1,500 CAD per month',
        food: '400-600 CAD per month',
        transport: '100-200 CAD per month',
        utilities: '150-300 CAD per month',
        total: '1,450-2,600 CAD per month'
      }
    },
    workOpportunities: {
      duringStudy: '20 hours per week during study',
      afterGraduation: 'Post-Graduation Work Permit (1-3 years)',
      popularJobs: [
        'Software Developer',
        'Business Analyst',
        'Engineer',
        'Healthcare Professional',
        'Teacher',
        'Consultant'
      ],
      averageSalary: '45,000-75,000 CAD per year'
    },
    moi: {
      title: 'Medium of Instruction (MOI) Option',
      requirements: [
        'SSC & HSC must have A Grade in English',
        'University ranking must be in top 15',
        'H.S.C from 2014/15/17 but no Bachelor certificate needs to be arranged'
      ],
      note: 'If IELTS/PTE/TOEFL/GRE/GMAT/SAT/DUOLINGO not available, MOI can be used'
    },
    payment: {
      application: '150 CAD (Canadian Dollar)',
      embassy: '135 CAD',
      biometric: '85 CAD',
      commitment: 'BDT 5,000/- (Non-refundable, no service charge after visa)',
      university: 'Student must pay partial payment according to university'
    },
    specialNotes: [
      'Non-refundable Application Fee USD 100 (approx.) required to pay I-20',
      'SEVIS fee US$ 350 required to pay must',
      'Police Clearance Certificate (Home & Abroad) need to submit during visa application',
      'MOI option available if English test scores not available',
      'Post-graduation work permit available for 1-3 years'
    ]
  },
  12: { // China
    overview: {
      capital: 'Beijing',
      population: '1.4 billion',
      currency: 'Chinese Yuan (CNY)',
      language: 'Mandarin Chinese',
      timeZone: 'UTC+8',
      climate: 'Continental, subtropical',
      majorCities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu'],
      whyChoose: [
        'Rapidly growing economy',
        'World-class universities',
        'Rich cultural heritage',
        'Affordable cost of living',
        'Strong job market',
        'Modern infrastructure'
      ]
    },
    studentVisa: {
      types: ['Student Visa (X1)', 'Student Visa (X2)', 'Work Visa', 'Business Visa'],
      requirements: [
        'Valid passport (minimum 6 months validity)',
        'Admission Notice from Chinese university',
        'JW201/JW202 Form (original)',
        'Financial proof (bank statement, sponsor affidavit)',
        'Academic certificates and transcripts',
        'Police clearance certificate',
        'CV/Statement of Purpose',
        'Passport-sized photos'
      ],
      processingTime: '7-15 working days',
      fees: 'Varies by visa type and country',
      workRights: 'Limited work rights during study, full-time after graduation'
    },
    documents: {
      admission: [
        'Valid Passport (minimum 6 months validity, blank visa pages)',
        'Passport-sized photos (recent)',
        'Visa application form (completed online)',
        'Original Admission Notice',
        'JW201/JW202 Form (original)',
        'Academic certificates and transcripts (translated & notarized)',
        'Financial proof (bank statement, sponsor affidavit, scholarship letter)',
        'Police clearance certificate (if requested)',
        'CV / Statement of Purpose',
        'Birth / Marriage certificates (if applicable)'
      ],
      visa: [
        'Valid passport with minimum 6 months validity',
        'Original Admission Notice from Chinese university',
        'JW201/JW202 Form (JW201 = government scholarship, JW202 = self-funded)',
        'Academic certificates and transcripts (translated & notarized)',
        'Financial proof (bank statement, sponsor affidavit)',
        'Police clearance certificate',
        'CV/Statement of Purpose',
        'Passport-sized photographs',
        'Visa application form (completed online)',
        'Health examination results (for X1 visa)',
        'Birth/Marriage certificates (if applicable)',
        'Scholarship letter (if applicable)',
        'Sponsor affidavit',
        'Bank statements',
        'Travel history documentation'
      ],
      forms: [
        'Visa application form (completed online)',
        'JW201/JW202 Form',
        'Financial guarantee form',
        'Health examination form (for X1 visa)',
        'Residence permit application (for X1 visa)'
      ]
    },
    universities: {
      topUniversities: [
        'Tsinghua University',
        'Peking University',
        'Fudan University',
        'Shanghai Jiao Tong University',
        'Zhejiang University',
        'University of Science and Technology of China',
        'Nanjing University',
        'Sun Yat-sen University',
        'Harbin Institute of Technology',
        'Xi\'an Jiaotong University'
      ],
      popularCourses: [
        'Engineering & Technology',
        'Business Administration',
        'Computer Science',
        'Medicine',
        'Chinese Language',
        'International Relations',
        'Economics',
        'Arts & Design'
      ]
    },
    costs: {
      tuition: {
        undergraduate: '15,000-35,000 CNY per year',
        postgraduate: '20,000-40,000 CNY per year',
        phd: '25,000-45,000 CNY per year'
      },
      living: {
        accommodation: '2,000-5,000 CNY per month',
        food: '1,500-3,000 CNY per month',
        transport: '300-800 CNY per month',
        utilities: '200-500 CNY per month',
        total: '4,000-9,300 CNY per month'
      }
    },
    workOpportunities: {
      duringStudy: 'Limited work rights during study',
      afterGraduation: 'Work visa available after graduation',
      popularJobs: [
        'Software Developer',
        'Business Analyst',
        'Engineer',
        'Teacher',
        'Translator',
        'Marketing Specialist'
      ],
      averageSalary: '8,000-20,000 CNY per month'
    },
    visaTypes: {
      x1: {
        description: 'Long-term student visa (more than 180 days)',
        validity: '30 days on arrival, then convert to Residence Permit',
        requirements: 'Must apply for Residence Permit within 30 days of arrival',
        healthCheck: 'Required - Foreigner Physical Examination Record'
      },
      x2: {
        description: 'Short-term student visa (up to 180 days)',
        validity: 'Up to 180 days',
        requirements: 'No residence permit required',
        healthCheck: 'Not required'
      }
    },
    process: {
      steps: [
        'Apply to a Chinese University & Receive Admission',
        'Fill in the Visa Application Form Online & Book Appointment',
        'Submit at Visa Application Centre / Chinese Embassy',
        'Wait for Processing & Collect Visa',
        'Arrival in China & Registration',
        'Health Check (for X1 Visa Holders)'
      ],
      details: [
        'University issues Admission Notice and JW201/JW202 Form',
        'Complete online form and book appointment at CVASC',
        'Submit documents and provide biometrics',
        'Processing takes 7-15 working days',
        'Register with university and report to PSB within 30 days',
        'X1 holders must undergo medical check at designated hospital'
      ]
    },
    specialNotes: [
      'Without JW201/JW202 & Admission Notice, you cannot apply for student visa',
      'Documents may need English or Chinese translation & notarization',
      'X1 Visa holders must apply for Residence Permit within 30 days of arrival',
      'Always confirm requirements with university and Chinese Embassy',
      'Rules may change - check with official sources',
      'Health check required for X1 visa holders at designated hospital'
    ]
  },
  13: { // Malta
    overview: {
      capital: 'Valletta',
      population: '520,000',
      currency: 'Euro (EUR)',
      language: 'Maltese, English',
      timeZone: 'UTC+1 (CET)',
      climate: 'Mediterranean',
      majorCities: ['Valletta', 'Sliema', 'St. Julian\'s', 'Mdina', 'Rabat'],
      whyChoose: [
        'EU member state',
        'English-speaking country',
        'Gateway to Europe',
        'Affordable education',
        'Safe and peaceful',
        'Rich cultural heritage'
      ]
    },
    studentVisa: {
      types: ['Student Visa', 'Work Visa', 'Business Visa', 'Tourist Visa'],
      requirements: [
        'Valid passport',
        'MOI Certificate',
        'Financial proof',
        'Health insurance',
        'Accommodation confirmation',
        'Academic documents',
        'CV and Statement of Purpose',
        'Job experience letter'
      ],
      processingTime: '20 days',
      fees: 'CVU Fee: 21,000 BDT + Application: 19,000 BDT + VFS: 16,900 BDT',
      workRights: 'Limited work rights during study'
    },
    documents: {
      admission: [
        'NID (National ID)',
        'Passport',
        'MOI Certificate',
        'All certificates and transcripts',
        '3 Letters of Recommendation (LOR)',
        'CV',
        'Statement of Purpose (SOP)',
        'Job experience letter',
        'Financial affidavit',
        'Asset valuation',
        'Insurance documentation',
        'Profile ready and attestation',
        'TIN certificate',
        'Trade license',
        'Asset proof (house rent)',
        'Sponsor NID and photo'
      ],
      visa: [
        'Valid passport',
        'MOI Certificate',
        'All academic certificates and transcripts',
        '3 Letters of Recommendation',
        'CV and Statement of Purpose',
        'Job experience letter',
        'Financial affidavit with asset valuation',
        'Health insurance (10,000 BDT)',
        'Profile ready and attestation',
        'TIN certificate',
        'Trade license',
        'Asset proof (house rent)',
        'Sponsor NID and photo',
        'Accommodation confirmation',
        'Bank support documentation'
      ],
      forms: [
        'Student visa application form',
        'Financial affidavit',
        'Asset valuation form',
        'Insurance application',
        'Profile attestation form'
      ]
    },
    universities: {
      topUniversities: [
        'University of Malta',
        'Malta College of Arts, Science and Technology',
        'American University of Malta',
        'St. Martin\'s Institute of Higher Education',
        'Malta International Training Centre',
        'European Institute of Education',
        'Malta Business School',
        'Institute of Tourism Studies'
      ],
      popularCourses: [
        'Business Administration',
        'Tourism & Hospitality',
        'Information Technology',
        'Maritime Studies',
        'Languages',
        'Arts & Humanities',
        'Health Sciences',
        'Engineering'
      ]
    },
    costs: {
      tuition: {
        undergraduate: '6,500 EUR per year',
        postgraduate: '7,000-10,000 EUR per year',
        phd: '8,000-12,000 EUR per year'
      },
      living: {
        accommodation: '400-800 EUR per month',
        food: '300-500 EUR per month',
        transport: '50-100 EUR per month',
        utilities: '100-200 EUR per month',
        total: '850-1,600 EUR per month'
      }
    },
    workOpportunities: {
      duringStudy: 'Limited work rights during study',
      afterGraduation: 'Work visa available after graduation',
      popularJobs: [
        'Tourism & Hospitality',
        'IT Professional',
        'Business Analyst',
        'Maritime Officer',
        'Language Teacher',
        'Healthcare Professional'
      ],
      averageSalary: '1,200-2,500 EUR per month'
    },
    fees: {
      initial: {
        application: '19,000 BDT',
        vfs: '16,900 BDT',
        healthInsurance: '10,000 BDT',
        documentation: '5,000 BDT',
        accommodation: '1,100 EUR',
        tuition: '6,500 EUR',
        bankSupport: '60,000 BDT'
      },
      cvu: '21,000 BDT (Central Visa Unit Fee)',
      note: 'Plane fare and accommodation booking are excluded'
    },
    process: {
      steps: [
        'Collection of Documents',
        'Issue Offer + CVU Fee Payment',
        'VFS Appointment Document Preparation',
        'Interview Day',
        'Passport Delivery (20 days)'
      ],
      details: [
        'Collect docs (NID, Passport, MOI, certificates, 3 LOR, CV, SOP, job exp. letter) with application fees of 19,000 BDT',
        'Issue offer + CVU fee 21,000 BDT payment',
        'Prepare financial affidavit, insurance, profile attestation, TIN, trade license, asset proof, sponsor documents',
        'Attend interview at embassy/consulate',
        'Passport will be delivered within 20 days'
      ]
    },
    specialNotes: [
      'CVU (Central Visa Unit) Fee: 21,000 BDT must be paid',
      'Initial payment includes application, VFS, health insurance, and documentation fees',
      'Accommodation confirmation required (1,100 EUR)',
      'Bank support of 60,000 BDT required',
      'Processing time: 20 days for passport delivery',
      'EU member state - access to European job market',
      'English-speaking country - no language barrier'
    ]
  }
}

const CountriesPage = () => {
  const [selectedContinent, setSelectedContinent] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null)

  const filteredCountries = countries.filter(country => {
    const matchesContinent = selectedContinent === 'All' || country.continent === selectedContinent
    return matchesContinent
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
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const country = countries.find(c => c.id === selectedCountry)
                const details = countryDetails[selectedCountry as keyof typeof countryDetails]
                
                if (!country || !details) return null

                return (
                  <>
                    {/* Modal Header */}
                    <div className={`relative bg-gradient-to-r ${country.bgGradient} p-6 text-white flex-shrink-0`}>
                      <button
                        onClick={() => setSelectedCountry(null)}
                        className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
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

                      {/* IELTS Requirements (Denmark specific) */}
                      {'ielts' in details && details.ielts && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <FileText className="w-6 h-6 mr-2 text-red-600" />
                            IELTS Requirements
                          </h3>
                          <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="text-center">
                                <GraduationCap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                                <div className="text-sm text-gray-600">Bachelor's Degree</div>
                                <div className="font-bold text-yellow-600">{details.ielts.bachelor}</div>
                              </div>
                              <div className="text-center">
                                <GraduationCap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                                <div className="text-sm text-gray-600">Master's Degree</div>
                                <div className="font-bold text-yellow-600">{details.ielts.master}</div>
                              </div>
                            </div>
                            <div className="mt-3 text-center">
                              <p className="text-sm text-gray-700 font-semibold">{details.ielts.note}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Intakes (Denmark specific) */}
                      {'intakes' in details && details.intakes && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <Calendar className="w-6 h-6 mr-2 text-red-600" />
                            Intake Periods
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {details.intakes.map((intake, index) => (
                              <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
                                {intake}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

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

                      {/* MOI Option (Canada specific) */}
                      {'moi' in details && details.moi && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <FileText className="w-6 h-6 mr-2 text-red-600" />
                            {details.moi.title}
                          </h3>
                          <div className="bg-blue-50 rounded-lg p-4 mb-4">
                            <p className="text-blue-800 font-semibold mb-3">{details.moi.note}</p>
                            <h4 className="text-lg font-semibold text-blue-800 mb-3">Requirements:</h4>
                            <ul className="space-y-2">
                              {details.moi.requirements.map((req, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Payment Details (Canada specific) */}
                      {'payment' in details && details.payment && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <DollarSign className="w-6 h-6 mr-2 text-red-600" />
                            Payment Details
                          </h3>
                          <div className="bg-yellow-50 rounded-lg p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Application Fee:</span>
                                  <span className="font-semibold">{details.payment.application}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Embassy Fee:</span>
                                  <span className="font-semibold">{details.payment.embassy}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Biometric Fee:</span>
                                  <span className="font-semibold">{details.payment.biometric}</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Commitment Fee:</span>
                                  <span className="font-semibold">{details.payment.commitment}</span>
                                </div>
                                <div className="text-sm text-gray-600 mt-2">
                                  <p className="font-semibold">Note:</p>
                                  <p>{details.payment.university}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Fees Breakdown (Malta specific) */}
                      {'fees' in details && details.fees && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <DollarSign className="w-6 h-6 mr-2 text-red-600" />
                            Fees Breakdown
                          </h3>
                          <div className="bg-red-50 rounded-lg p-4 mb-4">
                            <h4 className="text-lg font-semibold text-red-800 mb-3">Initial Payment</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Application Fee:</span>
                                  <span className="font-semibold">{details.fees.initial.application}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">VFS Fee:</span>
                                  <span className="font-semibold">{details.fees.initial.vfs}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Health Insurance:</span>
                                  <span className="font-semibold">{details.fees.initial.healthInsurance}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Documentation:</span>
                                  <span className="font-semibold">{details.fees.initial.documentation}</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Accommodation:</span>
                                  <span className="font-semibold">{details.fees.initial.accommodation}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Tuition Fee:</span>
                                  <span className="font-semibold">{details.fees.initial.tuition}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Bank Support:</span>
                                  <span className="font-semibold">{details.fees.initial.bankSupport}</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 p-3 bg-white rounded border-l-4 border-red-600">
                              <div className="flex justify-between items-center">
                                <span className="font-semibold text-red-800">CVU Fee:</span>
                                <span className="font-bold text-red-600">{details.fees.cvu}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{details.fees.note}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Visa Types (China specific) */}
                      {'visaTypes' in details && details.visaTypes && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <FileText className="w-6 h-6 mr-2 text-red-600" />
                            Student Visa Types
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-red-50 rounded-lg p-4">
                              <h4 className="text-lg font-semibold text-red-800 mb-3">X1 Visa (Long-term)</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Description:</span>
                                  <span className="font-semibold">{details.visaTypes.x1.description}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Validity:</span>
                                  <span className="font-semibold">{details.visaTypes.x1.validity}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Health Check:</span>
                                  <span className="font-semibold">{details.visaTypes.x1.healthCheck}</span>
                                </div>
                                <div className="text-gray-700 mt-2">
                                  <p className="font-semibold">Requirements:</p>
                                  <p>{details.visaTypes.x1.requirements}</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4">
                              <h4 className="text-lg font-semibold text-blue-800 mb-3">X2 Visa (Short-term)</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Description:</span>
                                  <span className="font-semibold">{details.visaTypes.x2.description}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Validity:</span>
                                  <span className="font-semibold">{details.visaTypes.x2.validity}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Health Check:</span>
                                  <span className="font-semibold">{details.visaTypes.x2.healthCheck}</span>
                                </div>
                                <div className="text-gray-700 mt-2">
                                  <p className="font-semibold">Requirements:</p>
                                  <p>{details.visaTypes.x2.requirements}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Checklist Summary (Malaysia specific) */}
                      {'checklist' in details && details.checklist && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <CheckCircle className="w-6 h-6 mr-2 text-red-600" />
                            Student Visa Checklist Summary
                          </h3>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="space-y-3">
                              {details.checklist.summary.map((item, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                    {index + 1}
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-gray-800 font-medium">{item}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Application Process (China specific) */}
                      {'process' in details && details.process && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <CheckCircle className="w-6 h-6 mr-2 text-red-600" />
                            Application Process
                          </h3>
                          <div className="space-y-4">
                            {details.process.steps.map((step, index) => (
                              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                  {index + 1}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-800 mb-2">{step}</h4>
                                  <p className="text-gray-600 text-sm">{details.process.details[index]}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Special Notes */}
                      {'specialNotes' in details && details.specialNotes && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <CheckCircle className="w-6 h-6 mr-2 text-red-600" />
                            Important Notes
                          </h3>
                          <div className="bg-green-50 rounded-lg p-4">
                            <ul className="space-y-2">
                              {details.specialNotes.map((note, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700">{note}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* CTA Section */}
                      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Apply for {country.name}?</h3>
                        <p className="text-white/90 mb-6">
                          Let our expert consultants guide you through the entire process
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                          <a
                            href={`https://wa.me/0182999222?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20studying%20in%20${country.name}.`}
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
                  </>
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
