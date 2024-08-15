"use client";
// import Link from 'next/link';
import { useEffect, useState } from "react";
// import { GetTheme, ModeToggle } from '@/components/theme-selector';
// import { UserAuthForm } from '@/components/login-form';
import { Icons } from "@/components/icons";
import BuyHeader from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import BuildYour from "@/components/home/BuildYour";
import WhyChoose from "@/components/home/WhyChoose";
import SuccessStories from "@/components/home/SuccessStories";
import BookDemo from "@/components/home/ChooseUs";
import ConnectWithSellers from "@/components/home/ConnectWithSellers";
import Footer from "@/components/Footer";
import Counters from "@/components/home/Counters";
import Loader from "@/components/loader";
// import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <>
      {loader ? (
       <div className="animate-ping transition-all">
         <Loader />
       </div>
      ) : (
        <>
          <BuyHeader />
          <Hero />

          <BookDemo />

          <WhyChoose />
          <Counters />
          <ConnectWithSellers />
          <SuccessStories />
          <Footer />
        </>
      )}
    </>
  );
}
