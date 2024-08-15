import React from "react"
import Image from "next/image"

// import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

const SellerSliderCard = () => {
  return (
    <>
      <article className="rounded">
        <div className="bg-donate p-5 pb-0">
          <div className="flex items-center gap-x-4 pb-5">
            <div>
             
            </div>
            <div>
              <h2 className="text-lg font-semibold text-secondary">
                Yash
              </h2>
              <p className="pt-3 text-sm text-secondary-foreground">
                Hong Kong
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/young.png"
              alt="seller-slider-card"
              width={440}
              height={400}
            />
          </div>
        </div>
        
        <div className="bg-white p-5 ">
          <h2 className="text-lg font-semibold text-secondary">
            Azor Capsule, Concreto
          </h2>
          <p className="pt-2 text-sm text-secondary">
            Natural, Cabled Yarn, 100 percent Cashgora
          </p>
        </div>
        
      </article>
    </>
  )
}

export default SellerSliderCard
