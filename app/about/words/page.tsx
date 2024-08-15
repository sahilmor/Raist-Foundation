import React from "react";
import BuyHeader from "@/components/home/Header";
import AboutHero from "@/components/about/AboutHero";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
export default function wonders() {
  return (
    <div className=" bg-primary-foreground relative">
      <BuyHeader />

      <section className="relative h-full bg-primary-foreground mb-12 md:mb-14">
        <div className="relative container">
          <div className="relative z-10 flex md:flex-row flex-col justify-between pt-16">
            <div className="relative">
              <p className="text-base text-secondary-foreground">
                Home <ChevronRight size={12} className="inline-block" />{" "}
                <span className="text-black/90">About Us</span>
                <span className="text-black/90">About Us</span>
                <ChevronRight size={12} className="inline-block" />
                <span className="text-black/90">
                  A Message from the Visionary{" "}
                </span>
              </p>
            </div>
          </div>
          <h1 className=" flex justify-center items-center md:pt-14 font-crimson md:text-5xl text-base font-semibold leading-snug text-donate ">
            Words from the Founder
          </h1>
          <div className="md:mt-4 flex  items-center justify-between 2xl:mt-30 flex-col-reverse  ">
            <div className="relative w-full text-center">
              {/* <h1 className="pt-4 font-figtree md:text-5xl text-2xl font-semibold leading-snug text-black/90">
                About Us
              </h1> */}
              <p className="mt-4 pt-1 md:text-lg text-xs text-black">
                We are{" "}
                {`"Raist Foundation, a non-governmental organization established in January 2023, was conceived with the noble initiative of aiding the impoverished and the destitute in every conceivable manner. We are acutely aware of the prevailing socio-economic conditions in our country. At our level, we strive to provide essentials such as food, clothing, education, and basic necessities. Our journey commenced in Narela, Delhi, but we have since expanded our reach and are presently collaborating with over 350 volunteers across various localities, working tirelessly to assist those in need. Recognizing that a significant number of our volunteers are college and school students, we have thoughtfully chosen to focus our NGO's activities on weekends to ensure that their academic pursuits and personal lives remain unaffected.`}
                <br /> <br />
                {`Our volunteer organization is inclusive, welcoming individuals of all age groups. We are actively pursuing our mission to extend our reach to a national level, aspiring to operate with a higher degree of organization and professionalism. We are dedicated to working diligently toward achieving significant milestones in the days ahead. Our unwavering belief in the transformative power of assistance is exemplified in the saying, 'Blessings can work wonders,' and we have witnessed the profound impact of blessings, serving as a source of strength in even the most challenging circumstances.`}
                <br /> <br />
                {`
We firmly uphold the principle that nothing is insurmountable when determination guides our actions. One individual can indeed lay the foundation for a great endeavor, inspiring others to follow. When I began this NGO, I had very little external support. I initiated and managed everything independently, without assistance from any source or even parental support. However, we have since seen an outpouring of support, with over 350 volunteers joining our cause, and their numbers continue to grow. It is a testament to the idea that great achievements take time, consistent effort, and a resolute will."`}
                <br /> <br />
                {`Within our society, we observe two distinct types of
                individuals:`}
              </p>
              <br /> <br />
              <div className="w-full flex flex-row md:flex-row md:text-lg text-xs text-center">
                <div className="w-1/2">
                  <p>
                    <span className=" font-bold">"Hard Workers"</span>
                    <br />
                    {` These individuals dedicate their time and energy to their studies, jobs, and various responsibilities, often becoming stressed by the demands of daily life. Their efforts are diligent, but they may take more time to achieve their goals.`}
                  </p>
                </div>
                <div className="w-1/2">
                  <p>
                    <span className=" font-bold">"Smart Workers"</span>
                    <br />
                    {`These individuals exhibit composure and adaptability in challenging situations. They approach their tasks with efficiency and intelligence, maximizing their time and resources. Smart workers are adept at managing their responsibilities.`}
                  </p>
                </div>
              </div>
              <p className="mt-4 pt-1 md:text-lg text-xs text-black">
                {`The majority of individuals tend to fall into the 'Hard Workers' category, as they prefer to conform to societal norms. However, those who dare to be unique often reach exceptional heights. I encourage you to engage in productive endeavors and explore new horizons, as the marks you receive in school or college become less significant in family life. What truly matters is the respect you earn in society and your ability to fulfill your family's needs.`}
                <br /> <br />
                {`As you strive for success, remember the adage, 'Work hard until the expensive becomes affordable.' This means that one day, you will have the means to pursue opportunities without hesitation, whether it involves traveling abroad or acquiring expensive items. Helping others is a noble pursuit, and it is believed that the divine aids those who extend a helping hand. As the saying goes, 'God helps those who help themselves.' This implies that while divine intervention may not always be direct, it does guide you towards the right opportunities. The outcome, whether success or failure, depends on your choices.`}
                <br /> <br />
                {`I, at the age of 19, may appear young to undertake the establishment and operation of an NGO, but my journey began when I was just eight years old. From that early age, I have been separated from my family and have encountered various life situations, which I have had to resolve independently. Life has proven to be the most valuable teacher, imparting lessons at every turn. I encourage you to explore and experience all that life has to offer.`}
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="flex flex-col items-center justify-center  text-base md:text-lg md:">
          Vishal Kumar <br />{" "}
          <span className=" text-xs md:text-base">-Founder & Director</span>
        </div>
      </section>

      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}
