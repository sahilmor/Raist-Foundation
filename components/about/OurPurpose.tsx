import React from "react"
import Image from "next/image"

import { Icons } from "@/components/icons"

const OurPurpose = () => {
  return (
    <div>
      {" "}
      <div className="relative bg-primary-foreground md:pb-40 md:pt-16">
        <div className="container">
          <div className="flex flex-col md:flex-row  pb-6 pt-20">
            <div className="w-full md:w-[50%]">
              <h3 className=" mb-3 md:text-5xl text-base font-semibold text-donate text-center md:text-start">
                Our Mission
              </h3>
              <div className=" flex flex-col gap-y-4 pt-3 text-xs md:text-lg text-center md:text-start">
                <div className=" text-secondary-foreground">
                  Our mission at Raist Foundation is to provide a brighter
                  future for underprivileged children through a multi-faceted
                  approach that combines compassion, sustenance, and education.
                  We are driven by a deep commitment to alleviate the hardships
                  faced by impoverished kids and offer them a chance to thrive.
                  By providing essential necessities such as food and clothing,
                  we ensure their basic needs are met. Furthermore, we empower
                  these young minds with educational resources, enabling them to
                  break free from the cycle of poverty and reach their full
                  potential. Our overarching goal is to build a society where
                  every child, regardless of their circumstances, has an equal
                  opportunity to grow, learn, and dream. With unwavering
                  dedication, Raist Foundation strives to be a beacon of hope
                  and transformation in the lives of these children, one meal,
                  one outfit, and one book at a time.
                  
        
                </div>
           
              </div>
            </div>
            <div className=" md:pl-24 pt-2">
              <Image className="rounded-full shadow-lg "
                src="/assets/children1.png"
                alt="models"
                width={442}
                height={440
              
                }
              />
            </div>
          </div>
        </div>
      
      </div>
     
    </div>
  );
}

export default OurPurpose
