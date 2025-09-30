import React from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import { ArrowRight, GraduationCap, Clock, FileCheck, Globe } from 'lucide-react'

const StudentVisaPage = () => {
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
                <FileCheck className="w-8 h-8 text-red-600 mb-4" />
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

            {/* CTA Section */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Educational Journey?</h3>
              <p className="text-gray-600 mb-6">Contact us today for a free consultation and take the first step towards your international education.</p>
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

export default StudentVisaPage 