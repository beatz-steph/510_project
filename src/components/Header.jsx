import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

// routes
import { APP_ROUTES } from "../data";

const Header = ({ alt }) => {
  return (
    <nav
      className={`${
        alt ? "bg-gray-900" : "bg-transparent"
      } fixed top-0 left-0 w-screen flex items-center`}
    >
      <div className="w-full  px-6 container mx-auto  flex items-center">
        <div className="flex items-center divide-x divide-gray-300">
          <Link
            to={APP_ROUTES.search}
            style={{ backgroundImage: `url(${logo})` }}
            className="h-24 w-36 bg-contain bg-center bg-no-repeat cursor-pointer"
          />
          <div className="h-full text-white  ml-4 pl-4 flex flex-col italic">
            <span>Encyclopedia</span>
            <span>About animals</span>
          </div>
        </div>
        <div className="flex ml-auto text-white font-xl">
          {/* <Link className="mx-4" to={APP_ROUTES.about}>
            About
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
