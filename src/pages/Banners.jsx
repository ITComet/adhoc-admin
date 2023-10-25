import React from "react";
import { BsSearch } from "react-icons/bs";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Banners = () => {
  return (
    <div>
      <div className="md:mb-10 mb-5">
        <p className="header">Banners</p>
      </div>
      <div className="sm:flex-row flex-col space-y-2 sm:space-y-0 flex justify-between items-center md:mb-8 mb-4">
        <div className="nor-btn bg-white px-4 w-[224px] sm:w-auto">
          <BsSearch className="mr-4" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-[15px] "
          />
        </div>
        <Link to="/addbanner" className="nor-btn header px-5 lg:px-10">Add Banner</Link>
      </div>
      <div className="px-10 sm:px-0 grid sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
    </div>
  );
};

export default Banners;
