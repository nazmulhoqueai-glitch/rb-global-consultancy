"use client"

import React, { useState } from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import { ArrowRight, Plane, Clock, FileCheck, MapPin, Camera, Umbrella, X, Search, Globe, Users, TrendingUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Tourist countries data (exact same structure as Student Visa page)
const touristCountries = [
  {
    id: 1,
    name: 'Malaysia',
    flag: '/images/countries/Malaysia.jpg',
    image: '/images/countries/Malaysia.jpg',
    continent: 'Asia',
    visaTypes: ['Tourist Visa', 'Business Visa', 'Transit Visa', 'Social Visit Visa'],
    processingTime: '3-5 days',
    attractions: 25,
    successRate: 98,
    popularCities: ['Kuala Lumpur', 'Penang', 'Langkawi', 'Malacca'],
    description: 'Explore vibrant culture, stunning beaches, and modern cities.',
    requirements: ['Valid Passport', 'Hotel Booking', 'Bank Statement', 'Travel Itinerary'],
    bgGradient: 'from-red-600 via-white to-blue-600'
  },
  {
    id: 2,
    name: 'China',
    flag: '/images/countries/China.jpg',
    image: '/images/countries/China.jpg',
    continent: 'Asia',
    visaTypes: ['Tourist Visa', 'Business Visa', 'Transit Visa', 'Group Visa'],
    processingTime: '5-7 days',
    attractions: 50,
    successRate: 95,
    popularCities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'],
    description: 'Discover ancient history, modern marvels, and breathtaking landscapes.',
    requirements: ['Valid Passport', 'Travel Itinerary', 'Hotel Booking', 'Bank Statement'],
    bgGradient: 'from-red-600 via-yellow-500 to-red-600'
  },
  {
    id: 3,
    name: 'Singapore',
    flag: '/images/countries/Singapore.jpg',
    image: '/images/countries/Singapore.jpg',
    continent: 'Asia',
    visaTypes: ['Tourist Visa', 'Business Visa', 'Transit Visa', 'eVisa'],
    processingTime: '2-3 days',
    attractions: 15,
    successRate: 99,
    popularCities: ['Singapore City', 'Sentosa', 'Marina Bay', 'Chinatown'],
    description: 'Experience perfect blend of cultures, cuisine, and attractions.',
    requirements: ['Valid Passport', 'Hotel Booking', 'Bank Statement', 'Return Ticket'],
    bgGradient: 'from-red-600 via-white to-red-600'
  },
  {
    id: 4,
    name: 'Indonesia',
    flag: '/images/countries/Indonesia.jpg',
    image: '/images/countries/Indonesia.jpg',
    continent: 'Asia',
    visaTypes: ['Tourist Visa', 'Business Visa', 'eVisa', 'Visa on Arrival'],
    processingTime: '3-4 days',
    attractions: 30,
    successRate: 97,
    popularCities: ['Jakarta', 'Bali', 'Yogyakarta', 'Bandung'],
    description: 'Discover tropical paradise with beautiful beaches and rich culture.',
    requirements: ['Valid Passport', 'Hotel Booking', 'Bank Statement', 'Travel Insurance'],
    bgGradient: 'from-red-600 via-white to-red-600'
  },
  {
    id: 5,
    name: 'Thailand',
    flag: '/images/countries/thailand.png',
    image: '/images/countries/thailand.png',
    continent: 'Asia',
    visaTypes: ['Tourist Visa', 'Business Visa', 'eVisa', 'Visa on Arrival'],
    processingTime: '2-3 days',
    attractions: 40,
    successRate: 98,
    popularCities: ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya'],
    description: 'Enjoy pristine beaches, ancient temples, and vibrant street food.',
    requirements: ['Valid Passport', 'Hotel Booking', 'Bank Statement', 'Return Ticket'],
    bgGradient: 'from-red-600 via-white to-blue-600'
  },
  {
    id: 7,
    name: 'Philippines',
    flag: '/images/countries/Philippines.jpg',
    image: '/images/countries/Philippines.jpg',
    continent: 'Asia',
    visaTypes: ['Tourist Visa', 'Business Visa', 'Transit Visa', 'eVisa'],
    processingTime: '3-5 days',
    attractions: 35,
    successRate: 96,
    popularCities: ['Manila', 'Cebu', 'Boracay', 'Palawan'],
    description: 'Explore stunning islands, crystal-clear waters, and warm hospitality.',
    requirements: ['Valid Passport', 'Hotel Booking', 'Bank Statement', 'Travel Insurance'],
    bgGradient: 'from-blue-600 via-red-600 to-yellow-500'
  },
  {
    id: 8,
    name: 'Sri Lanka',
    flag: '/images/countries/Sri lanka.jpg',
    image: '/images/countries/Sri lanka.jpg',
    continent: 'Asia',
    visaTypes: ['Tourist Visa', 'Business Visa', 'Transit Visa', 'eVisa'],
    processingTime: '2-3 days',
    attractions: 30,
    successRate: 95,
    popularCities: ['Colombo', 'Kandy', 'Galle', 'Anuradhapura'],
    description: 'Discover ancient temples, tea plantations, and pristine beaches.',
    requirements: ['Valid Passport', 'Hotel Booking', 'Bank Statement', 'Return Ticket'],
    bgGradient: 'from-yellow-600 via-red-600 to-green-600'
  },
  {
    id: 9,
    name: 'Egypt',
    flag: '/images/countries/Egypt.jpg',
    image: '/images/countries/Egypt.jpg',
    continent: 'Africa',
    visaTypes: ['Tourist Visa', 'Business Visa', 'Transit Visa', 'eVisa'],
    processingTime: '3-5 days',
    attractions: 25,
    successRate: 92,
    popularCities: ['Cairo', 'Luxor', 'Aswan', 'Alexandria'],
    description: 'Explore ancient pyramids, pharaonic temples, and the Nile River.',
    requirements: ['Valid Passport', 'Hotel Booking', 'Bank Statement', 'Return Ticket'],
    bgGradient: 'from-red-600 via-white to-black'
  }
]

// Detailed country information for tourist destinations
const countryDetails: { [key: number]: any } = {
  1: { // Malaysia
    overview: {
      capital: 'কুয়ালালামপুর',
      currency: 'মালয়েশিয়ান রিঙ্গিত (MYR)',
      language: 'মালয়, ইংরেজি',
      timezone: 'GMT+8'
    },
    touristVisa: {
      requirements: 'পাসপোর্ট, ছবি, ব্যাংক স্টেটমেন্ট, হোটেল বুকিং',
      processingTime: '৩-৫ কর্মদিবস',
      validity: '৩০ দিন',
      cost: 'BDT ৫,০০০-৬,০০০'
    },
    documents: {
      personal: [
        'বৈধ পাসপোর্ট (মেয়াদ কমপক্ষে ৬ মাস)',
        'পাসপোর্ট সাইজ ছবি (সাদা ব্যাকগ্রাউন্ড)',
        'জাতীয় পরিচয়পত্র বা জন্মসনদ'
      ],
      travel: [
        'রিটার্ন এয়ার টিকিট (confirm ticket)',
        'হোটেল বুকিং / থাকার জায়গার প্রমাণ'
      ],
      financial: [
        'শেষ ৬ মাসের ব্যাংক স্টেটমেন্ট (BDT ৬০,০০০-১,০০,০০০)',
        'ব্যাংক সলভেন্সি সার্টিফিকেট'
      ],
      employment: [
        'চাকরির চিঠি / No Objection Letter',
        'অফিস আইডি কার্ড / ভিজিটিং কার্ড'
      ],
      business: [
        'ট্রেড লাইসেন্স (English translated copy)',
        'ব্যবসার ব্যাংক স্টেটমেন্ট'
      ],
      student: [
        'ইনস্টিটিউশন থেকে ছুটির অনুমতি',
        'Student ID'
      ]
    },
    process: {
      steps: [
        'কাগজপত্র প্রস্তুত করুন',
        'অনলাইনে আবেদন করুন',
        'ভিসা ফি প্রদান করুন',
        'ভিসা অনুমোদনের অপেক্ষা করুন',
        'ভ্রমণের প্রস্তুতি নিন'
      ],
      details: [
        'সকল প্রয়োজনীয় কাগজপত্র সংগ্রহ করুন',
        'মালয়েশিয়া eVisa ওয়েবসাইটে আবেদন করুন',
        'ভিসা ফি অনলাইনে প্রদান করুন',
        '৩-৫ কর্মদিবসের মধ্যে ভিসা ইস্যু হবে',
        'Travel Insurance ও অন্যান্য প্রস্তুতি সম্পন্ন করুন'
      ]
    },
    preTravel: [
      'Travel Insurance (কমপক্ষে ১৫ দিন মেয়াদসহ)',
      'Vaccination Certificate (COVID আপডেটেড)',
      'Return Ticket ও হোটেল বুকিং সঙ্গে রাখুন',
      'Cash (প্রায় ৫০০-৬০০ USD) সাথে রাখুন',
      'eVisa প্রিন্ট করা কপি ও ব্যাংক প্রমাণপত্র রাখুন'
    ],
    highlights: [
      'পেট্রোনাস টুইন টাওয়ার',
      'বাটু কেভস',
      'লাংকাউই দ্বীপ',
      'পেনাং হেরিটেজ সাইটস',
      'কুয়ালালামপুর সিটি সেন্টার',
      'জেন্টিং হাইল্যান্ডস'
    ],
    bestTime: 'মার্চ থেকে অক্টোবর',
    specialNotes: [
      'eVisa শুধুমাত্র Air Entry Point এর মাধ্যমে কার্যকর',
      'মালয়েশিয়া Immigration চাইলে "Proof of Sufficient Fund" চাইতে পারে',
      'অতিরিক্ত থাকার জন্য জরিমানা ও ভবিষ্যতে ভিসা বাতিল হতে পারে',
      'আবেদন স্ট্যাটাস ওয়েবসাইটে "Check Application Status" থেকে দেখা যায়'
    ]
  },
  3: { // Indonesia
    overview: {
      capital: 'জাকার্তা',
      currency: 'ইন্দোনেশিয়ান রুপিয়াহ (IDR)',
      language: 'ইন্দোনেশিয়ান, ইংরেজি',
      timezone: 'GMT+7'
    },
    touristVisa: {
      requirements: 'পাসপোর্ট, ছবি, ব্যাংক স্টেটমেন্ট, হোটেল বুকিং, ট্রাভেল ইন্সুরেন্স',
      processingTime: '৩-৫ কর্মদিবস',
      validity: '৩০ দিন',
      cost: 'BDT ৮,৫০০ (এম্বাসী ফি) + BDT ১,৫০০-৩,০০০ (ইন্সুরেন্স) + BDT ৩,০০০-৪,০০০ (প্রসেসিং)'
    },
    documents: {
      personal: [
        'বৈধ পাসপোর্ট (৬ মাস মেয়াদ, ২ ফাঁকা পৃষ্ঠা)',
        'পাসপোর্ট সাইজ ছবি (সাদা ব্যাকগ্রাউন্ড)'
      ],
      financial: [
        'ব্যাংক স্টেটমেন্ট (শেষ ৬ মাস, কমপক্ষে BDT ৫০,০০০)',
        'Travel Insurance (প্রয়োজনীয়, অন্তত ১৫ দিন কভার)'
      ],
      travel: [
        'রিটার্ন টিকেট / onward ticket',
        'হোটেল বুকিং / থাকার প্রমাণ'
      ],
      employment: [
        'অফিস লেটার (No Objection Certificate)',
        'সেলারি স্লিপ / অফিস আইডি কার্ড'
      ],
      business: [
        'ট্রেড লাইসেন্স / কোম্পানির সার্টিফিকেট',
        'ব্যবসার ব্যাংক স্টেটমেন্ট'
      ],
      student: [
        'স্টুডেন্ট আইডি ও ইনস্টিটিউশন লেটার'
      ]
    },
    process: {
      steps: [
        'কাগজপত্র প্রস্তুত করুন',
        'ট্রাভেল ইন্সুরেন্স কিনুন',
        'ভিসা আবেদন করুন',
        'এম্বাসী ফি পরিশোধ করুন',
        'ভিসা অনুমোদনের অপেক্ষা করুন'
      ],
      details: [
        'সকল প্রয়োজনীয় কাগজপত্র সংগ্রহ করুন',
        'বয়স অনুযায়ী ট্রাভেল ইন্সুরেন্স কিনুন (৪০ এর নিচে ১,৫০০-১,৭০০ টাকা, ৪০ এর উপরে ২,৮০০-৩,০০০ টাকা)',
        'ইন্দোনেশিয়া এম্বাসীতে ভিসা আবেদন করুন',
        'এম্বাসী ফি ৮,৫০০ টাকা পরিশোধ করুন',
        '৩-৫ কর্মদিবসের মধ্যে ভিসা ইস্যু হবে'
      ]
    },
    preTravel: [
      'ভিসা প্রিন্ট কপি এবং পাসপোর্ট সাথে রাখুন',
      'রিটার্ন টিকেট ও হোটেল বুকিং নিশ্চিত করুন',
      'Travel Insurance এবং পর্যাপ্ত নগদ অর্থ সঙ্গে রাখুন (প্রায় USD ৫০০)',
      'যাত্রার ৭২ ঘণ্টার মধ্যে COVID বা অন্যান্য স্বাস্থ্য প্রটোকল থাকলে পূরণ করুন'
    ],
    highlights: [
      'বালি দ্বীপ',
      'জাকার্তা সিটি',
      'বোরোবুদুর মন্দির',
      'কোমোডো দ্বীপ',
      'ইয়োগিয়াকার্তা',
      'লম্বক দ্বীপ'
    ],
    bestTime: 'এপ্রিল থেকে অক্টোবর',
    specialNotes: [
      'ইন্দোনেশিয়ার ভিসা শুধুমাত্র নির্দিষ্ট Entry Point এর মাধ্যমে কার্যকর',
      'Travel Insurance বাধ্যতামূলক (বয়স অনুযায়ী ফি ভিন্ন)',
      'পাসপোর্টে কমপক্ষে ২ ফাঁকা পৃষ্ঠা থাকতে হবে',
      'অতিরিক্ত থাকার জন্য জরিমানা ও ভবিষ্যতে ভিসা বাতিল হতে পারে',
      'COVID প্রটোকল যাত্রার ৭২ ঘণ্টার মধ্যে পূরণ করতে হবে',
      'মোট খরচ: এম্বাসী ফি + ইন্সুরেন্স + প্রসেসিং ফি (সময়ভেদে পরিবর্তন হতে পারে)'
    ]
  },
  4: { // Singapore
    overview: {
      capital: 'সিঙ্গাপুর সিটি',
      currency: 'সিঙ্গাপুর ডলার (SGD)',
      language: 'ইংরেজি, মালয়, ম্যান্ডারিন, তামিল',
      timezone: 'GMT+8'
    },
    touristVisa: {
      requirements: 'পাসপোর্ট, ছবি, ব্যাংক স্টেটমেন্ট, হোটেল বুকিং',
      processingTime: '৩-৫ কর্মদিবস',
      validity: '৩০ দিন',
      cost: 'BDT ৭,০০০-৭,৫০০'
    },
    documents: {
      personal: [
        'বৈধ পাসপোর্ট (মেয়াদ কমপক্ষে ৬ মাস থাকতে হবে)',
        'পুরনো পাসপোর্ট (যদি থাকে)',
        '২ কপি পাসপোর্ট সাইজ ছবি (৩৫মিমি x ৪৫মিমি, সাদা ব্যাকগ্রাউন্ড)',
        'জাতীয় পরিচয়পত্র / জন্মসনদ (প্রয়োজনে)'
      ],
      financial: [
        'শেষ ৬ মাসের ব্যাংক স্টেটমেন্ট',
        'ব্যাংক সলভেন্সি সার্টিফিকেট'
      ],
      travel: [
        'রিটার্ন এয়ার টিকিট বুকিং',
        'হোটেল বুকিং / সিঙ্গাপুরে থাকা জায়গার প্রমাণ'
      ],
      employment: [
        'অফিস থেকে ছুটির অনুমতি পত্র',
        'অফিস আইডি ও ভিজিটিং কার্ড'
      ],
      business: [
        'ট্রেড লাইসেন্স (English translated copy)',
        'ব্যবসার ব্যাংক স্টেটমেন্ট'
      ],
      student: [
        'ইনস্টিটিউশন থেকে ছুটির অনুমতি পত্র',
        'Student ID'
      ]
    },
    process: {
      steps: [
        'কাগজপত্র প্রস্তুত করুন',
        'সিঙ্গাপুর ভিসা সেন্টারে যান',
        'আবেদন ফর্ম পূরণ করুন',
        'ভিসা ফি পরিশোধ করুন',
        'ভিসা অনুমোদনের অপেক্ষা করুন'
      ],
      details: [
        'সকল প্রয়োজনীয় কাগজপত্র সংগ্রহ করুন',
        'সিঙ্গাপুর ভিসা অ্যাপ্লিকেশন সেন্টারে যান',
        'আবেদন ফর্ম সঠিকভাবে পূরণ করুন',
        'ভিসা ফি ৭,০০০-৭,৫০০ টাকা পরিশোধ করুন',
        '৩-৫ কর্মদিবসের মধ্যে ভিসা ইস্যু হবে'
      ]
    },
    preTravel: [
      'Travel Insurance (কমপক্ষে ১৫ দিন মেয়াদসহ)',
      'Vaccination Certificate (COVID আপডেটেড)',
      'Return Ticket ও হোটেল বুকিং সঙ্গে রাখুন',
      'Cash (প্রায় ৫০০-৬০০ USD) সাথে রাখুন',
      'ভিসা প্রিন্ট করা কপি ও ব্যাংক প্রমাণপত্র রাখুন'
    ],
    highlights: [
      'মারিনা বে স্যান্ডস',
      'গার্ডেনস বাই দ্য বে',
      'সেন্টোসা আইল্যান্ড',
      'চায়নাটাউন',
      'লিটল ইন্ডিয়া',
      'সিঙ্গাপুর ফ্লাইয়ার'
    ],
    bestTime: 'ফেব্রুয়ারি থেকে এপ্রিল',
    specialNotes: [
      'সিঙ্গাপুর eVisa শুধুমাত্র নির্দিষ্ট Entry Point এর মাধ্যমে কার্যকর',
      'Immigration চাইলে "Proof of Sufficient Fund" চাইতে পারে',
      'অতিরিক্ত থাকার জন্য জরিমানা ও ভবিষ্যতে ভিসা বাতিল হতে পারে',
      'কিছু ক্ষেত্রে অতিরিক্ত যাচাইয়ের জন্য সময় বাড়তে পারে',
      'সিঙ্গাপুরে উচ্চমানের জীবনযাত্রার জন্য পর্যাপ্ত অর্থ থাকা আবশ্যক'
    ]
  },
  2: { // China
    overview: {
      capital: 'বেইজিং',
      currency: 'চাইনিজ ইউয়ান (CNY)',
      language: 'ম্যান্ডারিন',
      timezone: 'GMT+8'
    },
    touristVisa: {
      requirements: 'পাসপোর্ট, ছবি, ব্যাংক স্টেটমেন্ট, হোটেল বুকিং',
      processingTime: '৭-১০ কর্মদিবস (সাধারণ), ৩-৫ কর্মদিবস (এক্সপ্রেস)',
      validity: '৩০ দিন',
      cost: 'BDT ১৩,০০০-১৪,০০০ (প্রথমবার), BDT ১২,০০০-১৩,০০০ (দ্বিতীয়বার)'
    },
    documents: {
      personal: [
        'মূল পাসপোর্ট (কমপক্ষে ৬ মাস মেয়াদ থাকতে হবে)',
        'পুরাতন পাসপোর্ট (যদি থাকে)',
        'সাদা ব্যাকগ্রাউন্ডের ২ কপি পাসপোর্ট সাইজ ছবি (৩৫mm x ৪৫mm)',
        'এনআইডি বা জন্ম নিবন্ধন কপি'
      ],
      financial: [
        'শেষ ৬ মাসের ব্যাংক স্টেটমেন্ট',
        'মিনিমাম ব্যালান্স: প্রাপ্তবয়স্ক প্রতি ৳১,৫০,০০০–২,০০,০০০',
        'ব্যাংক সলভেন্সি সার্টিফিকেট'
      ],
      travel: [
        'চায়নার হোটেল বুকিং কনফার্মেশন',
        'রিটার্ন এয়ার টিকেট রিজার্ভেশন',
        'ট্রাভেল প্ল্যান ও হোটেল বুকিং'
      ],
      employment: [
        'অফিসিয়াল লেটারহেডে No Objection Certificate (NOC)',
        'অফিস আইডি কার্ড কপি',
        'সেলারি স্লিপ (শেষ ৩ মাসের)'
      ],
      business: [
        'ট্রেড লাইসেন্স (নবায়নকৃত কপি)',
        'ব্যবসায়িক ব্যাংক স্টেটমেন্ট (শেষ ৬ মাসের)'
      ],
      student: [
        'ইনস্টিটিউটের NOC',
        'স্টুডেন্ট আইডি কার্ড কপি'
      ]
    },
    process: {
      steps: [
        'কাগজপত্র প্রস্তুত করুন',
        'ভিসা আবেদন ফর্ম পূরণ করুন',
        'কভার লেটার লিখুন',
        'ভিসা ফি পরিশোধ করুন',
        'ভিসা অনুমোদনের অপেক্ষা করুন'
      ],
      details: [
        'সকল প্রয়োজনীয় কাগজপত্র সংগ্রহ করুন',
        'অনলাইন বা হাতে পূরণকৃত ভিসা আবেদন ফর্ম প্রস্তুত করুন',
        'নিজের উদ্দেশ্য উল্লেখ করে কভার লেটার লিখুন',
        'ভিসা ফি ১৩,০০০-১৪,০০০ টাকা (প্রথমবার) পরিশোধ করুন',
        '৭-১০ কর্মদিবসের মধ্যে ভিসা ইস্যু হবে (এক্সপ্রেসে ৩-৫ দিন)'
      ]
    },
    preTravel: [
      'Travel Insurance (কমপক্ষে ১৫ দিন মেয়াদসহ)',
      'Vaccination Certificate (COVID আপডেটেড)',
      'Return Ticket ও হোটেল বুকিং সঙ্গে রাখুন',
      'Cash (প্রায় ৫০০-৬০০ USD) সাথে রাখুন',
      'ভিসা প্রিন্ট করা কপি ও ব্যাংক প্রমাণপত্র রাখুন'
    ],
    highlights: [
      'চীনের মহাপ্রাচীর',
      'নিষিদ্ধ নগরী',
      'টেরাকোটা আর্মি',
      'শাংহাই স্কাইলাইন',
      'লি রিভার গুয়েলিন',
      'হাংঝু পশ্চিম হ্রদ'
    ],
    bestTime: 'এপ্রিল থেকে জুন, সেপ্টেম্বর থেকে নভেম্বর',
    specialNotes: [
      'চীনের ভিসা শুধুমাত্র নির্দিষ্ট Entry Point এর মাধ্যমে কার্যকর',
      'Immigration চাইলে "Proof of Sufficient Fund" চাইতে পারে',
      'অতিরিক্ত থাকার জন্য জরিমানা ও ভবিষ্যতে ভিসা বাতিল হতে পারে',
      'দ্বিতীয়বারের জন্য ভিসা ফি কম (BDT ১২,০০০-১৩,০০০)',
      'চীনে ভ্রমণের জন্য বিস্তারিত ট্রাভেল প্ল্যান আবশ্যক',
      'হোটেল বুকিং কনফার্মেশন অবশ্যই চায়নার হতে হবে'
    ]
  },
  6: { // Thailand
    overview: {
      capital: 'ব্যাংকক',
      currency: 'থাই বাট (THB)',
      language: 'থাই, ইংরেজি',
      timezone: 'GMT+7'
    },
    touristVisa: {
      requirements: 'পাসপোর্ট, ছবি, ব্যাংক স্টেটমেন্ট, হোটেল বুকিং',
      processingTime: '২-৩ কর্মদিবস',
      validity: '৩০ দিন',
      cost: 'BDT ৭,০০০ (Single Entry)'
    },
    documents: {
      personal: [
        'বৈধ পাসপোর্ট (কমপক্ষে ৬ মাস মেয়াদ, ২টি ফাঁকা পৃষ্ঠা সহ)',
        'পাসপোর্ট সাইজ ছবি (২ কপি – সাদা ব্যাকগ্রাউন্ডে, সাম্প্রতিক)',
        'জাতীয় পরিচয়পত্র বা জন্মসনদ (প্রয়োজনে)'
      ],
      financial: [
        'শেষ ৬ মাসের ব্যাংক স্টেটমেন্ট (সর্বনিম্ন ৬০,০০০ টাকা নিজের নামে)',
        'ব্যাংক সলভেন্সি সার্টিফিকেট'
      ],
      travel: [
        'রিটার্ন এয়ার টিকিট বুকিং (confirm না হলেও চলবে)',
        'হোটেল বুকিং বা থাইল্যান্ডে থাকার প্রমাণ'
      ],
      employment: [
        'অফিস থেকে "No Objection Letter" বা ছুটির অনুমতি পত্র',
        'অফিস আইডি কার্ড ও ভিজিটিং কার্ড কপি'
      ],
      business: [
        'ট্রেড লাইসেন্স (English translated copy)',
        'ব্যাংক অ্যাকাউন্ট (Current A/C) স্টেটমেন্ট ও ব্যবসার Letterhead এ Letter'
      ],
      student: [
        'ছাত্র পরিচয়পত্র ও ইনস্টিটিউশন থেকে সনদ',
        'ছুটির অনুমতি পত্র'
      ]
    },
    process: {
      steps: [
        'কাগজপত্র প্রস্তুত করুন',
        'TVAC অফিসে যান',
        'আবেদন ফর্ম পূরণ করুন',
        'ভিসা ফি জমা দিন',
        'ভিসা অনুমোদনের অপেক্ষা করুন'
      ],
      details: [
        'সকল প্রয়োজনীয় কাগজপত্র সংগ্রহ করুন',
        'থাইল্যান্ড ভিসা অ্যাপ্লিকেশন সেন্টারে যান',
        'ফর্ম পাওয়া যাবে TVAC অফিস বা তাদের ওয়েবসাইটে',
        'Single Entry Tourist Visa ৭,০০০ টাকা (সার্ভিস চার্জসহ)',
        '২-৩ কর্মদিবসের মধ্যে ভিসা ইস্যু হবে'
      ]
    },
    preTravel: [
      'Travel Insurance (কমপক্ষে ১৫ দিন মেয়াদসহ)',
      'Vaccination Certificate (COVID আপডেটেড)',
      'Return Ticket ও হোটেল বুকিং সঙ্গে রাখুন',
      'Cash (প্রায় ৫০০-৬০০ USD) সাথে রাখুন',
      'ভিসা প্রিন্ট করা কপি ও ব্যাংক প্রমাণপত্র রাখুন'
    ],
    highlights: [
      'গ্র্যান্ড প্যালেস ব্যাংকক',
      'ফি ফি আইল্যান্ডস',
      'চিয়াং মাই মন্দিরসমূহ',
      'ফ্লোটিং মার্কেটস',
      'পাটায়া বিচ',
      'ক্রাবি দ্বীপপুঞ্জ'
    ],
    bestTime: 'নভেম্বর থেকে মার্চ',
    specialNotes: [
      'থাইল্যান্ড eVisa শুধুমাত্র নির্দিষ্ট Entry Point এর মাধ্যমে কার্যকর',
      'Immigration চাইলে "Proof of Sufficient Fund" চাইতে পারে',
      'অতিরিক্ত থাকার জন্য জরিমানা ও ভবিষ্যতে ভিসা বাতিল হতে পারে',
      'আবেদন স্ট্যাটাস TVAC ওয়েবসাইটে দেখা যায়',
      'সব তথ্য ইংরেজিতে পরিষ্কারভাবে পূরণ করতে হবে'
    ]
  },
  7: { // Philippines
    overview: {
      capital: 'ম্যানিলা',
      currency: 'ফিলিপিনো পেসো (PHP)',
      language: 'ফিলিপিনো, ইংরেজি',
      timezone: 'GMT+8'
    },
    touristVisa: {
      requirements: 'পাসপোর্ট, ছবি, ব্যাংক স্টেটমেন্ট, হোটেল বুকিং',
      processingTime: '৭-১০ কর্মদিবস (সাধারণত), অতিরিক্ত যাচাইয়ের জন্য সময় বাড়তে পারে',
      validity: '৩০ দিন',
      cost: 'BDT ১০,০০০ (নরমাল প্রসেস), BDT ৩০,০০০ (স্পেশাল সার্ভিস - No Visa No Fee)'
    },
    documents: {
      personal: [
        'বৈধ পাসপোর্ট (কমপক্ষে ৬ মাস মেয়াদ, ২ ফাঁকা পৃষ্ঠা)',
        'পুরাতন পাসপোর্ট (যদি থাকে)',
        '২ কপি পাসপোর্ট সাইজ ছবি (সাদা ব্যাকগ্রাউন্ড)'
      ],
      financial: [
        'ব্যাংক স্টেটমেন্ট (শেষ ৬ মাস, কমপক্ষে BDT ৫০,০০০)',
        'ব্যাংক সলভেন্সি সার্টিফিকেট'
      ],
      travel: [
        'রিটার্ন এয়ার টিকিট / onward ticket',
        'হোটেল বুকিং বা থাকার প্রমাণ'
      ],
      employment: [
        'অফিস থেকে NOC / ছুটির অনুমতি পত্র',
        'অফিস আইডি ও সেলারি স্লিপ'
      ],
      business: [
        'ট্রেড লাইসেন্স / কোম্পানির সার্টিফিকেট',
        'ব্যবসার ব্যাংক স্টেটমেন্ট'
      ],
      student: [
        'স্টুডেন্ট আইডি ও ইনস্টিটিউশন থেকে NOC'
      ]
    },
    process: {
      steps: [
        'কাগজপত্র প্রস্তুত করুন',
        'ভিসা আবেদন করুন',
        'ভিসা ফি পরিশোধ করুন',
        'ভিসা অনুমোদনের অপেক্ষা করুন',
        'ভিসা সংগ্রহ করুন'
      ],
      details: [
        'সকল প্রয়োজনীয় কাগজপত্র সংগ্রহ করুন',
        'ফিলিপাইন এম্বাসীতে ভিসা আবেদন করুন',
        'নরমাল প্রসেস: ১০,০০০ টাকা বা স্পেশাল সার্ভিস: ৩০,০০০ টাকা (No Visa No Fee) পরিশোধ করুন',
        '৭-১০ কর্মদিবসের মধ্যে ভিসা ইস্যু হবে',
        'অতিরিক্ত যাচাইয়ের জন্য সময় বাড়তে পারে'
      ]
    },
    preTravel: [
      'ভিসা প্রিন্ট কপি এবং পাসপোর্ট সাথে রাখুন',
      'রিটার্ন টিকেট ও হোটেল বুকিং নিশ্চিত করুন',
      'পর্যাপ্ত নগদ অর্থ সঙ্গে রাখুন (প্রায় USD ৪০০)',
      'COVID প্রটোকল (যদি প্রয়োজন হয়) পূরণ করুন'
    ],
    highlights: [
      'বোরাকায় দ্বীপ',
      'পালাওয়ান দ্বীপ',
      'ম্যানিলা সিটি',
      'সেবু সিটি',
      'বোহল দ্বীপ',
      'এল নিদো'
    ],
    bestTime: 'নভেম্বর থেকে এপ্রিল',
    specialNotes: [
      'ফিলিপাইনের ভিসা শুধুমাত্র নির্দিষ্ট Entry Point এর মাধ্যমে কার্যকর',
      'পাসপোর্টে কমপক্ষে ২ ফাঁকা পৃষ্ঠা থাকতে হবে',
      'Immigration চাইলে "Proof of Sufficient Fund" চাইতে পারে',
      'অতিরিক্ত থাকার জন্য জরিমানা ও ভবিষ্যতে ভিসা বাতিল হতে পারে',
      'সব তথ্য ইংরেজিতে পরিষ্কারভাবে পূরণ করতে হবে',
      'স্পেশাল সার্ভিসে No Visa No Fee সুবিধা (৩০,০০০ টাকা)',
      'অতিরিক্ত যাচাইয়ের জন্য প্রসেসিং সময় বাড়তে পারে',
      'ভিসা ফি সময়ভেদে পরিবর্তন হতে পারে'
    ]
  },
  8: { // Sri Lanka
    overview: {
      capital: 'কলম্বো',
      currency: 'শ্রীলঙ্কান রুপি (LKR)',
      language: 'সিংহলি, তামিল, ইংরেজি',
      timezone: 'GMT+5:30'
    },
    touristVisa: {
      requirements: 'পাসপোর্ট, ছবি, ব্যাংক স্টেটমেন্ট, হোটেল বুকিং',
      processingTime: '২-৩ কর্মদিবস',
      validity: '৩০ দিন',
      cost: 'BDT ৩,৫০০-৪,৫০০ (ই-ভিসা ফি)'
    },
    documents: {
      personal: [
        'বৈধ পাসপোর্ট (৬ মাস মেয়াদ, ২ ফাঁকা পৃষ্ঠা)',
        'পাসপোর্ট সাইজ ছবি (সাদা ব্যাকগ্রাউন্ড)'
      ],
      financial: [
        'ব্যাংক স্টেটমেন্ট (শেষ ৬ মাসের)',
        'পর্যাপ্ত নগদ অর্থ / Travel Insurance'
      ],
      travel: [
        'রিটার্ন এয়ার টিকেট / onward ticket',
        'হোটেল বুকিং বা থাকার প্রমাণ'
      ],
      employment: [
        'অফিস লেটার / No Objection Certificate (NOC)',
        'সেলারি স্লিপ / অফিস আইডি কার্ড'
      ],
      business: [
        'ট্রেড লাইসেন্স / কোম্পানি সার্টিফিকেট',
        'ব্যবসার ব্যাংক স্টেটমেন্ট'
      ],
      student: [
        'স্টুডেন্ট আইডি ও ইনস্টিটিউশন থেকে NOC'
      ]
    },
    process: {
      steps: [
        'কাগজপত্র প্রস্তুত করুন',
        'ই-ভিসা আবেদন করুন',
        'ভিসা ফি পরিশোধ করুন',
        'ভিসা অনুমোদনের অপেক্ষা করুন',
        'ভিসা সংগ্রহ করুন'
      ],
      details: [
        'সকল প্রয়োজনীয় কাগজপত্র সংগ্রহ করুন',
        'শ্রীলঙ্কা ই-ভিসা ওয়েবসাইটে আবেদন করুন',
        'ই-ভিসা ফি ৩,৫০০-৪,৫০০ টাকা পরিশোধ করুন',
        '২-৩ কর্মদিবসের মধ্যে ভিসা ইস্যু হবে',
        'ই-ভিসা প্রিন্ট করে ভ্রমণে নিয়ে যান'
      ]
    },
    preTravel: [
      'ই-ভিসা প্রিন্ট কপি এবং পাসপোর্ট সাথে রাখুন',
      'রিটার্ন টিকেট ও হোটেল বুকিং নিশ্চিত করুন',
      'পর্যাপ্ত নগদ অর্থ সঙ্গে রাখুন (প্রায় USD ৩০০)',
      'COVID প্রটোকল (যদি প্রয়োজন হয়) পূরণ করুন'
    ],
    highlights: [
      'সিগিরিয়া রক ফোর্ট',
      'ক্যান্ডি টেম্পল',
      'গালে ফোর্ট',
      'আনুরাধাপুরা',
      'নুওয়ারা এলিয়া',
      'ইয়ালা ন্যাশনাল পার্ক'
    ],
    bestTime: 'ডিসেম্বর থেকে মার্চ',
    specialNotes: [
      'শ্রীলঙ্কার ই-ভিসা শুধুমাত্র নির্দিষ্ট Entry Point এর মাধ্যমে কার্যকর',
      'পাসপোর্টে কমপক্ষে ২ ফাঁকা পৃষ্ঠা থাকতে হবে',
      'Immigration চাইলে "Proof of Sufficient Fund" চাইতে পারে',
      'অতিরিক্ত থাকার জন্য জরিমানা ও ভবিষ্যতে ভিসা বাতিল হতে পারে',
      'সব তথ্য ইংরেজিতে পরিষ্কারভাবে পূরণ করতে হবে',
      'ই-ভিসা প্রসেসিং সময়ভেদে পরিবর্তন হতে পারে',
      'শ্রীলঙ্কা ভিসা সবচেয়ে সাশ্রয়ী (BDT ৩,৫০০-৪,৫০০)'
    ]
  },
  9: { // Egypt
    overview: {
      capital: 'কায়রো',
      currency: 'মিশরীয় পাউন্ড (EGP)',
      language: 'আরবি, ইংরেজি',
      timezone: 'GMT+2'
    },
    touristVisa: {
      requirements: 'পাসপোর্ট, ছবি, ব্যাংক স্টেটমেন্ট, হোটেল বুকিং',
      processingTime: '৩-৫ কর্মদিবস',
      validity: '৩০ দিন',
      cost: 'BDT ২,০০০-৪,০০০ (ভিসা ফি) + BDT ২,০০০-৩,০০০ (প্রসেসিং ফি)'
    },
    documents: {
      personal: [
        'বৈধ পাসপোর্ট (মেয়াদ কমপক্ষে ৬ মাস)',
        'পাসপোর্ট সাইজ ছবি (সাদা ব্যাকগ্রাউন্ড)',
        'পুরাতন পাসপোর্ট (যদি থাকে)'
      ],
      financial: [
        'ব্যাংক স্টেটমেন্ট (শেষ ৬ মাসের)',
        'ব্যাংক সলভেন্সি সার্টিফিকেট (প্রাপ্তবয়স্ক প্রতি কমপক্ষে BDT ৫০,০০০–১,০০,০০০)'
      ],
      travel: [
        'রিটার্ন এয়ার টিকেট / onward ticket',
        'হোটেল বুকিং বা থাকার প্রমাণ'
      ],
      employment: [
        'অফিস লেটার / No Objection Certificate (NOC)',
        'সেলারি স্লিপ / অফিস আইডি কার্ড'
      ],
      business: [
        'ট্রেড লাইসেন্স / কোম্পানি সার্টিফিকেট',
        'ব্যবসার ব্যাংক স্টেটমেন্ট'
      ],
      student: [
        'স্টুডেন্ট আইডি ও ইনস্টিটিউশন লেটার'
      ]
    },
    process: {
      steps: [
        'কাগজপত্র প্রস্তুত করুন',
        'ভিসা আবেদন করুন',
        'প্রসেসিং ফি পরিশোধ করুন',
        'ভিসা ফি পরিশোধ করুন',
        'ভিসা অনুমোদনের অপেক্ষা করুন'
      ],
      details: [
        'সকল প্রয়োজনীয় কাগজপত্র সংগ্রহ করুন',
        'মিশর এম্বাসীতে ভিসা আবেদন করুন',
        'প্রসেসিং ফি ২,০০০-৩,০০০ টাকা পরিশোধ করুন',
        'ভিসা ফি ২,০০০-৪,০০০ টাকা পরিশোধ করুন',
        '৩-৫ কর্মদিবসের মধ্যে ভিসা ইস্যু হবে'
      ]
    },
    preTravel: [
      'ভিসা প্রিন্ট কপি এবং পাসপোর্ট সাথে রাখুন',
      'রিটার্ন টিকেট ও হোটেল বুকিং নিশ্চিত করুন',
      'পর্যাপ্ত নগদ অর্থ সঙ্গে রাখুন (প্রায় USD ৫০০)',
      'COVID প্রটোকল (যদি প্রয়োজন হয়) পূরণ করুন'
    ],
    highlights: [
      'গিজার পিরামিড',
      'স্ফিংস',
      'কারনাক মন্দির',
      'লুক্সর মন্দির',
      'আবু সিম্বেল',
      'নীল নদ'
    ],
    bestTime: 'অক্টোবর থেকে এপ্রিল',
    specialNotes: [
      'মিশরের ভিসা শুধুমাত্র নির্দিষ্ট Entry Point এর মাধ্যমে কার্যকর',
      'পাসপোর্টে কমপক্ষে ২ ফাঁকা পৃষ্ঠা থাকতে হবে',
      'Immigration চাইলে "Proof of Sufficient Fund" চাইতে পারে',
      'অতিরিক্ত থাকার জন্য জরিমানা ও ভবিষ্যতে ভিসা বাতিল হতে পারে',
      'সব তথ্য ইংরেজিতে পরিষ্কারভাবে পূরণ করতে হবে',
      'ভিসা ফি ও প্রসেসিং ফি সময়ভেদে পরিবর্তন হতে পারে',
      'মিশর ভিসা প্রাচীন সভ্যতা দেখার জন্য জনপ্রিয়'
    ]
  }
  // Other countries will be added here
}

const TouristVisaPage = () => {
  const [selectedContinent, setSelectedContinent] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null)

  const continents = ['All', 'Asia', 'Africa']

  const filteredCountries = selectedContinent === 'All' 
    ? touristCountries 
    : touristCountries.filter(country => country.continent === selectedContinent)

  return (
    <>
      <TopNav />
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative py-28 sm:py-32 md:py-40 lg:py-48 bg-gray-900">
        <div className="absolute inset-0 bg-[url('/images/tourist-visa-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Tourist Visa Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Make your travel dreams come true. We provide hassle-free tourist visa services for your perfect vacation abroad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Choose Our Tourist Visa Services?</h2>
            <p className="text-gray-600 mb-8">
              Planning a vacation shouldn't be stressful. Our tourist visa services are designed to make your travel experience smooth and enjoyable from start to finish. With our expert guidance, you can focus on planning your itinerary while we handle all the visa complexities.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Plane className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Travel Planning</h3>
                <p className="text-gray-600">Expert advice on destinations, travel seasons, and itinerary planning for your trip.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Clock className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Processing</h3>
                <p className="text-gray-600">Fast-track visa processing to ensure you get your visa on time for your travel dates.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <FileCheck className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Document Support</h3>
                <p className="text-gray-600">Complete assistance with travel documents, hotel bookings, and flight reservations.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <MapPin className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multiple Countries</h3>
                <p className="text-gray-600">Visa services for popular tourist destinations worldwide including Schengen countries.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Camera className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tour Packages</h3>
                <p className="text-gray-600">Customized tour packages with visa, accommodation, and sightseeing arrangements.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Umbrella className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Travel Insurance</h3>
                <p className="text-gray-600">Travel insurance assistance to ensure you're covered throughout your journey.</p>
              </div>
            </div>

            {/* Process Steps */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Tourist Visa Process</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Travel Consultation</h3>
                  <p className="text-gray-600">Discuss your travel plans, destination preferences, and visa requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                  <p className="text-gray-600">Help with gathering passport, photos, bank statements, and travel itinerary.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visa Application</h3>
                  <p className="text-gray-600">Complete visa application submission and embassy coordination on your behalf.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interview Preparation</h3>
                  <p className="text-gray-600">Guidance and coaching for visa interview (if required) to improve approval chances.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Travel Ready</h3>
                  <p className="text-gray-600">Receive your visa and final travel briefing for a worry-free vacation.</p>
                </div>
              </div>
            </div>

            {/* Popular Destinations */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Popular Tourist Destinations</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="text-gray-700">
                  <span className="font-semibold">🇹🇭 Thailand</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇲🇾 Malaysia</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇦🇪 Dubai</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇸🇬 Singapore</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇹🇷 Turkey</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇪🇺 Europe</span>
                </div>
              </div>
            </div>

            {/* Visa Types */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Types of Tourist Visas We Handle</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Single Entry Visa</strong> - For one-time visits to your destination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Multiple Entry Visa</strong> - For frequent travelers and multiple visits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Schengen Visa</strong> - Access to 27 European countries with one visa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>E-Visa</strong> - Electronic visa processing for eligible countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Visa on Arrival</strong> - Assistance with visa-on-arrival requirements</span>
                </li>
              </ul>
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
                <div className="text-gray-300 text-sm sm:text-base">Tourist Visas Processed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300 text-sm sm:text-base">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">6</div>
                <div className="text-gray-300 text-sm sm:text-base">Popular Destinations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm sm:text-base">Support Available</div>
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
                            <Camera className="w-4 h-4 text-red-600 mr-1" />
                            <span className="text-xs text-gray-500">Attractions</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-800">{country.attractions}</div>
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

      {/* Country Details Modal - Placeholder */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-shrink-0 p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    {touristCountries.find(c => c.id === selectedCountry)?.name} - Tourist Visa Details
                  </h2>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                  {(() => {
                    const details = countryDetails[selectedCountry];
                    if (!details) {
                      return (
                        <div className="text-center py-12">
                          <h3 className="text-xl font-semibold mb-4">Detailed Information Coming Soon!</h3>
                          <p className="text-gray-600 mb-6">
                            We're preparing comprehensive tourist visa details for this destination. 
                            Contact us for immediate assistance with your travel plans.
                          </p>
                          <a
                            href="https://wa.me/0182999222?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20tourist%20visa%20for%20this%20destination."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center"
                          >
                            Contact Us for Details
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </a>
                        </div>
                      );
                    }
                    
                    return (
                      <>
                        {/* Overview */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Globe className="w-5 h-5 mr-2 text-red-600" />
                            সাধারণ তথ্য
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-gray-600">রাজধানী:</span>
                                <span className="font-medium">{details.overview.capital}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">মুদ্রা:</span>
                                <span className="font-medium">{details.overview.currency}</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-gray-600">ভাষা:</span>
                                <span className="font-medium">{details.overview.language}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">সময় অঞ্চল:</span>
                                <span className="font-medium">{details.overview.timezone}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Tourist Visa Information */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <FileCheck className="w-5 h-5 mr-2 text-red-600" />
                            ট্যুরিস্ট ভিসা তথ্য
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">প্রয়োজনীয় কাগজপত্র:</span>
                                  <span className="font-medium">{details.touristVisa.requirements}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">প্রসেসিং সময়:</span>
                                  <span className="font-medium">{details.touristVisa.processingTime}</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">ভিসার মেয়াদ:</span>
                                  <span className="font-medium">{details.touristVisa.validity}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">খরচ:</span>
                                  <span className="font-medium text-red-600">{details.touristVisa.cost}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Documents Required */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <FileCheck className="w-5 h-5 mr-2 text-red-600" />
                            প্রয়োজনীয় কাগজপত্র
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">🪪 ব্যক্তিগত কাগজপত্র:</h4>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                {details.documents.personal.map((doc: string, index: number) => (
                                  <li key={index} className="text-gray-700">{doc}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">✈️ যাতায়াত সংক্রান্ত কাগজপত্র:</h4>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                {details.documents.travel.map((doc: string, index: number) => (
                                  <li key={index} className="text-gray-700">{doc}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">💰 অর্থনৈতিক প্রমাণ:</h4>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                {details.documents.financial.map((doc: string, index: number) => (
                                  <li key={index} className="text-gray-700">{doc}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">🏢 কর্মজীবী হলে:</h4>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                {details.documents.employment.map((doc: string, index: number) => (
                                  <li key={index} className="text-gray-700">{doc}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">🏠 ব্যবসায়ী হলে:</h4>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                {details.documents.business.map((doc: string, index: number) => (
                                  <li key={index} className="text-gray-700">{doc}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">🎓 ছাত্র হলে:</h4>
                              <ul className="list-disc list-inside space-y-1 ml-4">
                                {details.documents.student.map((doc: string, index: number) => (
                                  <li key={index} className="text-gray-700">{doc}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Process Steps */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-red-600" />
                            ভিসা প্রক্রিয়া
                          </h3>
                          <div className="space-y-3">
                            {details.process.steps.map((step: string, index: number) => (
                              <div key={index} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                                  {index + 1}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800">{step}</h4>
                                  <p className="text-gray-600 text-sm">{details.process.details[index]}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pre-Travel Checklist */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Plane className="w-5 h-5 mr-2 text-red-600" />
                            ভ্রমণের আগে করণীয়
                          </h3>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <ul className="list-disc list-inside space-y-2">
                              {details.preTravel.map((item: string, index: number) => (
                                <li key={index} className="text-gray-700">{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Tourist Highlights */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Camera className="w-5 h-5 mr-2 text-red-600" />
                            দর্শনীয় স্থানসমূহ
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {details.highlights.map((highlight: string, index: number) => (
                              <div key={index} className="flex items-center">
                                <span className="text-red-600 mr-2">✓</span>
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Best Time to Visit */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-red-600" />
                            ভ্রমণের উপযুক্ত সময়
                          </h3>
                          <p className="text-gray-700">{details.bestTime}</p>
                        </div>

                        {/* Special Notes */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <MapPin className="w-5 h-5 mr-2 text-red-600" />
                            গুরুত্বপূর্ণ নির্দেশনা
                          </h3>
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <ul className="list-disc list-inside space-y-2">
                              {details.specialNotes.map((note: string, index: number) => (
                                <li key={index} className="text-gray-700">{note}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    );
                  })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Explore the World?</h3>
              <p className="text-gray-600 mb-6 text-lg">Contact us today for a free consultation and let us help you plan your dream vacation with hassle-free visa services.</p>
              <a
                href="https://wa.me/0182999222?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20tourist%20visa%20services."
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

export default TouristVisaPage 