"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
export default function DefaultCarousel() {
  return (
    <Carousel
    // leftControl="<"
    //   rightControl=">"
    // indicators={false}
      slideInterval={5000}

    >
      <Image
        height={500}
        width={500}
        alt="..."
        className="opacity-50"
        src="/carousel/cros1.jpg"
      />
      <Image
        height={500}

        width={500}
        alt="..."
        className="opacity-50"
        src="/carousel/crous3.jpg"
      />
      <Image
        height={500}
        width={500}
        alt="..."
        className="opacity-50"
        src="/carousel/crous2.jpg"
      />
      <Image
        height={500}
        width={500}
        alt="..."
        className="opacity-50"
        src="/carousel/crous4.jpg"
      />
      <Image
        height={500}
        width={500}
        alt="..."
         className="opacity-50"
        src="/carousel/cros1.jpg"
      />
    </Carousel>
  );
}
