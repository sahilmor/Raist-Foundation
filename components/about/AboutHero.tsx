import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

const AboutHero = () => {
  return (
    <>
      <section className="relative h-screen bg-primary-foreground">
        <div className="container">
          <div className="relative z-10 flex md:flex-row flex-col justify-between pt-16">
            <div className="relative">
              <p className="text-base text-secondary-foreground">
                Home <ChevronRight size={12} className="inline-block" />{" "}
                <span className="text-black/90">About Us</span>
              </p>
            </div>
          </div>
          <div className="md:mt-16 flex  items-center justify-between 2xl:mt-40 flex-col-reverse  ">
            <div className="relative w-full text-center">
              {/* <h1 className="pt-4 font-figtree md:text-5xl text-2xl font-semibold leading-snug text-black/90">
                About Us
              </h1> */}
              <p className="mt-4 pt-1 md:text-lg text-xs text-black">
                We are{" "}
                {`"Raist Foundation, a Non-Governmental Organization founded in
                January 2023, is dedicated to extending assistance to the
                underprivileged and destitute individuals in a myriad of ways.
                We are acutely aware of the socio-economic challenges that
                persist in our nation. At our core, we provide essential
                provisions, such as food, clothing, and educational resources.
                Our journey commenced in Narela, Delhi, and has since
                flourished. At present, we collaborate with a dedicated force of
                over 350 volunteers across various localities, all of whom are
                committed to aiding those in need. A notable aspect of our
                volunteer base is that a significant portion comprises college
                and school students. To ensure that their academic pursuits
                remain unaffected, we've designed our operations to function
                primarily on weekends. Raist Foundation operates as an
                all-inclusive volunteer organization, welcoming individuals of
                all age groups. Our vision extends beyond local efforts, as we
                endeavor to elevate our mission to a national scale, furthering
                our commitment in a more structured and professional capacity.
                We are actively engaged in strategic planning, aiming to
                establish noteworthy milestones in the years ahead. At the heart
                of our mission lies an unwavering belief in the transformative
                power of assistance, for 'blessings work wonders,' as we have
                come to understand. We firmly assert that nothing is beyond our
                reach when we are resolute in our purpose. Building an empire of
                compassion and support requires the collective effort of those
                in our vicinity. Together, we strive to make the impossible
                possible."`}
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
              {/* <p className=""></p> */}
              {/* <br/> */}
              {/* <Link
                href="/"
                className="border-b border-solid border-primary pb-1 pt-2 hover:border-b-2"
              >
                <p className="text-xs group mt-1 md:mt-6 inline-flex pb-2 text-primary ">
                  Read More{" "}
                  <ArrowRight
                    size={20}
                    className="ml-2 -rotate-45 transition-all duration-200 ease-in-out group-hover:rotate-0"
                  />
                </p>
              </Link> */}
            </div>
            <div className=" ">
              {/* <Image
                // className="rounded-full shadow-lg"
                src="/assets/child2.png"
                width={400}
                height={600}
                alt="Hero"
              /> */}

              <Image
                src="/assets/group.jpg"
                alt="group pic"
                width={400}
                height={600}
                className="w-full rounded pb-6"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHero
