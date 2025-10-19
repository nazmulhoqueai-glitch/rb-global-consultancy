'use client'

import React from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import Footer from '@/components/navigation/Footer'
import { motion } from 'framer-motion'
import { FileText, AlertCircle, Scale, CreditCard, Ban, UserX, CheckCircle, Mail } from 'lucide-react'

const TermsConditionsPage = () => {
  const sections = [
    {
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: [
        {
          subtitle: '1.1 Agreement to Terms',
          text: 'By accessing and using the services of R&B Global Consultancy ("Company", "we", "our", or "us"), you ("Client", "you", or "your") agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and R&B Global Consultancy.\n\nIf you do not agree with any part of these terms, you must not use our services or access our website.'
        },
        {
          subtitle: '1.2 Modifications',
          text: 'We reserve the right to modify, update, or change these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after any such changes constitutes your acceptance of the new terms.\n\nWe will notify you of significant changes via email or through a notice on our website.'
        }
      ]
    },
    {
      icon: CheckCircle,
      title: '2. Services Provided',
      content: [
        {
          subtitle: '2.1 Scope of Services',
          text: 'R&B Global Consultancy provides immigration and visa consulting services, including but not limited to:\n• Student visa consultation and application assistance\n• Work visa and work permit services\n• Tourist visa processing\n• Business visa consultation\n• Immigration advice and document preparation\n• University application assistance\n• Pre-departure orientation\n\nOur services are advisory in nature. We do not guarantee visa approval as final decisions rest with immigration authorities.'
        },
        {
          subtitle: '2.2 Professional Consultation',
          text: 'All services are provided based on the information you supply. We will provide professional advice and assistance to the best of our ability, but we cannot guarantee specific outcomes.\n\nWe are not a law firm, and our services do not constitute legal advice. For complex immigration legal matters, we recommend consulting with a licensed immigration attorney.'
        },
        {
          subtitle: '2.3 Service Limitations',
          text: 'We do not:\n• Guarantee visa approval or immigration success\n• Provide legal representation in courts or tribunals\n• Engage in fraudulent activities or misrepresentation\n• Process applications without proper documentation\n• Accept responsibility for government processing delays\n• Guarantee specific processing times'
        }
      ]
    },
    {
      icon: CreditCard,
      title: '3. Fees and Payment',
      content: [
        {
          subtitle: '3.1 Service Fees',
          text: 'Our service fees are clearly communicated during the initial consultation and must be agreed upon before work commences. Fees vary depending on:\n• Type of service required\n• Complexity of the application\n• Country of destination\n• Urgency of processing\n\nAll fees are quoted in Bangladesh Taka (BDT) unless otherwise specified.'
        },
        {
          subtitle: '3.2 Payment Terms',
          text: 'Payment must be made according to the following terms:\n• Initial consultation fee (if applicable) is due at the time of consultation\n• Service fees are typically paid in installments:\n  - 50% deposit upon signing the service agreement\n  - 50% balance before application submission\n• Government fees, embassy fees, and third-party costs are payable separately\n• All payments must be made through official channels with proper receipts'
        },
        {
          subtitle: '3.3 Additional Costs',
          text: 'Clients are responsible for:\n• Government application fees\n• Embassy or consulate fees\n• Medical examination costs\n• Police clearance certificates\n• Document translation and notarization\n• Courier and shipping charges\n• Travel expenses for interviews\n• Educational credential evaluation fees\n\nThese costs are not included in our service fees unless explicitly stated in the service agreement.'
        },
        {
          subtitle: '3.4 Late Payments',
          text: 'Failure to make payments as agreed may result in:\n• Suspension of services\n• Inability to meet application deadlines\n• Termination of the service agreement\n• Late payment fees of 2% per month on outstanding balances\n\nWe reserve the right to withhold application submission until all fees are paid in full.'
        }
      ]
    },
    {
      icon: Ban,
      title: '4. Refund and Cancellation Policy',
      content: [
        {
          subtitle: '4.1 Refund Eligibility',
          text: 'Refunds may be considered under the following circumstances:\n• If we are unable to provide the agreed services\n• If services are cancelled before substantial work has commenced\n• If there are errors or omissions on our part that materially affect the application\n\nRefunds are NOT available for:\n• Visa refusals or rejections by immigration authorities\n• Client-provided incorrect or incomplete information\n• Changes in immigration policies or requirements\n• Client withdrawal after application submission\n• Government or embassy fees (non-refundable)\n• Third-party costs already incurred'
        },
        {
          subtitle: '4.2 Cancellation by Client',
          text: 'If you wish to cancel our services:\n• Cancellation before work commences: Full refund minus administrative fee (10%)\n• Cancellation after initial assessment: 50% refund\n• Cancellation after document preparation: 25% refund\n• Cancellation after application submission: No refund\n\nCancellation requests must be submitted in writing via email.'
        },
        {
          subtitle: '4.3 Cancellation by Company',
          text: 'We reserve the right to cancel services if:\n• Client provides false or misleading information\n• Client fails to make required payments\n• Client engages in abusive or threatening behavior\n• We determine the application has no reasonable chance of success\n• Legal or ethical concerns arise\n\nIn such cases, refunds will be calculated based on work completed.'
        }
      ]
    },
    {
      icon: AlertCircle,
      title: '5. Client Responsibilities',
      content: [
        {
          subtitle: '5.1 Information Accuracy',
          text: 'You are responsible for:\n• Providing accurate, complete, and truthful information\n• Disclosing all relevant facts that may affect your application\n• Updating us promptly of any changes in circumstances\n• Reviewing all documents before submission\n• Maintaining confidentiality of sensitive information\n\nProviding false information may result in visa refusal, application rejection, or legal consequences.'
        },
        {
          subtitle: '5.2 Document Provision',
          text: 'You must provide:\n• All required documents in a timely manner\n• Original documents when required\n• Certified translations of non-English documents\n• Clear, legible copies or scans\n• Documents that meet official requirements\n\nDelays in providing documents may affect application deadlines and outcomes.'
        },
        {
          subtitle: '5.3 Communication',
          text: 'You agree to:\n• Respond promptly to our requests for information\n• Maintain regular communication throughout the process\n• Provide a valid email address and phone number\n• Inform us of any changes to contact information\n• Check your email regularly for updates'
        },
        {
          subtitle: '5.4 Compliance',
          text: 'You must:\n• Comply with all applicable immigration laws and regulations\n• Attend interviews and appointments as scheduled\n• Follow our professional advice and recommendations\n• Not engage in fraud or misrepresentation\n• Respect embassy and consulate procedures'
        }
      ]
    },
    {
      icon: Scale,
      title: '6. Liability and Disclaimers',
      content: [
        {
          subtitle: '6.1 No Guarantee of Approval',
          text: 'We explicitly disclaim any guarantee or warranty regarding:\n• Visa approval or immigration success\n• Specific processing times\n• Outcomes of applications\n• Changes in immigration policies\n• Embassy or government decisions\n\nAll final decisions are made by relevant immigration authorities, and we have no control over these decisions.'
        },
        {
          subtitle: '6.2 Limitation of Liability',
          text: 'To the maximum extent permitted by law, R&B Global Consultancy shall not be liable for:\n• Visa refusals or application rejections\n• Delays caused by government agencies\n• Changes in immigration laws or policies\n• Loss of job opportunities or educational placements\n• Travel expenses incurred\n• Consequential, indirect, or incidental damages\n• Losses exceeding the fees paid for our services'
        },
        {
          subtitle: '6.3 Third-Party Actions',
          text: 'We are not responsible for:\n• Actions or decisions of embassies, consulates, or immigration authorities\n• Services provided by third parties (translators, medical examiners, etc.)\n• Changes to university admission requirements\n• Employer decisions or job offer withdrawals\n• Travel restrictions or entry denials'
        },
        {
          subtitle: '6.4 Force Majeure',
          text: 'We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including:\n• Natural disasters\n• War, terrorism, or civil unrest\n• Government actions or policy changes\n• Pandemics or health emergencies\n• Technical failures or cyberattacks\n• Strikes or labor disputes'
        }
      ]
    },
    {
      icon: UserX,
      title: '7. Confidentiality and Data Protection',
      content: [
        {
          subtitle: '7.1 Confidential Information',
          text: 'We will treat all your personal information and documents as confidential and will:\n• Store documents securely\n• Use information only for the purposes of providing our services\n• Not disclose information to unauthorized parties\n• Implement appropriate security measures\n\nFor details on how we handle your data, please refer to our Privacy Policy.'
        },
        {
          subtitle: '7.2 Permitted Disclosures',
          text: 'We may disclose your information to:\n• Immigration authorities and embassies (as required for applications)\n• Educational institutions and employers (as part of the application process)\n• Third-party service providers (document verification, translations, etc.)\n• Legal authorities (when required by law)\n• Professional advisors (under confidentiality obligations)'
        },
        {
          subtitle: '7.3 Document Retention',
          text: 'We retain your documents and records for a period of 7 years from the completion of services, or as required by law. After this period, documents will be securely destroyed.\n\nYou are responsible for maintaining your own copies of all important documents.'
        }
      ]
    },
    {
      icon: AlertCircle,
      title: '8. Intellectual Property',
      content: [
        {
          subtitle: '8.1 Ownership',
          text: 'All content on our website, including text, graphics, logos, images, and software, is the property of R&B Global Consultancy and is protected by intellectual property laws.\n\nYou may not:\n• Reproduce or copy our content without permission\n• Use our branding or logos without authorization\n• Modify or create derivative works\n• Use our materials for commercial purposes'
        },
        {
          subtitle: '8.2 Client Materials',
          text: 'You retain ownership of all documents and materials you provide to us. By engaging our services, you grant us a license to use these materials solely for the purpose of providing our services.'
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
          <div className="absolute inset-0 bg-[url('/images/terms-hero.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center">
              <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Terms & Conditions
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Please read these terms carefully before using our services. By engaging R&B Global Consultancy, you agree to these terms.
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
              className="bg-amber-50 border-l-4 border-amber-600 p-6 sm:p-8 rounded-r-lg mb-12"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Important Notice</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                These Terms and Conditions ("Terms") govern your use of services provided by R&B Global Consultancy. This is a legally binding agreement. Please read these terms carefully and ensure you understand them fully before engaging our services.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, along with our Privacy Policy.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">9. Governing Law and Dispute Resolution</h2>
              <div className="ml-0 sm:ml-16 space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">9.1 Governing Law</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Chittagong, Bangladesh.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">9.2 Dispute Resolution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    In the event of any dispute, we encourage clients to first contact us directly to resolve the matter amicably. If a resolution cannot be reached through negotiation, the parties agree to attempt mediation before pursuing litigation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">9.3 Complaints Procedure</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If you have a complaint about our services:\n1. Submit your complaint in writing to info@rnbgc.com\n2. Include your name, contact details, and a detailed description of the issue\n3. We will acknowledge receipt within 2 business days\n4. We will investigate and respond within 10 business days\n5. If you are not satisfied with our response, you may escalate to management
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">10. General Provisions</h2>
              <div className="ml-0 sm:ml-16 space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">10.1 Entire Agreement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms and Conditions, together with our Privacy Policy and any service agreement you sign, constitute the entire agreement between you and R&B Global Consultancy regarding our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">10.2 Severability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">10.3 Waiver</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">10.4 Assignment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations without restriction.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">11. Contact Information</h2>
              <div className="ml-0 sm:ml-16">
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email:</p>
                      <a href="mailto:info@rnbgc.com" className="text-red-600 hover:text-red-700">
                        info@rnbgc.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Scale className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
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

            {/* Acknowledgment Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-6 sm:p-8 rounded-r-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Acknowledgment</h3>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you acknowledge that you have read these Terms and Conditions, understand them, and agree to be bound by them. If you do not agree to these terms, please do not use our services.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                Thank you for choosing R&B Global Consultancy. We look forward to helping you achieve your immigration goals.
              </p>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              Now that you understand our terms, let's begin your immigration journey together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors text-base sm:text-lg font-semibold"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default TermsConditionsPage
