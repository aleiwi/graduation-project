import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, signUpWithFacebook, signUpWithGithub, login } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle email/password login
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    login(email, password)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          email: user?.email,
          name: user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          alert("Login successful!");
          navigate(from, { replace: true }); // Navigate to the specified page after login
        });
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setErrorMessage("Incorrect password. Please try again.");
        } else if (error.code === "auth/user-not-found") {
          setErrorMessage("No user found with this email.");
        } else {
          setErrorMessage("Please provide valid email and password!");
        }
      });
    reset();
  };

  // Login with Google
  const handleGoogleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          alert("Google Login successful!");
          navigate(from, { replace: true }); // Navigate after successful login
        });
      })
      .catch((error) => {
        setErrorMessage("An error occurred during Google login.");
      });
  };

  // Login with Facebook
  const handleFacebookSignIn = () => {
    signUpWithFacebook()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          alert("Facebook Login successful!");
          navigate(from, { replace: true }); // Navigate after successful login
        });
      })
      .catch((error) => {
        setErrorMessage("An error occurred during Facebook login.");
      });
  };

  // Login with GitHub
  const handleGithubSignIn = () => {
    signUpWithGithub()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          alert("GitHub Login successful!");
          navigate(from, { replace: true }); // Navigate after successful login
        });
      })
      .catch((error) => {
        setErrorMessage("An error occurred during GitHub login.");
      });
  };

  return (
    <section className=" bg-[#FCFCFC] h-screen flex justify-start items-center">
      <div className="max-w-md  shadow w-full mx-auto flex items-center justify-center  max-h-[calc(100vh-3em)] ">
        <div className="mb-5  ">
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="font-bold text-lg">Please Login!</h3>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red text-xs italic">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red text-xs italic">
                  {errors.password.message}
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover mt-2">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Show Errors */}
            {errorMessage && (
              <p className="text-red text-xs italic">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <div className="form-control mt-4">
              <input
                type="submit"
                className="btn bg-green text-white"
                value="Login"
              />
            </div>

            <p className="text-center my-2">
              Don't have an account?
              <Link to="/signup" className="underline text-red ml-1">
                Signup Now
              </Link>
            </p>
          </form>

          {/* Social Login Buttons */}
          <div className="text-center space-x-3">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-circle hover:bg-green hover:text-white"
            >
              <FaGoogle />
            </button>
            <button
              onClick={handleFacebookSignIn}
              className="btn btn-circle hover:bg-green hover:text-white"
            >
              <FaFacebookF />
            </button>
            <button
              onClick={handleGithubSignIn}
              className="btn btn-circle hover:bg-green hover:text-white"
            >
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
