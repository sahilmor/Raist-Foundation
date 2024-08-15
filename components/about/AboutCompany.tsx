"use client";
import React from "react"
import Image from "next/image"

import { Icons } from "@/components/icons"

const AboutCompany = () => {
  return (
    <div className="relative">
      {" "}
      <section className="bg relative pb-10">
        <div className="container ">
          <div className="flex flex-row-reverse items-center gap-x-10">
            <div className="w-3/5 ">
              <div className=" flex justify-center">
                <Image
                  src="/traceability/Illustartion.png"
                  width={560}
                  height={560}
                  alt="store"
                  className="z-50"
                />
              </div>
            </div>
            <div className="w-2/5">
              <div>
                <h3 className="inline-flex items-center text-lg text-primary">
                  <span className="mr-3">Let’s hear about</span>{" "}
                  {/* <Icons.lineArrow /> */}
                </h3>
                <h1 className="pt-2 text-5xl font-semibold leading-snug text-secondary">
                  Our Technology Development Team
                </h1>
                <p className="my-7 text-lg text-secondary">
                  {` Our global pool of professionals experts possess the following capabilities: `}
                </p>
                <AboutFeatCard
                  title="01"
                  description="Continuous learning faculties to stay updated with the latest trends and innovations in fashion, technology and related domains."
                />
              </div>
            </div>
          </div>
          <div className="my-12 grid grid-cols-3 gap-8">
            {aboutData.map((item) => (
              <AboutFeatCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div>
            <div className="bg-primary-foreground py-40">
              <div className="container">
                <div className=" relative bg-[#E2E8C5] px-14 py-16">
                  <div className="flex justify-between">
                    <div className="w-2/5">
                      <h5 className=" font-crimson text-4xl font-semibold text-[#5E7926]">
                        The Global MarketSpace
                      </h5>
                      <p className="mt-2 w-fit bg-white px-3 py-1 text-base text-[#5E7926]">
                        is powered by Cotton2Catwalk
                      </p>
                    </div>
                    <p className="mt-4 pr-10 text-secondary">
                      We also provide{" "}
                      <span className="font-semibold">{`‘Marketing Services’`}</span>{" "}
                      for apparel and fashion industry stakeholders <br />{" "}
                      worldwide seeking to grow their global footprint.
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <svg
                      width="387"
                      height="122"
                      viewBox="0 0 387 122"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M428 8.01966C306.555 -33.2395 289.029 121.568 156.407 104.86C114.127 99.5339 62.5 76 1 136"
                        stroke="#9ACE71"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutCompany

const AboutFeatCard = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div>
      <div className="mb-2 space-y-4">
        <h5 className="text-xl font-semibold text-primary">{title}</h5>
        <div>
          <svg
            width="140"
            height="2"
            viewBox="0 0 140 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="140" y2="1" stroke="#F6851F" stroke-width="2" />
          </svg>
        </div>
        <p className="w-[90%] text-lg text-secondary">{description}</p>
      </div>
    </div>
  )
}

const aboutData = [
  {
    title: "02",
    description:
      "Sound industry knowledge and insights concerning unique needs, challenges and trends.",
  },
  {
    title: "03",
    description:
      "Effective collaboration and transparent communication with all the stakeholders.",
  },
  {
    title: "04",
    description:
      "Deep user-centric approach through understanding pain points, providing a seamless and intuitive platform. ",
  },
  {
    title: "05",
    description:
      "Solid technical expertise in technology platform development and database management.",
  },
  {
    title: "06",
    description:
      "Scalability and performance competencies to manage increasing demands effectively.",
  },
  {
    title: "07",
    description:
      "Security and privacy proficiencies in maintaining information confidentially respective to each stakeholder.",
  },
  {
    title: "08",
    description:
      "Strong data and analytics skills to manage and analyse data, optimising processes and offering valuable analytics features.",
  },
  {
    title: "09",
    description:
      "Agile development practices quickly respond to changing requirements, ensuring flexibility and adaptability throughout the development process.",
  },
  {
    title: "10",
    description:
      "Reliable quality assurance abilities by monitoring, identifying and resolving quality issues through various stages of production.",
  },
]
