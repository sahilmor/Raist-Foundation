import Link from "next/link";
import React from "react";
import Maps from "./Maps";

function Footer() {
  return (
    <>
      <div>
        <footer className="bg-black/90 text-center text-white">
          <div className="container px-6 pt-6">
            {/* Social media icons container */}
            <div className="mb-6 flex justify-center">
              <Link
                href="https://www.instagram.com/_raist_foundation/"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>

              <Link
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/_raist_foundation/"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>

            {/* Links section */}
            <div className="grid md:grid-cols-3 lg:grid-cols-3 ">
              <div className="mb-6 flex flex-col items-start">
                <h5 className="mb-2.5 font-bold uppercase flex items-start">
                  Our Campaign
                </h5>
                <ul className="mb-0 list-none items-start flex flex-col">
                  <li>
                    <Link href="#!" className="text-white">
                      Latest Campaign
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">
                      List of Campaigns
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">
                      Past Events
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mb-6 flex flex-col items-start">
                <h5 className="mb-2.5 font-bold uppercase">Join us </h5>
                <ul className="mb-0 list-none flex flex-col items-start">
                  <li>
                    <Link
                      href="https://forms.gle/RboPQQEpcaMugf2h8"
                      className="text-white"
                    >
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://forms.gle/RboPQQEpcaMugf2h8"
                      className="text-white"
                    >
                      Ambassador
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-6 flex flex-col items-start">
                <h5 className="mb-2.5 font-bold uppercase flex items-start">
                  Contact Us
                </h5>
                <ul className="mb-0 list-none items-start flex flex-col">
                  <li>
                    <Link href="#!" className="text-white">
                      Ph no. 9625085880
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">
                      E-mail: Raistfoundation@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">
                      Past Events
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="mb-4 rounded-xl ">
                <Maps />
              </div> */}
            </div>
          </div>

          {/* Copyright section */}
          {/* Copyright information */}

          <div
            className="p-4 text-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <div className="mb-2">
              <p>
                All Rights are reserved by Riast Foundation and its affiliates.
              </p>
            </div>
            © 2023 Copyright:
            <Link href="/" className="text-white pl-2">
              Raist Foundation
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
