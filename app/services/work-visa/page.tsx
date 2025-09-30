import React from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import { ArrowRight, Briefcase, Clock, FileCheck, Globe, Users, Shield } from 'lucide-react'

const WorkVisaPage = () => {
  return (
    <>
      <TopNav />
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative py-28 sm:py-32 md:py-40 lg:py-48 bg-gray-900">
        <div className="absolute inset-0 bg-[url('/images/work-visa-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Work Visa Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Your gateway to international career opportunities. We help professionals secure work visas and achieve their global career goals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Choose Our Work Visa Services?</h2>
            <p className="text-gray-600 mb-8">
              Embarking on an international career journey requires expert guidance and comprehensive support. Our experienced team specializes in work visa applications, ensuring smooth processing and maximizing your chances of approval for employment opportunities worldwide.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Briefcase className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Job Market Guidance</h3>
                <p className="text-gray-600">Expert advice on job markets and employment opportunities in your target country.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Clock className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                <p className="text-gray-600">Efficient handling of work permit applications with minimal delays and complications.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <FileCheck className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Complete Documentation</h3>
                <p className="text-gray-600">Comprehensive support in preparing employment contracts, credentials, and visa documents.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Globe className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Employer Liaison</h3>
                <p className="text-gray-600">Direct coordination with employers and immigration authorities for seamless processing.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Users className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Family Visa Support</h3>
                <p className="text-gray-600">Assistance with dependent visa applications for your family members.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Shield className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Legal Compliance</h3>
                <p className="text-gray-600">Ensuring all applications meet legal requirements and immigration regulations.</p>
              </div>
            </div>

            {/* Process Steps */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Work Visa Process</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                  <p className="text-gray-600">Free consultation to evaluate your qualifications, job offer, and visa eligibility.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Document Preparation</h3>
                  <p className="text-gray-600">Comprehensive assistance in gathering and verifying all required employment documents.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Work Permit Application</h3>
                  <p className="text-gray-600">Expert handling of work permit and employment authorization applications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visa Processing</h3>
                  <p className="text-gray-600">Complete support through visa interviews, medical exams, and final approval.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Relocation Support</h3>
                  <p className="text-gray-600">Guidance on travel arrangements, accommodation, and settling into your new workplace.</p>
                </div>
              </div>
            </div>

            {/* Popular Destinations */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Popular Work Visa Destinations</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="text-gray-700">
                  <span className="font-semibold">🇨🇦 Canada</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇦🇺 Australia</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇬🇧 United Kingdom</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇺🇸 United States</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇩🇪 Germany</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇦🇪 UAE</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Advance Your Career Internationally?</h3>
              <p className="text-gray-600 mb-6">Contact us today for a free consultation and take the first step towards your international career journey.</p>
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

export default WorkVisaPage