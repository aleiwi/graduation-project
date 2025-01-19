import React from "react";

//temp data
const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    des: "(86 dishes)",
    image: "/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    des: "(12 break fast)",
    image: "/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    des: "(48 dessert)",
    image: "/images/home/category/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    des: "(255 Items)",
    image: "/images/home/category/img4.png",
  },
];

const Categories = () => {
  return (
    <section className="section-container mt-20  bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      {/* texts */}
      <div className="text-center ">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title my-2 ">Popular Categories</h2>
      </div>
      {/* Category Cards*/}
      <div>
        <div className="mt-12 flex flex-col  sm:flex-row sm:flex-wrap  items-center justify-around gap-7">
          {categoryItems.map((card) => (
            <div
              key={card.id}
              className="text-center bg-white  rounded-xl py-6 px-5 w-[240px]  mx-auto shadow-lg cursor-pointer hover:-translate-y-4 duration-300 transition-all"
            >
              <div className="mx-auto flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
                />
              </div>
              <div className="mt-5 space-y-1">
                <h5>{card.title}</h5>
                <p>{card.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
