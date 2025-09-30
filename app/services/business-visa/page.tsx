import React from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import { ArrowRight, Building2, Clock, FileCheck, Globe, TrendingUp, Handshake } from 'lucide-react'

const BusinessVisaPage = () => {
  return (
    <>
      <TopNav />
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative py-28 sm:py-32 md:py-40 lg:py-48 bg-gray-900">
        <div className="absolute inset-0 bg-[url('/images/business-visa-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Business Visa Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Expand your business globally. We provide comprehensive business visa solutions for entrepreneurs and corporate professionals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Choose Our Business Visa Services?</h2>
            <p className="text-gray-600 mb-8">
              In today's global economy, international business travel is essential for growth and success. Our business visa services are tailored for entrepreneurs, investors, and corporate professionals looking to expand their operations, attend conferences, or establish business relationships worldwide.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Building2 className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Corporate Solutions</h3>
                <p className="text-gray-600">Specialized services for companies sending employees abroad for business purposes.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Clock className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Express Processing</h3>
                <p className="text-gray-600">Priority handling for urgent business travel with expedited visa processing.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <FileCheck className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Documentation</h3>
                <p className="text-gray-600">Expert assistance with invitation letters, company documents, and business plans.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Globe className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">International Network</h3>
                <p className="text-gray-600">Strong connections with embassies, chambers of commerce, and business associations.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <TrendingUp className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Investment Visas</h3>
                <p className="text-gray-600">Specialized guidance for investor visas and entrepreneur immigration programs.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Handshake className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Partnership Support</h3>
                <p className="text-gray-600">Assistance with business partnership visas and joint venture documentation.</p>
              </div>
            </div>

            {/* Process Steps */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Business Visa Process</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Assessment</h3>
                  <p className="text-gray-600">Consultation to understand your business objectives and travel requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Document Compilation</h3>
                  <p className="text-gray-600">Gathering business registration, financial statements, and invitation documents.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Plan Review</h3>
                  <p className="text-gray-600">Professional review and enhancement of your business plan for visa purposes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Application Submission</h3>
                  <p className="text-gray-600">Strategic submission of business visa applications with supporting documents.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interview Coaching</h3>
                  <p className="text-gray-600">Comprehensive preparation for embassy interviews with mock sessions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">6</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Post-Approval Support</h3>
                  <p className="text-gray-600">Guidance on business etiquette, networking, and successful business travel.</p>
                </div>
              </div>
            </div>

            {/* Visa Types */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Types of Business Visas We Handle</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>B1/B2 Business Visa</strong> - For business meetings, conferences, and negotiations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Investor Visa</strong> - For entrepreneurs investing in foreign businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Entrepreneur Visa</strong> - For starting and managing businesses abroad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Intra-Company Transfer</strong> - For transferring employees to foreign branches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Trade Visa</strong> - For engaging in international trade activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Conference Visa</strong> - For attending business conferences and exhibitions</span>
                </li>
              </ul>
            </div>

            {/* Popular Destinations */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Popular Business Destinations</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="text-gray-700">
                  <span className="font-semibold">🇺🇸 United States</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇬🇧 United Kingdom</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇨🇦 Canada</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇦🇪 UAE</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇸🇬 Singapore</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">🇨🇭 Switzerland</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Expand Your Business Globally?</h3>
              <p className="text-gray-600 mb-6">Contact us today for a free consultation and discover how we can help you achieve your international business goals.</p>
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

export default BusinessVisaPage