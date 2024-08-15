"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
// import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import DefaultCarousel from "./carousel"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { useState } from "react";
import GooglePayButton from "@google-pay/button-react";
import { Button } from "flowbite-react"


const Hero = () => {
   const [donate, setDonate] = useState<number>(0);

   const handleGooglePaySuccess = (response: any) => {
     // Handle the successful Google Pay transaction here
     console.log("Payment successful:", response);
   };

   const handleGooglePayFailure = (error: any) => {
     // Handle Google Pay transaction failure here
     console.error("Payment failed:", error);
   };

   const paymentRequest = {
     apiVersion: 2,
     apiVersionMinor: 0,
     allowedPaymentMethods: [
       {
         type: "CARD",
         parameters: {
           allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
           allowedCardNetworks: ["MASTERCARD", "VISA"],
         },
         tokenizationSpecification: {
           type: "PAYMENT_GATEWAY",
           parameters: {
             gateway: "example",
             gatewayMerchantId: "exampleGatewayMerchantId",
           },
         },
       },
     ],

     merchantInfo: {
       merchantId: "12345678901234567890",
       merchantName: "Demo Merchant",
     },
     transactionInfo: {
       totalPriceStatus: "FINAL",
       totalPriceLabel: "Total",
       totalPrice: donate.toString(),
       currencyCode: "₹",
       countryCode: "INR",
     },
   };
   
  return (
    <>
      <div className=" bg-transparent flex relative">
        <div
          className="flex h-72 md:h-screen rounded-none
         w-full "
        >
          <DefaultCarousel />
        </div>

        <div className="absolute container md:pt-56">
          <div className="pb-20 pt-12 md:pt-30 md:pl-10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="inline-flex items-center text-base md:text-2xl font-extrabold text-donate bg-black/25">
                  <span className="mr-3">Join us in our Campaign</span>{" "}
                  {/* <Icons.lineArrow /> */}
                </h3>
                <h1 className="pt-4 text-white font-crimson md:text-5xl text-base leading-normal font-extrabold bg-black/25">
                  We are Raist Foundation <br />{" "}
                  <span className="text-[#6df882] font-extrabold">
                    TRANSFORMING LIVES
                  </span>
                  <br />
                </h1>
                <div className="text-sm text-white font-bold md:text-lg bg-black/25">
                  We are a non-profitable organization <br />
                  providing food, clothing, and educational resources to the
                  less privileged. <br />
                  <br />
                  <Link href="/about/words">
                    <p className="underline text-sm underline-offset-4">
                      Read More...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* buttons for volunteer  */}
            <div className="flex mt-8 gap-8 pt-6 md:pt-0">
              {" "}
              <div
                className={cn(
                  "pb-1.5 text-sm md:text-xl font-crimson text-white items-center transition-all duration-300 ease-linear hover:opacity-90 bg-donate md:w-fit h-10 md:h-auto px-6 py-2  rounded-md   "
                )}
              >
                <Link href="https://forms.gle/y2L6YLPyRcJRmaaR7">
                  Join us as Volunteer
                </Link>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-donate ">Donate</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Make a donation to support our work and help us to
                      continue
                    </DialogTitle>
                   {/* here are the gateway for payment */}
                    <br />
                    
                    <br />
                    <div className="flex items-center justify-center">
                      <Image
                        className="rounded-xl shadow-sm"
                        src="/assets/gpay.png"
                        height={200}
                        width={200}
                        alt="/"
                      />
                    </div>
                    <br />
                    <DialogClose asChild>
                      <Button className="bg-black my-4 text-white">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            <div className="pb-8"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero
