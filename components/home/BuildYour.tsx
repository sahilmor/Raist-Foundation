"use client"

import React, { useState } from "react"

import { cn } from "@/lib/utils"

import BuildTab from "./BuildTab"

const tabsArray = [
  "Build your Digital Identity",
  "Manage Real-Time Enquiries",
  "Create your own Digital Catalogues",
  "Manage Real-Time Quotations",
]

const BuildYour = () => {
  const slideIndex = 0
  // console.log(slideIndex, " slide")
  return (
    <>
      <section className="relative bg-secondary py-32">
        <div className="container ">
          <div className="flex justify-center">
            <TabNavigation tabs={tabsArray} />
          </div>
          <div className="pt-14">
            <BuildTab text={tabsArray[slideIndex]} />
          </div>
        </div>
      </section>
    </>
  )
}

export default BuildYour

type TabProps = {
  label: string
  active: boolean
  onClick: () => void
}

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`${
        active
          ? "bg-[#C8EE79] text-secondary"
          : "bg-transparent text-secondary-foreground"
      } mx-1 rounded-full px-8 py-3 transition-colors duration-300 ease-in-out`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
type TabNavigationProps = {
  tabs: string[]
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div
      className={cn(
        "mt-8 flex w-fit justify-center rounded-full border border-solid border-[#8A9CA0]/30",
        activeTab === 0 && "border-l-0",
        activeTab === tabs?.length - 1 && "border-r-0",
        "transition-all duration-300 ease-in-out"
      )}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab}
          active={index === activeTab}
          onClick={() => {
            setActiveTab(index)
            
          }}
        />
      ))}
    </div>
  )
}
