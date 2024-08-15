"use client"

import React from "react"
import { useScrollIntoView } from "@mantine/hooks"

import AboutCompany from "@/components/about/AboutCompany"
import AboutHero from "@/components/about/AboutHero"
import Missions from "@/components/about/Missions"
import OurOfferings from "@/components/about/OurOfferings"
import OurPurpose from "@/components/about/OurPurpose"
import WantToKnow from "@/components/about/WantToKnow"
import BuyHeader from "@/components/home/Header"
import Footer from "@/components/Footer"

const AboutUs = () => {
  const { scrollIntoView: scrollIntoView2, targetRef: targetRef2 } =
    useScrollIntoView<HTMLDivElement>({
      offset: 40,
    })

  const handleBackToTop = () => {
    scrollIntoView2({
      alignment: "center",
    })
  }
  return (
    <div>
      <div ref={targetRef2}>
        <BuyHeader />
      </div>
      <div className="bg-primary-foreground md:pb-56 pb-80">
        <AboutHero />
      </div>
      <Missions />

        <OurPurpose />
        
        <WantToKnow />
      
     
      <Footer />
    </div>
  )
}

export default AboutUs
