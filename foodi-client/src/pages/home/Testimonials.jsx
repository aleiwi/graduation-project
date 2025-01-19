import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="section-container my-20 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* image, the left side */}
        <div className="md:w-1/2">
          <img
            src="/images/home/testimonials/testimonials.png"
            alt="tesimonials image"
          />
        </div>
        {/* texts, the right side */}
        <div className="md:w-1/2 space-y-7 px-4">
          <div className="text-left md:w-4/5 ">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>
            <blockquote className="my-5 text-secondry leading--[30px]">
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </blockquote>
            {/* avatars & customer feedback */}
            <div className="flex items-center gap-4 flex-wrap ">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse ">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial3.png" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold text-lg">Customer Feedback</h5>
                <div className="flex items-center gap-2 ">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">4.9</span>
                  <span className="text-[#807E7E]">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
