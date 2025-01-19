import React, { useContext, useEffect, useState } from "react";
import logo from "/logo.png";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Model from "../components/Model";
import { AuthContext } from "../contexts/AuthProvider";
import Profile from "./Profile";
import useCart from "../hooks/useCart";

const Navbar = () => {
  const [isSticky, setSticky] = React.useState(false);
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  //handle scroll functions
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY; 
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar items
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <Link to="/menu">All</Link>
            </li>
            <li>
              <Link to="/salad">Salad</Link>
            </li>
            <li>
              <Link to="/pizza">Pizza</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <Link to="">Online Order</Link>
            </li>
            <li>
              <Link to="">Table Booking</Link>
            </li>
            <li>
              <Link to="">Order Tracking</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="">Offers</Link>
      </li>
    </>
  );
  return (
    <header
      className={clsx(
        "max-w-screen-2xl",
        "container",
        "mx-auto fixed top-0 left-0 right-0",
        "transition-all duration-300 ease-in-out",
        isSticky
          ? "bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC] shadow-md"
          : "bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]"
      )}
    >
      <div className="navbar xl:px-24 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a href="/">
            {" "}
            {/*navigate to the root URL of the website*/}
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/*Search item*/}
          <button className="btn btn-ghost btn-circle hidden sm:block  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/*Cart item*/}
          <Link to="/cart-page">
            <div className="dropdown dropdown-end mr-3 hidden sm:block">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cart.length || 0}
                  </span>
                </div>
              </div>
            </div>
          </Link>
          {/*Login btn*/}
          {user ? (
            <Profile user={user} />
          ) : (
            <button
              className="btn bg-green text-white  rounded-full px-7 gap-2"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              <FaRegUser />
              Login
            </button>
          )}
          <Model />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
