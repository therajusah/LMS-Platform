import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import { isEmail, isValidPassword } from "../helpers/regexMatcher.js";
import HomeLayout from "../layouts/HomeLayout";

const Signup = () => {
  const navigate = useNavigate();

  const [signupdetails, setSignupDetails] = useState({
    email: "",
    fullName: "",
    password: "",
    avator: "",
  });

  const [previewImage, setPreviewImage] = useState("");

  function handleUserInput(e) {
    const { name, value } = e.target;

    setSignupDetails({
      ...signupdetails,
      [name]: value,
    });
  }
  function handleAvatar() {
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    if (!uploadedImage) return;
    setSignupDetails({
      ...signupdetails,
      avatar: uploadedImage,
    });
    const fileReader = new fileReader();
    fileReader.readAsDataURL(uploadedImage);
    fileReader.addEventListener("load", function (){
        setPreviewImage(this.result);
    })
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (
      !signupdetails.email ||
      !signupdetails.password ||
      !signupdetails.fullName
    ) {
      toast.error("please fill all the details");
      return;
    }
    if (signupdetails.fullName.length < 5) {
      toast.error("Name should be atleast of 5 characters");
      return;
    }
    if (!isEmail(signupdetails.email)) {
      toast.error("Invalid email provided");
      return;
    }
    if (!isValidPassword(signupdetails.email)) {
      toast.error(
        "Invalid password provided, Password must contain 1 digit (1-9), 1 lowercase letter, 1 uppercase letter, 1 underscore, no spaces, 8-16 characters long"
      );
      return;
    }
  }

  return (
    <HomeLayout>
      <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
        <form
          onSubmit={onFormSubmit}
          noValidate
          className="flex flex-col justify-center gap-3 p-4 text-white rounded-lg"
        >
          <h1 className="text-2xl text-center">Registration Page</h1>
          <label htmlFor="image_uploads" className="cursor-pointer">
            {previewImage ? (
              <img
                className="w-24 h-24 m-auto rounded-full"
                src={previewImage}
              />
            ) : (
              <BsPersonCircle className="w-24 h-24 m-auto rounded-full" />
            )}
          </label>
          <input
            onChange={handleAvatar}
            type="file"
            className="hidden"
            name="image_uploads"
            id="image_uploads"
            accept=".jpg, .jpeg, .png, .svg"
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="font-semibold">
              Name
            </label>
            <input
              onChange={handleUserInput}
              value={signupdetails.fullName}
              required
              type="text"
              name="fullName"
              className="px-2 py-1 bg-transparent border"
              placeholder="Enter your username..."
              id="fullName"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              onChange={handleUserInput}
              value={signupdetails.email}
              required
              type="text"
              name="email"
              className="px-2 py-1 bg-transparent border"
              placeholder="Enter your Email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              onChange={handleUserInput}
              value={signupdetails.password}
              required
              type="password"
              name="password"
              className="px-2 py-1 bg-transparent border"
              placeholder="Enter your password"
              id="password"
            />
          </div>
          <button className="mt-2 bg-yellow-800 hover:bg-yellow-600 transition-all ease-in-out duration-0.3s rounded-md py-2 cursor-pointer font-semibold text-lg">
            Create account
          </button>
          <p className="text-center">
            Already have an account ?{" "}
            <Link to="/login" className="text-center cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
};

export default Signup;
