import React from 'react'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import WhoWe from '../../components/whoWE/WhoWe'
import ClimateChange from '../../components/climatechange/ClimateChange'
import ClimateCTA from '../../components/cta1/ClimateCTA'
import CTA2 from '../../components/cta2/CTA2'


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhoWe />
      <ClimateChange />
      <ClimateCTA />
      <CTA2 />
    </div>
  )
}

export default Home
