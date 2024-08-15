"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button, Navbar } from "flowbite-react";

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

export default function NavbarWithCTAButton() {
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
      countryCode: "IN",
    },
  };

  return (
    <div className="">
      {" "}
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <Image
            height={50}
            width={50}
            src="/assets/logo.svg"
            className="mr-3 h-6 sm:h-16"
            alt="Rasst Foundation"
          />
          <span className="self-center text-donate whitespace-nowrap text-xl font-semibold dark:text-white">
            Raist Foundation
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-donate">Donate</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Make a donation to support our work and help us to continue
                </DialogTitle>
                <br />
                <DialogDescription>
                  {/* <label className="text-donate mb-4">Amount</label> */}
                  <label className="text-donate mb-4">Amount</label>
                  <Input
                    className="w-full"
                    type="number"
                    value={donate}
                    onChange={(e) => setDonate(parseInt(e.target.value))}
                  />
                </DialogDescription>
                <br />
                <div className="flex justify-center items-center">
                  {/* <Button className="bg-donate">Donate</Button> */}

                  <GooglePayButton
                    environment="TEST"
                    // @ts-ignore
                    paymentRequest={paymentRequest}
                    buttonType="donate"
                  />
                </div>
                <br />
                <span className="flex justify-center">
                  ___________OR USE QR___________
                </span>
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
                  <Button className="bg-black my-4 text-white">Close</Button>
                </DialogClose>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>

          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="https://forms.gle/y2L6YLPyRcJRmaaR7">
            Join as Volunteer
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
