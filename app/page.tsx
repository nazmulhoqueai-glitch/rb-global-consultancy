import React from 'react'
import TopNav from '@/components/navigation/TopNav'
import MainNav from '@/components/navigation/MainNav'
import HeroSlider from '@/components/hero/HeroSlider'
import AboutCompany from '@/components/sections/AboutCompany'
import Services from '@/components/sections/Services'
import PartnersAndCountries from '@/components/sections/PartnersAndCountries'
import WorkingProcess from '@/components/sections/WorkingProcess'
import ConsultantTeam from '@/components/sections/ConsultantTeam'
import Testimonials from '@/components/sections/Testimonials'
import Footer from '@/components/navigation/Footer'

export default function Home() {
  return (
    <>
      <main>
        <TopNav />
        <MainNav />
        <HeroSlider />
        <AboutCompany />
        <Services />
        <PartnersAndCountries />
        <WorkingProcess />
        <ConsultantTeam />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
} 