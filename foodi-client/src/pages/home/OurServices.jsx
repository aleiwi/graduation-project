import React from "react";

const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavors and  presentation",
    image: "/images/home/services/icon1.png",
  },
  {
    id: 2,
    title: "Fast delivery",
    des: "We deliver your order promptly to your door",
    image: "/images/home/services/icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our Online Ordering ",
    image: "/images/home/services/icon3.png",
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "Give the gift of exceptional dining with Foodi Gift Cards",
    image: "/images/home/services/icon4.png",
  },
];
const OurServices = () => {
  return (
    <section className="section-container my-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* texts, left side */}
        <div className="md:w-1/2 space-y-6 ">
          <p className="subtitle ">Our Story & Services</p>
          <h2 className="title md:w-[75%]">
            Our Culinary Journey And Services
          </h2>
          <p className="font-medium text-[#555] md:w-[75%]">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button className="btn text-white font-semibold bg-green rounded-full px-8 py-3">
            Explore
          </button>
        </div>
        {/* services, right side */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          {serviceLists.map((service) => (
            <div
              key={service.id}
              className=" 
                text-center
                text-green 
                py-5 px-4 space-y-2
              bg-white rounded-xl   
                shadow-md cursor-pointer 
                hover:border hover:border-[#3C9E47] transition-all duration-200"
            >
              <img
                src={service.image}
                alt={service.title + "img"}
                className="mx-auto"
              />
              <h5 className="pt-3 font-semibold uppercase text-[#5FE26C]">
                {service.title}
              </h5>
              <p className="font-semibold text-center text-[#90BD95]">
                {service.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
