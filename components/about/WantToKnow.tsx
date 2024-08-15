import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Icons } from "@/components/icons"

const WantToKnow = () => {
  return (
    <>
      <div className="relative bg-secondary md:pb-36 md:pt-20">
        <div className="container flex md:flex-row flex-col justify-between md:gap-36">
          <div className="w-full md:w-3/5 text-center md:text-start">
            <h1 className=" justify-center pt-5 text-sm md:text-5xl font-semibold leading-snug text-white transition-all duration-300 ease-in-out ">
              About our Founder & Director
            </h1>
            <p className="my-5 text-xs md:text-lg text-white">
              {`‘Vishal Kumar’ When I initiated this NGO, I had very little support from the community, and I had to tackle most challenges on my own. Initially, my parents were also hesitant about my vision. However, I persevered and successfully rallied the support of more than 350 volunteers for our organization. I firmly believe that significant achievements take time, consistent effort, and unwavering determination. `}
              <br />
              {`In society, we encounter two types of individuals: 'Hard Workers' and 'Smart Workers.' The hardworking individuals invest their time in their jobs and household responsibilities, diligently facing challenges in every aspect of their lives. In contrast, smart workers maintain composure, perform tasks efficiently, and organize their work, exhibiting grace under pressure. The majority typically fall into the former category, believing in staying grounded, while those who dare to be unique often reach extraordinary heights. I encourage you to engage in productive activities, explore new horizons, and work on endeavors that enrich your life, earning respect and pursuing your dreams. Once you achieve your goals, extend a helping hand to those who are struggling and possess the potential for greatness in their own lives.`}
              <br />
              {`I firmly uphold the belief that 'God helps those who help themselves,' and I am dedicated to the mission of assisting as many people as possible, while also inspiring those around me to do the same.`}
              <br />
              {`At 19 years old, I recognize that I am relatively young to be founding and running an NGO. My journey began when I was just eight years old, and I observed the disparities among people and the unhealthy environment. Learning from these observations, I embarked on a quest to find solutions to societal issues. Life has taught me valuable lessons, and I have gathered information and methods to reduce exploitation and make the world a better place for all.`}
            </p>
            <Link
              href="/about/words"
              className="border-b border-solid border-[#C8EE79] pb-1 pt-2 hover:border-b-2"
              target="_blank"
            >
              <p className="group md:mt-7 inline-flex text-xs mdd:text-base md:pb-2 text-[#C8EE79] ">
                Read More{" "}
                <ArrowRight
                  size={20}
                  className="ml-2 -rotate-45 transition-all duration-200 ease-in-out group-hover:rotate-0"
                />
              </p>
            </Link>
          </div>
          <div className=" w-full md:w-2/5 mt-4 md:mt-56 md:mb-4 mb-2 ">
            <div className="ml-10 rounded-2xl border border-solid border-white/20 bg-[#8A9CA0]/10 p-5">
              <div className="h-[400px] md:h-[500px] w-full bg-black">
                <Image
                  className="rounded-xl h-[400px] md:h-[500px] w-full"
                  src="/assets/vishalfounder.jpg"
                  width={300}
                  height={400}
                  alt="Hero"
                />{" "}
              </div>
              <h5 className="pt-2 text-center text-xl font-semibold text-white">
                Vishal Kumar
              </h5>
              <p className="pt-2 text-center text-lg text-secondary-foreground">
                Founder & Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WantToKnow
