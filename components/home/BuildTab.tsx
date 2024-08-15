import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// fill="#14252B"
const BuildTab = ({ text }: { text: string }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-[76%] flex-row-reverse items-center gap-x-10">
          <div className="w-1/2 ">
            <div className="flex justify-center">
              <Image src="/demo_cl.png" width={329} height={399} alt="store" />
            </div>
          </div>
          <div className="w-1/2">
            <div>
              <h3 className="group inline-flex cursor-pointer items-center border-b border-solid border-white/80 pb-2 text-4xl text-white hover:border-white">
                <span className="mr-1">
                  {text || "Build your Digital Identity"}
                </span>{" "}
                <ArrowRight
                  size={20}
                  className="ml-1 -rotate-45 transition-all duration-200 ease-in-out group-hover:rotate-0"
                />
              </h3>
              <p className="mt-8 text-white/90">
                Build your digital identity to boost your presence so existing
                and potential clients can connect with you instantly.
              </p>
              <ul className="mt-4 ">
                <li
                  className="home-list-item mb-1 ml-5 pl-3 text-sm text-[#C8EE79]"
                  style={{ listStyleImage: "url('/list-c.svg')" }}
                >
                  Showcase your company strengths
                </li>
                <li
                  className="home-list-item mb-1 ml-5 pl-3 text-sm text-[#C8EE79]"
                  style={{ listStyleImage: "url('/list-c.svg')" }}
                >
                  Exhibit your product capabilities
                </li>
                <li
                  className="home-list-item mb-1 ml-5 pl-3 text-sm text-[#C8EE79]"
                  style={{ listStyleImage: "url('/list-c.svg')" }}
                >
                  Broaden your global customer reach
                </li>
                <li
                  className="home-list-item mb-1 ml-5 pl-3 text-sm text-[#C8EE79]"
                  style={{ listStyleImage: "url('/list-c.svg')" }}
                >
                  Find your right-customer fit
                </li>
                <li
                  className="home-list-item mb-1 ml-5 pl-3 text-sm text-[#C8EE79]"
                  style={{ listStyleImage: "url('/list-c.svg')" }}
                >
                  Create and share product catalogues with clients
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuildTab
