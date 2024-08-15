"use client";
import BuyHeader from "@/components/home/Header";
import { ChevronRight } from "lucide-react";
import React from "react";
// import
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";
const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    join: "member", // Default value for radio buttons
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, join: value });
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // You can handle form submission here, e.g., send data to the server
      console.log(formData);
    };
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to the server
    console.log(formData);
  };

  return (
    <div className="bg-primary-foreground h-screen">
      <BuyHeader />
      <div className="container">
        <div className="relative z-10 flex justify-between pt-16">
          <div className="relative">
            <p className="text-base text-secondary-foreground">
              Home <ChevronRight size={12} className="inline-block" />{" "}
              <span className="text-black/90">Join as Volunteer</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" relative container flex items-center justify-center ">
        <form
        className="flex flex-col mt-8 space-y-7 w-full max-w-md "
        >
         <div> <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            onChange={handleInputChange}
            className="h-11 mt-2"
          /></div>
         <div> <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Your phone"
            onChange={handleInputChange}
            className="h-11 mt-2"
          /></div>
         <div>
         <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Your email"
            onChange={handleInputChange}
            className="h-11 mt-2"
          />
         </div>
          <div><Label htmlFor="join">Join as</Label>
          <RadioGroup defaultValue="option-one" >
            <div className="flex items-center my-2 space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup></div>
          <button
            type="submit"
            className="bg-primary text-white/90 py-2.5 px-4 rounded-md "
            // onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
