import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Model from "./Model";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, login } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password).then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Account created successfully");
      document.getElementById("my_modal_5").close(); 
      navigate(from, { replace: true })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  };

  return (
    <section className="flex items-center justify-center h-screen  ">
      <div className=" modal-box  max-h-[calc(100vh-3em)] ">
        <div className="modal-action mt-0 flex flex-col mx-auto">
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)} 
          >
            <h3 className="font-bold text-lg">Create an account</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              <label className="label mt-1">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-[#555]"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {/* error msg */}

            {/* signup btn */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Signup"
                className="btn bg-green text-white"
              />
            </div>
            <p className="text-[#555] my-2 text-center">
              Have an account?{" "}
              <button
                className="underline text-red ml-1"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Login
              </button>{" "}
            </p>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>

          {/* social sign in */}
          <div className="flex justify-center space-x-3 -mt-3 mb-3">
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
      <Model />
    </section>
  );
};

export default Signup;
