import React from "react"
import Image from "next/image"

import { Icons } from "@/components/icons"

const Missions = () => {
  return (
    <div >
      <div className="relative -z-10 bg-primary-foreground md:pb-28 md:pt-20 pb-10 pt-1">
        <div className="container ">
          <div className="md:mt-16  flex flex-col md:flex-row-reverse items-center text-center md:text-start 2xl:mt-40">
            <div className="relative w-full  md:w-1/2 mb-4 md:mb-0">
              <h1 className="md:pt-4 font-crimson md:text-5xl text-base font-semibold leading-snug text-donate ">
                Our Vision
              </h1>
              <p className="md:mt-8 pt-1 text-sm md:text-lg font-semibold text-black">{`Raist Foundation ‘transforming lives’.`}</p>
              <p className="mt-4 pt-1 text-xs md:text-lg text-black/90">
                Empowering Every Child for a Brighter Tomorrow, <br />
                This vision statement encapsulates the organization's commitment
                to ensuring that every child not only has access to nutritious
                food and clothing but also the opportunity to build a brighter
                and more promising future. It emphasizes the holistic
                development and well-being of children, with a focus on their
                long-term success and happiness.
              </p>
            </div>
            <div className="relative pb-4">
              <div className="flex md:mr-3 md:pr-36">
                <Image
                  className="rounded-full shadow-lg"
                  src="/assets/child3.png"
                  width={463}
                  height={400}
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Missions
