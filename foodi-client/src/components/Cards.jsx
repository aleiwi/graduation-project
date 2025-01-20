import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import clsx from "clsx";
import useCart from "../hooks/useCart";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const Cards = ({ item }) => {
  const { name, email, image, price, recipe, _id } = item;
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  // add to cart handler
  const handleAddToCart = (item) => {
    if (user && user?.email) {
      const cartItem = {
        menuItemId: item._id,
        name: item.name,
        quantity: 1,
        image: item.image,
        price: item.price,
        email: user.email,
      };
  
      fetch("https://foodi-server-chek.onrender.com/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Food added to the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Failed to add food to the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "An error occurred. Please try again.",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  
  return (
    <div className="card bg-white w-80  shadow-xl relative  ">
      <div
        className={clsx(
          "rating gap-1 absolute top-0 right-0  p-4  bg-green rounded-[0px_1rem] ",
          isHeartFilled ? "text-red" : "text-white "
        )}
      >
        <FaHeart
          className="w-5 h-5 cursor-pointer"
          onClick={handleHeartClick}
        />
      </div>
      <Link to="">
        <figure>
          <img
            src={item.image}
            alt={item.name}
            className="hover:scale-105 transition-all duration-200 md:h-[200px]"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-red text-sm">$</span>
            {item.price}
          </h5>
          <button
            className="btn bg-green text-white px-8 py-3 font-semibold "
            onClick={() => handleAddToCart(item)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
