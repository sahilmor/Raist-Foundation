"use client"
import React from 'react';
import { CountUp } from 'use-count-up'
function Counters() {

    return (
      <div className="bg-donate/75 w-full h-auto min-h-1/2">
        <div className="container shadow-sm w-full h-fit justify-center items-center flex flex-col ">
          <div className="text-lg md:text-6xl text-black font-extrabold pb-20 pt-10 justify-center items-center ">
            Our Impact
          </div>
          <div className="flex md:gap-20 gap-8  md:pb-20 justify-between items-center">
            <div className="text-white font-extrabold text-base md:text-3xl lg:text-6xl items-center justify-center text-center">
              <CountUp isCounting end={1000} duration={3.2} />+
              <div className=" items-center justify-center felx">
                <div className="text-white font-bold text-xs items-center  pt-2 md:pt-4">
                  Helped
                </div>
              </div>
            </div>
            <div className="text-white font-extrabold text-base md:text-3xl lg:text-6xl text-center">
              <CountUp isCounting end={350} duration={3.2} />+
              <div className=" items-center justify-center felx">
                <div className="text-white font-bold text-xs items-center pt-2 md:pt-4">
                  Volunteers
                </div>
              </div>
            </div>
            <div className="text-white font-extrabold text-base md:text-3xl lg:text-6xl text-center">
              <CountUp isCounting end={15} duration={3.2} />+
              <div className=" items-center justify-center felx">
                <div className="text-white font-bold text-xs items-center  pt-2 md:pt-4 ">
                  Cities
                </div>
              </div>
            </div>
            <div className="text-white font-extrabold text-base md:text-3xl lg:text-6xl text-center">
              <CountUp isCounting end={4} duration={3.2} />+
              <div className=" items-center justify-center felx">
                <div className="text-white font-bold text-xs items-center  pt-2 md:pt-4">
                  States
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Counters;
