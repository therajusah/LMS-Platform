import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail, isValidPassword } from "../helpers/regexMatcher.js";
import HomeLayout from "../layouts/HomeLayout";
import { createAccount } from "../redux/slices/authSlice.js";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signupDetails, setSignupDetails] = useState({
    email: "",
    fullName: "",
    password: "",
    avatar: "",
  });

  const [previewImage, setPreviewImage] = useState("");

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setSignupDetails({
      ...signupDetails,
      [name]: value,
    });
  };

  const handleAvatar = (e) => {
    const uploadedImage = e.target.files[0];
    if (!uploadedImage) {
      console.error("No file selected");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadedImage);
    fileReader.addEventListener("load", function () {
      setPreviewImage(this.result);
      setSignupDetails({
        ...signupDetails,
        avatar: uploadedImage,
      });
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !signupDetails.email ||
        !signupDetails.password ||
        !signupDetails.fullName
      ) {
        toast.error("Please fill in all the details");
        return;
      }

      if (signupDetails.fullName.length < 5) {
        toast.error("Name should be at least 5 characters long");
        return;
      }

      if (!isEmail(signupDetails.email)) {
        toast.error("Invalid email provided");
        return;
      }

      if (!isValidPassword(signupDetails.password)) {
        toast.error("Invalid password provided");
        return;
      }

      const response = await dispatch(createAccount(signupDetails));
      console.log(response);
      if (!response.payload) {
        toast.error("Failed to create account");
        return;
      }

      navigate("/");
      toast.success("Account created successfully!");

      setSignupDetails({
        email: "",
        fullName: "",
        password: "",
        avatar: "",
      });
      setPreviewImage("");
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

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
                alt="Preview"
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
              value={signupDetails.fullName}
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
              value={signupDetails.email}
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
              value={signupDetails.password}
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
