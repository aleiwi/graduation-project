import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import clsx from "clsx";
import { use } from "react";

const Model = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpWithGmail, signUpWithFacebook, signUpWithGithub, login } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  // redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        document.getElementById("my_modal_5").close(); 
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage("Provide a correct email and password!");
      });
  };

  // google signin
  const handleGoogleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        document.getElementById("my_modal_5").close()
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // facebook signin
  const handleFacebookLogin = async () => {
    try {
      const result = await signUpWithFacebook();
      document.getElementById("my_modal_5").close()
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error.message);
      setErrorMessage("Error signing in with Facebook!");
    }
  };
  // github signin
  const handleGithubLogin = async () => {
    try {
      const result = await signUpWithGithub();
      document.getElementById("my_modal_5").close()
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error.message);
      setErrorMessage("Error signing in with GitHub!");
    }
  };
  return (
    <dialog
      id="my_modal_5"
      className={clsx("modal modal-middle sm:modal-middle")}
    >
      <div className="modal-box max-h-[calc(100vh-3em)]">
        <div className="modal-action  mt-0 flex flex-col">
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(
              onSubmit
            )} /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
          >
            <h3 className="font-bold text-lg">Please Login!</h3>

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
            {errorMessage && <p className="text-red text-xs">{errorMessage}</p>}

            {/* login btn */}
            <div className="form-control mt-4">
              <input
                type="submit"
                value="Login"
                className="btn bg-green text-white"
              />
            </div>
            <p className="text-[#555] my-2 text-center">
              Donot have an account?{" "}
              <Link to="/signup" className="underline text-red ml-1">
                Signup Now
              </Link>{" "}
            </p>
            <button
              htmlFor="my_modal_5"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              ✕
            </button>
          </form>

          {/* social sign in */}
          <div className="flex justify-center space-x-3 -mt-3 mb-3  ">
            <button
              className="btn btn-circle hover:bg-green hover:text-white"
              onClick={handleGoogleLogin}
            >
              <FaGoogle />
            </button>
            <button
              className="btn btn-circle hover:bg-green hover:text-white"
              onClick={handleFacebookLogin}
            >
              <FaFacebookF />
            </button>
            <button
              className="btn btn-circle hover:bg-green hover:text-white"
              onClick={handleGithubLogin}
            >
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Model;
