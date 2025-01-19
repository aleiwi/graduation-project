import React from "react";

const Banner = () => {
  return (
    <div className="section-container  bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className=" py-24 flex flex-col md:flex-row-reverse justify-center items-center gap-8">
        {/* images, the right side */}
        <div className="md:w-1/2">
          <img src="/images/home/banner.png" alt="banner image" />
          <div className="flex flex-col md:flex-row items-center justify-around gap-7 -mt-14">
            {/* banner food1 */}
            <div className="flex gap-7 bg-white px-3 py-2 rounded-2xl gap-3 shadow-md w-64">
              <img
                src="/images/home/b-food1.png"
                alt="banner-food pic1"
                className="rounded-2xl"
              />
              <div className="space-y-1 ">
                <h5 className="font-semibold text-[#2C2C2C]">Spicy noodles</h5>
                <div className="rating rating-sm ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                </div>
                <p className="text-[#515151] font-semibold">
                  <span className="text-red">$</span>18.00
                </p>
              </div>
            </div>
            {/* banner food2 */}
            <div className="sm:flex  hidden gap-7 bg-white px-3 py-2 rounded-2xl gap-3 shadow-md w-64">
              <img
                src="/images/home/b-food2.png"
                alt="banner-food pic1"
                className="rounded-2xl"
              />
              <div className="space-y-1 ">
                <h5 className="font-semibold text-[#2C2C2C]">Spicy noodles</h5>
                <div className="rating rating-sm ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    defaultChecked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-[#515151] font-semibold">
                  <span className="text-red text-sm">$</span>23.00
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* texts, the left side */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="title">
            Dive into Delights Of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-xl text-[#4A4A4A] leading-[170%]">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="btn rounded-full px-8 py-3 font-semibold text-white bg-green border-none">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
