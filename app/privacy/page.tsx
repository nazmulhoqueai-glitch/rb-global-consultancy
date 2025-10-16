'use client'

import React from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from 'lucide-react'

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: Shield,
      title: '1. Information We Collect',
      content: [
        {
          subtitle: '1.1 Personal Information',
          text: 'We collect personal information that you voluntarily provide to us when you:\n• Fill out contact forms on our website\n• Request a consultation or quote\n• Subscribe to our newsletter\n• Apply for visa services\n• Communicate with us via email or phone\n\nThis information may include: name, email address, phone number, postal address, date of birth, passport details, employment information, educational background, and other relevant details necessary for visa and immigration processing.'
        },
        {
          subtitle: '1.2 Automatically Collected Information',
          text: 'When you visit our website, we automatically collect certain information about your device, including:\n• IP address\n• Browser type and version\n• Operating system\n• Pages visited and time spent\n• Referring website\n• Device identifiers\n\nWe use cookies and similar tracking technologies to collect this information.'
        }
      ]
    },
    {
      icon: FileText,
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: '2.1 Primary Purposes',
          text: 'We use your personal information to:\n• Process visa and immigration applications\n• Provide consultation services\n• Communicate with you about your application status\n• Respond to your inquiries and requests\n• Send you updates and information about our services\n• Improve our website and services\n• Comply with legal obligations'
        },
        {
          subtitle: '2.2 Marketing Communications',
          text: 'With your consent, we may send you marketing communications about:\n• New services and offerings\n• Immigration policy updates\n• Educational opportunities abroad\n• Special promotions and events\n\nYou can opt-out of marketing communications at any time by clicking the "unsubscribe" link in our emails or contacting us directly.'
        }
      ]
    },
    {
      icon: UserCheck,
      title: '3. How We Share Your Information',
      content: [
        {
          subtitle: '3.1 Third-Party Service Providers',
          text: 'We may share your information with trusted third-party service providers who assist us in:\n• Processing visa applications (embassies, consulates, immigration authorities)\n• Educational institutions and employers\n• Payment processing services\n• Email delivery services\n• Website hosting and analytics\n\nThese third parties are contractually obligated to protect your information and use it only for the purposes we specify.'
        },
        {
          subtitle: '3.2 Legal Requirements',
          text: 'We may disclose your information when required by law or in response to:\n• Court orders or legal processes\n• Government or regulatory requests\n• Protection of our rights and property\n• Prevention of fraud or illegal activities\n• Protection of the safety of our clients and staff'
        },
        {
          subtitle: '3.3 Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the new entity, subject to the same privacy protections outlined in this policy.'
        }
      ]
    },
    {
      icon: Lock,
      title: '4. Data Security',
      content: [
        {
          subtitle: '4.1 Security Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against:\n• Unauthorized access or disclosure\n• Accidental loss or destruction\n• Unlawful processing\n• Data breaches\n\nOur security measures include:\n• Encrypted data transmission (SSL/TLS)\n• Secure servers and databases\n• Access controls and authentication\n• Regular security audits\n• Employee training on data protection'
        },
        {
          subtitle: '4.2 Data Retention',
          text: 'We retain your personal information only for as long as necessary to:\n• Fulfill the purposes outlined in this policy\n• Comply with legal, accounting, or regulatory requirements\n• Resolve disputes and enforce our agreements\n\nTypically, we retain application records for 7 years from the completion of services, unless a longer retention period is required by law.'
        }
      ]
    },
    {
      icon: Eye,
      title: '5. Your Rights and Choices',
      content: [
        {
          subtitle: '5.1 Access and Correction',
          text: 'You have the right to:\n• Access your personal information we hold\n• Request correction of inaccurate or incomplete information\n• Request deletion of your personal information (subject to legal requirements)\n• Object to certain processing of your information\n• Request restriction of processing\n• Receive your data in a portable format'
        },
        {
          subtitle: '5.2 Cookie Preferences',
          text: 'You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.\n\nTypes of cookies we use:\n• Essential cookies (required for website functionality)\n• Analytics cookies (help us improve our website)\n• Marketing cookies (used for targeted advertising)'
        },
        {
          subtitle: '5.3 Opt-Out Rights',
          text: 'You can opt-out of:\n• Marketing emails (click "unsubscribe" link)\n• Newsletter subscriptions (contact us)\n• Third-party analytics tracking (browser settings)\n• Targeted advertising (ad preference settings)'
        }
      ]
    },
    {
      icon: Mail,
      title: '6. International Data Transfers',
      content: [
        {
          subtitle: '6.1 Cross-Border Transfers',
          text: 'As we provide international immigration services, your personal information may be transferred to and processed in:\n• Countries where visa applications are submitted\n• Educational institutions or employers abroad\n• Third-party service providers in different jurisdictions\n\nWe ensure that appropriate safeguards are in place to protect your information during international transfers, in accordance with applicable data protection laws.'
        }
      ]
    },
    {
      icon: Shield,
      title: '7. Children\'s Privacy',
      content: [
        {
          subtitle: '7.1 Age Restrictions',
          text: 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. However, we may process information about minors when:\n• Parents or legal guardians provide information for visa applications\n• Family immigration applications include minor children\n\nIn such cases, we require consent from parents or legal guardians and handle children\'s information with extra care and in compliance with applicable laws.'
        }
      ]
    }
  ]

  return (
    <>
      <TopNav />
      <MainNav />

      {/* Hero Section */}
      <section className="relative py-28 sm:py-32 md:py-40 lg:py-48 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="absolute inset-0 bg-[url('/images/privacy-hero.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base text-gray-400 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Last Updated: September 30, 2025
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 border-l-4 border-blue-600 p-6 sm:p-8 rounded-r-lg mb-12"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                R&B Global Consultancy ("we", "our", or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you consent to the data practices described in this policy. If you do not agree with this policy, please do not access or use our services.
              </p>
            </motion.div>

            {/* Main Content Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <section.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">{section.title}</h2>
                </div>

                {section.content.map((subsection, subIndex) => (
                  <div key={subIndex} className="ml-0 sm:ml-16 mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      {subsection.subtitle}
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {subsection.text}
                    </p>
                  </div>
                ))}
              </motion.div>
            ))}

            {/* Additional Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">8. Changes to This Privacy Policy</h2>
              <div className="ml-0 sm:ml-16">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the "Last Updated" date at the top of this page</li>
                  <li>Sending you an email notification (for significant changes)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">9. Contact Us</h2>
              <div className="ml-0 sm:ml-16">
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email:</p>
                      <a href="mailto:info@r&bglobalconsultancy.com" className="text-red-600 hover:text-red-700">
                        info@r&bglobalconsultancy.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone:</p>
                      <a href="tel:+0182999222" className="text-red-600 hover:text-red-700">
                        +8801814-195219
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Address:</p>
                      <p className="text-gray-700">
                        Ali plaza-2 (1st floor)<br />
                        Lalchand Road 4320<br />
                        Chittagong, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* GDPR Notice */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-6 sm:p-8 rounded-r-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">GDPR Compliance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For users in the European Union, we comply with the General Data Protection Regulation (GDPR). You have additional rights under GDPR, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Right to be informed about data processing</li>
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Rights related to automated decision-making and profiling</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Have Questions About Our Privacy Policy?</h2>
            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              Our team is here to help. Contact us for any privacy-related inquiries or concerns.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors text-base sm:text-lg font-semibold"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default PrivacyPolicyPage