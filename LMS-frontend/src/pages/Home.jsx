import { Link } from "react-router-dom";

import homePageMainImage  from "../assets/Images/homePageMainImage.png";
import HomeLayout from "../layouts/HomeLayout";

const Home = () => {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find out best{" "}
            <span className="text-blue-500 font-bold">Online courses</span>
          </h1>
          <p className="text-xl text-gray-200">
            we have a large library of courses taught by highly skilled and
            qualified faculties at best prices
          </p>
          <div className="space-x-6">
            <Link to="/courses">
              <button className="bg-blue-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-300">
                Browse Courses
              </button>
            </Link>
            <Link to="/contacts">
              <button className="border border-blue-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-300">
                Contact us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src={homePageMainImage} alt="home page" />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
