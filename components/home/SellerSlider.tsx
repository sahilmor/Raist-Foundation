"use client"

import { Fragment, useCallback, useEffect, useState } from "react"
import { Carousel, Embla } from "@mantine/carousel"
import { Progress, rem } from "@mantine/core"

// import { nanoid } from "nanoid"

import SellerSliderCard from "./SellerSliderCard"

export default function SellerSlider() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [embla, setEmbla] = useState<Embla | null>(null)

  const handleScroll = useCallback(() => {
    if (!embla) return
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [embla, setScrollProgress])

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll)
      handleScroll()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embla])

  return (
    <>
      <Carousel
        dragFree
        slideSize="35%"
        slideGap="xl"
        height={640}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <Fragment key={i}>
            <Carousel.Slide>
              <SellerSliderCard />
            </Carousel.Slide>
          </Fragment>
        ))}
      </Carousel>
      <Progress
        value={scrollProgress}
        styles={{
          // bar: { transitionDuration: "0ms" },
          root: { maxWidth: rem(960) },
        }}
        color="dark"
        size="sm"
        mx="auto"
      />
    </>
  )
}
