"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Icons } from "@/components/icons"

type Slide = {
  image: string
  name: string
  review: string
}

type AutoplaySliderProps = {
  slides?: Slide[]
  autoplayInterval?: number
}

const WhyChoose = ({
  //   slides,
  autoplayInterval = 5000,
}: AutoplaySliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex === slides.length - 1) {
          return 0
        }
        return prevIndex + 1
      })
    }, autoplayInterval)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplayInterval, slides.length])

  return (
    <>
      <section className="relative bg-white md:py-32 pb-20    ">
        <div className="container ">
          <div className="flex flex-col md:flex-row  items-center gap-x-20">
            <div className="w-full md:w-1/2 text-center">
              <div>
                <h3 className="inline-flex items-center text-sm font-bold md:text-lg text-primary ">
                  <span className="mr-3">Why to connect with us?</span>{" "}
                  {/* <Icons.lineArrow /> */}
                </h3>
                <h1 className="md:pt-4 text-base md:text-5xl font-semibold leading-snug text-black transition-all duration-300 ease-in-out ">
                  {slides[activeIndex]?.title ||
                    "To help and support the needy people in the society"}
                </h1>
                <p className="mt-5 text-secondary-foreground">
                  {slides[activeIndex]?.description ||
                    "We are helping children suffering from hunger by providing them with food and other basic necessities. We are also helping them to get education and other resources to make their life better. "}
                </p>
              </div>
            </div>
            <div className="w-1/2 ">
              <div className=" flex justify-center rounded-xl pt-2 md:pt-0 ">
                <Image
                  className="rounded-xl"
                  src={slides[activeIndex]?.image}
                  width={350}
                  height={470}
                  alt="children"
                />
              </div>
            </div>
            <div className="mt-14 flex gap-x-1 transition-all duration-300 ease-linear md:hidden">
              {/* <Image
                    src="/dot-slide.png"
                    width={64}
                    height={6}
                    alt="slide"
                  /> */}
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`rounded-xl p-1  duration-300  ${
                    index === activeIndex ? "bg-donate px-4 " : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose

const slides = [
  {
    image: "/assets/children1.png",
    title: "To help and support the needy people in the society",
    description:
      " We are helping children suffering from hunger by providing them with food and other basic necessities. We are also helping them to get education and other resources to make their life better.",
  },
  {
    image: "/assets/child2.png",
    title: "Great Community and Support network",
    description:
      "we are a group of more than 350 people and have successfully helped more than 1000 people in the last ten months. We are also helping them to get education and other resources to make their life better.",
  },
  {
    image: "/assets/child3.png",
    title: "To make our society a better place to live in",
    description:
      " We are helping children suffering from hunger by providing them with food and other basic necessities. We are also helping them to get education and other resources to make their life better. ",
  },
]
