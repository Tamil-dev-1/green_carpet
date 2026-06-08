import React from 'react'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import WhoWe from '../../components/whoWE/WhoWe'
import ClimateChange from '../../components/climatechange/ClimateChange'
import ClimateCTA from '../../components/cta1/ClimateCTA'
import CTA2 from '../../components/cta2/CTA2'
import WomenRise from '../../components/womenRise/WomenRise'
import Newsroom from '../../components/news_room/NewsRoom'
// import EducationGallery from '../../components/gallery_marquee/EducationGallery'
import ImgCarousel from '../../components/imgCarousel/ImgCarousel'
import SDG from '../../components/sdg_goals/SDG'
import Chairman from '../../components/chairman/Chairman'
import GetInvolved from '../../components/getInvolved/GetInvolved'
import Partners from '../../components/partners/Partners'
// getInvlovedImge part
// import heroBg from './assets/your-banner.jpg';


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhoWe />
      <ClimateChange />
      <ClimateCTA />
      <ImgCarousel />
      <WomenRise />
      <CTA2 />
      <Newsroom />
      {/* <EducationGallery /> */}
      <SDG />
      <Chairman />
      <GetInvolved />
      {/* <GetInvolved /><CommunitySection bannerImage={heroBg} /> */}
      <Partners />
    </div>
  )
}

export default Home
