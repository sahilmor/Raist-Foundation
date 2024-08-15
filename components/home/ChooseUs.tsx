import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Icons } from "@/components/icons"

const ChooseUs = () => {
  return (
    <>
      <section className="bg-white py-32">
        <div className="container relative">
          <div className="flex flex-col md:flex-row-reverse items-center gap-x-10">
            <div className="w-full md:w-1/2 text-center">
              <div className="">
                <h3 className="inline-flex items-center font-bold text-sm md:text-lg text-primary">
                  <span className="mr-3">
                    Offering assistance in every conceivable manner.{" "}
                  </span>{" "}
                  {/* <Icons.lineArrow className="w-20" /> */}
                </h3>
                <h1 className="md:pt-4 font-crimson text-base md:text-5xl font-semibold leading-snug text-secondary">
                  Providing nourishment to starving children is a noble
                  endeavor. <br />
                </h1>
                <p className="md:mt-5 text-secondary-foreground">
                  We are alleviating the plight of children grappling with
                  hunger by furnishing them with sustenance and fundamental
                  requisites. Furthermore, we are facilitating their access to
                  education and other essential resources, thereby enhancing the
                  quality of their lives.
                </p>
              </div>
            </div>
            <div className="w-1/2  ">
              <div className="flex justify-center pt-10">
                <Image
                  className="rounded-xl shadow-lg"
                  src="/assets/feeding2.png"
                  width={400}
                  height={600}
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs
