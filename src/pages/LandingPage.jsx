import CTA from '@/components/landingComponents/CTA'
import FamousTrips from '@/components/landingComponents/FamousTrips'
import Features from '@/components/landingComponents/Features'
import Footer from '@/components/landingComponents/Footer'
import Hero from '@/components/landingComponents/Hero'
import Navbar from '@/components/landingComponents/Navbar'
import Testimmonials from '@/components/landingComponents/Testimmonials'
import React from 'react'

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Features />
        <FamousTrips />
        <Testimmonials />
        <CTA />
        <Footer />
    </>
  )
}

export default LandingPage