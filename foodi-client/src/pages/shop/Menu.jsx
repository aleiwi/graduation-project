import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import clsx from "clsx";
import {} from "react-icons";
import { FaFilter } from "react-icons/fa";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  //loading data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://foodi-server-chek.onrender.com/menu");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data ", error);
      }
    };
    fetchData();
  }, []);

  // filtering data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setselectedCategory(category);
    setCurrentPage(1);
  };

  //show all data
  const showAll = () => {
    setFilteredItems(menu);
    setselectedCategory("all");
    setCurrentPage(1);
  };

  //sorting based on A-Z,Z-A, Low-Hight, princing
  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;

      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      //if no match -> no sorting is applied
      default:
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  //pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* menu banner */}
      <section className="section-container ">
        <div className="flex flex-col items-center justify-center py-48 gap-8 ">
          {/* texts*/}
          <div className="text-center space-y-7 px-4 ">
            <h2 className="title !normal-case">
              For the Love of Delicious <span className="text-green">Food</span>
            </h2>
            <p className="text-lg text-[#4A4A4A] leading-[170%]  md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for a moderate cost
            </p>
            <button className="btn rounded-full  px-8 py-3 font-semibold text-white bg-green border-none">
              Order Now
            </button>
          </div>
        </div>
      </section>
      {/* menu shop section */}
      <section className="section-container">
        {/* filtering and sorting */}
        <div className="mb-9 flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* category btns */}
          <div className="flex flex-row gap-4 flex-wrap justify-start md:items-center md:gap-8 font-semibold text-black">
            <button
              onClick={showAll}
              className={clsx(selectedCategory === "all" ? "active" : "")}
            >
              All
            </button>
            <button
              onClick={() => filterItems("salad")}
              className={clsx(selectedCategory === "salad" ? "active" : "")}
            >
              Salad
            </button>
            <button
              onClick={() => filterItems("pizza")}
              className={clsx(selectedCategory === "pizza" ? "active" : "")}
            >
              Pizza
            </button>
            <button
              onClick={() => filterItems("soup")}
              className={clsx(selectedCategory === "soup" ? "active" : "")}
            >
              Soups
            </button>
            <button
              onClick={() => filterItems("dessert")}
              className={clsx(selectedCategory === "dessert" ? "active" : "")}
            >
              Desserts
            </button>
            <button
              onClick={() => filterItems("drinks")}
              className={clsx(selectedCategory === "drinks" ? "active" : "")}
            >
              Drinks
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center">
            <div className="flex items-center bg-black rounded-md overflow-hidden">
              <div className="p-2">
                <FaFilter className="h-4 w-4 text-white" />
              </div>
              <select
                value={sortOption}
                onChange={(e) => handleSortChange(e.target.value)}
                className="bg-black text-white px-4 py-2 outline-none cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* products card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  justify-items-center ">
          {currentItems.map((card) => (
            <Cards key={card._id} item={card} />
          ))}
        </div>
      </section>

      {/* pagination section */}
      <section className="flex justify-center my-8">
        {
          // Creates an array of { length: N }, initially filled with "undefined", where N is the total number of pages.
          Array.from({
            length: Math.ceil(filteredItems.length) / itemsPerPage,
          }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={clsx(
                "mx-1 px-3 py-1 rounded-full",
                currentPage === index + 1
                  ? "bg-green text-white"
                  : "bg-gray-200 "
              )}
            >
              {index + 1}
            </button>
          ))
        }
      </section>
    </div>
  );
};

export default Menu;
