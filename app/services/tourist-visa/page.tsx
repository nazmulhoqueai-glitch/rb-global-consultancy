import React from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import { ArrowRight, Plane, Clock, FileCheck, MapPin, Camera, Umbrella } from 'lucide-react'

const TouristVisaPage = () => {
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

            {/* CTA Section */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore the World?</h3>
              <p className="text-gray-600 mb-6">Contact us today for a free consultation and let us help you plan your dream vacation with hassle-free visa services.</p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default TouristVisaPage