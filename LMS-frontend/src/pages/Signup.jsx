import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";

const Signup = () => {
  const navigate = useNavigate();

  const [Signupdetails, setSignupDetails] = useState({
    email: "",
    fullname: "",
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
          
        </form>
      </div>
    </HomeLayout>
  );
};

export default Signup;
