import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Icons } from "@/components/icons"

const AboutOur = () => {
  return (
    <div className="container">
      <div className="pb-24">
        <h4 className="relative z-20 mb-4 bg-primary-foreground pt-5 text-center text-xl text-primary">
          About Our
        </h4>
        <h1 className=" text-center font-crimson text-5xl font-semibold">
          Technology Development Team
        </h1>
        <div className="relative ">
          <div className="absolute -top-6 right-[20%]">
            {/* <Icons.aboutOurCurved /> */}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex flex-col gap-y-8">
          <div className="flex items-center justify-between gap-8 pb-10">
            <div className="w-1/2">
              <h3 className="group cursor-pointer  pb-2 text-4xl text-secondary underline hover:border-white">
                <span className="mr-1 font-semibold">
                  Technical Proficiency and <br /> Industry Acumen
                </span>
                <ArrowRight
                  size={20}
                  className="ml-1 inline-flex -rotate-45 text-secondary transition-all duration-200 ease-in-out group-hover:rotate-0"
                />
              </h3>
            </div>
            <div className="flex w-1/2 flex-col gap-y-8">
              <TechTeamCard
                title="Platform Development"
                description="Solid expertise in technology platform development ensures a robust and reliable marketplace."
              />
              <TechTeamCard
                title="Database Management"
                description="Sophisticated database solutions for seamless user interactions."
              />
              <TechTeamCard
                title="Industry Knowledge"
                description="Insights into unique needs, challenges, and trends ensure our platform is in sync with market dynamics."
              />
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-8 pb-10">
            <div className="w-1/2">
              <h3 className="group cursor-pointer  pb-2 text-4xl text-secondary underline hover:border-white">
                <span className="mr-1 font-semibold">
                  Agile User Experience and <br /> Stakeholder Collaboration
                </span>
                <ArrowRight
                  size={20}
                  className="ml-1 inline-flex -rotate-45 text-secondary transition-all duration-200 ease-in-out group-hover:rotate-0"
                />
              </h3>
            </div>
            <div className="flex w-1/2 flex-col gap-y-8">
              <TechTeamCard
                title="User-Centric Design"
                description="A deep focus on understanding user pain points to provide a seamless & intuitive platform."
              />
              <TechTeamCard
                title="Effective Collaboration"
                description="Transparent communication channels for all stakeholders, including buyers and sellers."
              />
              <TechTeamCard
                title="Inquiry & Catalog Manage"
                description="Features like digital showrooms and real-time inquiry management make business operations smoother."
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-8 pb-10">
            <div className="w-1/2">
              <h3 className="group cursor-pointer  pb-2 text-4xl text-secondary underline hover:border-white">
                <span className="mr-1 font-semibold">
                  Scalability Security and <br /> Continuous Learning
                </span>
                <ArrowRight
                  size={20}
                  className="ml-1 inline-flex -rotate-45 text-secondary transition-all duration-200 ease-in-out group-hover:rotate-0"
                />
              </h3>
            </div>
            <div className="flex w-1/2 flex-col gap-y-8">
              <TechTeamCard
                title="Scalable Solutions"
                description="Built for scalability to manage increasing user demands effectively."
              />
              <TechTeamCard
                title="Information Security"
                description="Proficiencies in maintaining the confidentiality and security of stakeholder information."
              />
              <TechTeamCard
                title="Continuous Learning"
                description="Ongoing investment in staying updated with the latest trends & innovations in fashion, technology, and related domains."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutOur

const TechTeamCard = ({
  title,
  description,
}: {
  title: string
  description: string
  icon?: any
}) => {
  return (
    <>
      <div className="flex items-start gap-2">
        <div>
          <Image
            src="/services/research.png"
            width={50}
            height={50}
            alt="research"
          />
        </div>
        <div>
          <h3 className="pb-3 font-crimson text-xl font-semibold text-[#755F39]">
            {title}
          </h3>
          <p className="w-9/12 text-sm text-secondary">{description}</p>
        </div>
      </div>
    </>
  )
}
