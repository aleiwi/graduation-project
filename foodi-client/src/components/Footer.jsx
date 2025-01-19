import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="section-container ">
      {/* footer1 */}
      <footer className="footer text-base-content xl:px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-x-44">
        <aside className="col-span-2 sm:col-span-1">
          <img src="/logo.png" alt="logo" className="my-5" />
          <p className="md:w-44 text-[#555] font-medium">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </aside>
        <nav className="space-y-2">
          <h6 className="footer-title capitalize text-black opacity-100">
            Useful links
          </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav className="space-y-2">
          <h6 className="footer-title capitalize text-black opacity-100">
            Main Menu
          </h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Offers</a>
          <a className="link link-hover">Menus</a>
          <a className="link link-hover">Reservation</a>
        </nav>
        <nav className="space-y-2">
          <h6 className="footer-title capitalize text-black opacity-100">
            Contact Us
          </h6>
          <a className="link link-hover">foodi@gemail.com</a>
          <a className="link link-hover">+90555000000</a>
          <a className="link link-hover">Social media</a>
        </nav>
      </footer>
      <br />
      {/* footer2 */}
      <footer className="footer  items-center  text-base-content xl:px-4 py-6">
        <nav className="grid-flow-col gap-4   ">
          <a
            className="w-9 h-9 rounded-lg bg-[#3b5998] flex items-center justify-center cursor-pointer "
            href="https://www.facebook.com/profile.php?id=61551801516561"
            target="_blank"
          >
            <SlSocialFacebook className="text-white text-2xl" />
          </a>
          <a
            className="w-9 h-9 rounded-lg bg-black flex items-center justify-center cursor-pointer "
            href="https://x.com/msa_7e"
            target="_blank"
          >
            <FaSquareXTwitter className="text-white text-2xl" />
          </a>
          <a
            className="w-9 h-9 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 flex items-center justify-center cursor-pointer transition-all hover:bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600"
            href="https://www.instagram.com/msa_7e/"
            target="_blank"
          >
            <SlSocialInstagram className="text-white text-2xl" />
          </a>
        </nav>
        <aside className="grid-flow-col items-center  ">
          <p className="text-[#555] font-medi9">
            Copyright © {new Date().getFullYear()} Foodi. All rights reserved.
          </p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
