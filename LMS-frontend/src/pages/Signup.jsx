import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";

const Signup = () => {
  const navigate = useNavigate();

  const [Signupdetails, setSignupDetails] = useState({
    email: "",
    fullName: "",
    password: "",
    avator: "",
  });
  const [previewImage, setPreviewImage] = useState("");

  return (
    <HomeLayout>
      <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
        <form
          noValidate
          className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white"
        >
          <h1 className="text-2xl text-center">Registration Page</h1>
          <label htmlFor="image_uploads" className="cursor-pointer">
            {previewImage ? (
              <img
                className="w-24 h-24 rounded-full m-auto"
                src={previewImage}
              />
            ) : (
              <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
            )}
          </label>
          <input
            type="file"
            className="hidden"
            name="image_uploads"
            id="image_uploads"
            accept=".jpg .jpeg .png .svg"
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="font-semibold">
              Name
            </label>
            <input
              required
              type="text"
              name="fullName"
              className="bg-transparent px-2 py-1 border"
              placeholder="Enter your username..."
              id="fullName"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
             Email
            </label>
            <input
              required
              type="text"
              name="email"
              className="bg-transparent px-2 py-1 border"
              placeholder="Enter your Email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              className="bg-transparent px-2 py-1 border"
              placeholder="Enter your password"
              id="password"
            />
          </div>
          <button className="mt-2 bg-yellow-800 hover:bg-yellow-600 transition-all ease-in-out duration-0.3s rounded-md py-2 cursor-pointer font-semibold text-lg">
            Create account
          </button>
          <p className="text-center">
            Already have an account ? <Link to="/login" className="cursor-pointer text-center">Login</Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
};

export default Signup;
