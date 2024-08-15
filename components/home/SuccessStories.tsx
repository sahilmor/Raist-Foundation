"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

const SuccessStories = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive(
      active === data.length - 1 ? (active) => (active = 0) : active + 1
    );
  };

  const handlePrev = () => {
    setActive(
      active === 0 ? (active) => (active = data.length - 1) : active - 1
    );
  };
  return (
    <>
      <section className="bg-primary-foreground py-32">
        <div className="container relative">
          <div>
            <h3 className="inline-flex items-center text-lg text-primary">
              <span className="mr-3 mb-5 font-bold">
                Feedback and Reviews
              </span>{" "}
              {/* <Icons.lineArrow /> */}
            </h3>
            <div className="flex w-full justify-between ">
              <div>
                <h1 className="pt-2 text-4xl font-bold leading-snug text-secondary">
                  Witness the Transformation
                </h1>
              </div>
              <div className="flex gap-x-3">
                <button
                  disabled={active === 0 ? true : false}
                  onClick={handlePrev}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white disabled:opacity-30"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={active === data.length - 1 ? true : false}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white disabled:opacity-30"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="h-[440px]">
            {data?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "container absolute left-0 top-28 w-full transition-opacity",
                    index === active ? "opacity-100" : "opacity-0"
                  )}
                >
                  <SuccessStoriesCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default SuccessStories;

interface SuccessStoriesCardProps {
  data: SuccessStoriesData;
}

const SuccessStoriesCard = ({ data }: SuccessStoriesCardProps) => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row items-center  justify-between gap-x-8 ">
          <div className="relative md:w-1/2 pb-24 ">
            <Image
              src="/inverted-commas.png"
              width={60}
              height={60}
              alt="comma"
              className=" invisible md:visible"
            />
            <p className="text-base md:text-xl text-[#6b8189]">{data?.feedback}</p>
            <p className="absolute right-12  pt-3 md:pt-12  text-sm md:text-xl text-[#6b8189]">
              {data?.name}<br />{data?.designation}<br />{data?.place}
            </p>
          </div>
          {/* <div className=" flex w-1/2 justify-end">
            <div className="w-fit bg-[#EDE2CF] p-5 rounded-lg">
              <Image src={data?.image} width={425} height={340} alt="seller" className="rounded-lg" />
              <div className="relative">
               
                
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

type SuccessStoriesData = {
  id: number;
  feedback: string;
  place: string;
  designation: string;
  name: string;
  image:string;
};

const data: SuccessStoriesData[] = [
  {
    image: "/feedback/feedback3.jpg",
    id: 1,
    name: "Ravi",
    feedback:
      "I've been a volunteer with Raist Foundation for over a year now, and I'm continually amazed by the incredible impact this organization has on the lives of underprivileged children. It's heartwarming to see how Raist Foundation consistently provides food and clothing to these kids in need. The smiles on their faces when they receive their meals and new clothes are priceless. I'm proud to be a part of this organization and the positive change it brings to these children's lives.",
    designation: "Student",
    place: "Chandigarh University",
  },

  {
    image: "/feedback/feedback2.jpg",
    id: 2,
    feedback:
      "Raist Foundation's commitment to supporting impoverished children with food and clothing is nothing short of remarkable. As a donor, I've seen the transparent and effective way they use resources to provide these essentials to those who need it most. It's not just about feeding and clothing the children; it's about restoring their dignity and giving them hope for a brighter future. I wholeheartedly support their cause.",
    place: "Delhi University",
    designation: "Volunteer",
    name: "Anjali Malik",
  },
  {
    image: "/feedback/student1.jpg",
    id: 3,
    feedback:
      "I had the privilege of witnessing the transformative work of Raist Foundation firsthand during a recent visit to one of their outreach programs. The dedication of the team and the joy in the children's eyes when they received nutritious meals and new clothes were truly heartwarming. Raist Foundation is making a significant impact on the lives of these young souls, ensuring they have the basic necessities that every child deserves",
    place: "Chandigarh University",
    designation: "Student",
    name: "Ronak",
  },

  {
    image: "/feedback/feedback4.jpg",
    id: 4,
    feedback:
      "Raist Foundation's approach to helping underprivileged children is inspiring. They not only provide food and clothing but also focus on creating a supportive environment for these kids to thrive. The foundation's holistic approach ensures that these children not only have full bellies and warm clothes but also opportunities for education and personal development. Raist Foundation is genuinely changing lives and providing a path to a brighter future for these children.",
    place: "Chandigarh University",
    designation: "Student",
    name: "Shreyaa",
  },
  
];
