import React from "react"
import Image from "next/image"

import { Icons } from "@/components/icons"

const OurOfferings = () => {
  return (
    <div>
      <div className="container">
        <div className="relative bg-[#F0E7D4] p-24">
          <div className="flex justify-center py-6">
            <div className="relative">
              <h2 className=" text-5xl font-semibold leading-snug text-[#755F39]">
                Our Solution
              </h2>
              <div className="absolute -right-8">
                <svg
                  width="229"
                  height="14"
                  viewBox="0 0 229 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M218.5 12.7961H139.801L228.435 1H0"
                    stroke="#755F39"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center py-8">
              <p className="w-full text-lg">
                Cotton2Catwalk powers{" "}
                <span className="font-semibold">The Global MarketSpace,</span>{" "}
                or complete technology solution for managing information and
                communication and facilitating worldwide foreign trade in the
                apparel and fashion industry, connecting thousands of brands
                worldwide,
              </p>
            </div>
            <div className="flex justify-center py-9">
              <div className="relative w-full bg-[#F7F3EB] p-10">
                <h3 className=" text-3xl font-semibold leading-snug text-secondary">
                  The Global Marketplace
                </h3>
                <div className="absolute left-0 top-8">
                  <svg
                    width="8"
                    height="54"
                    viewBox="0 0 8 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0C4.41828 0 8 3.58172 8 8V46C8 50.4183 4.41828 54 0 54V0Z"
                      fill="#755F39"
                    />
                  </svg>
                </div>
                <br />

                <p>
                  The Global Marketplace is a complete technology solution for
                  managing information and communication, and facilitating
                  worldwide foreign trade in the apparel and fashion industry.
                  <br />
                </p>
                <p className="py-5 font-semibold">
                  The Global MarketSpace modules are:
                </p>
                <div className="flex flex-wrap gap-5">
                  {[
                    "Digital Identity Management",
                    "Order Management",
                    "Total Quality Management",
                    "Showcasing products",
                    "Commercial Documents Management",
                  ].map((item, index) => {
                    return (
                      <span
                        key={index}
                        className="w-max rounded-sm bg-[#F0E7D4] px-8 py-2 text-base text-[#755F39]"
                      >
                        {item}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center py-8">
              <p className="w-full text-lg">
                Cotton2Catwalk also offers{" "}
                <span className="font-semibold">
                  International Marketing Services
                </span>{" "}
                , for various apparel and fashion factories globally, where we
                grow their customer base by connecting them with buyers,
                designers and financiers everywhere.
              </p>
            </div>
            <div className="flex justify-center py-9">
              <div className="relative w-full bg-[#F7F3EB] p-10">
                <h3 className=" text-3xl font-semibold leading-snug text-secondary">
                  International Marketing Services
                </h3>
                <div className="absolute left-0 top-8">
                  <svg
                    width="8"
                    height="54"
                    viewBox="0 0 8 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0C4.41828 0 8 3.58172 8 8V46C8 50.4183 4.41828 54 0 54V0Z"
                      fill="#755F39"
                    />
                  </svg>
                </div>
                <br />

                <p>
                  International Marketing Services for various apparel and
                  fashion factories globally, where we grow their customer base
                  by connecting them with buyers, designers, and financers
                  everywhere
                  <br />
                </p>
                <p className="py-5 font-semibold">
                  International Marketing Services includes:
                </p>
                <div className="flex flex-wrap gap-5">
                  {[
                    "Understanding the Market",
                    "Product Promotion",
                    "Managing Relationships",
                    "Showcasing Products",
                    "Streamlining Logistics",
                    "Entering New Markets",
                    "Closing Deals",
                    "Industry Networking",
                  ].map((item, index) => {
                    return (
                      <span
                        key={index}
                        className="w-max rounded-sm bg-[#F0E7D4] px-8 py-2 text-base text-[#755F39]"
                      >
                        {item}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-primary-foreground pb-24" />
    </div>
  )
}

export default OurOfferings
