import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Addbanner = () => {
  return (
    <div>
      <div className="flex justify-between md:mb-12 mb-6">
        <p className="header">Add Banner</p>
        <Link className="nor-btn px-8" to="/banners">
          <RiArrowLeftSLine /> Back
        </Link>
      </div>
      <form action="" className="nor-div">
        <div className=" md:grid md:grid-cols-2 flex flex-col gap-4 md:gap-10 md:mb-12 mb-6">
          <div className="space-y-2">
            <p className="sub-header">Restaurant</p>
            <div class="nor-div bg-white sub-typo w-3/4">
              <select class="w-full">
                <option value="option1" class="sub-typo"></option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <p className="sub-header">Restaurant Branch</p>
            <div class="nor-div bg-white sub-typo w-3/4">
              <select class="w-full">
                <option value="option1" class="sub-typo"></option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <p className="sub-header">Category</p>
            <div class="nor-div bg-white sub-typo w-3/4">
              <select class="w-full">
                <option value="option1" class="sub-typo"></option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <p className="sub-header">Banner Validity</p>
            <div class="nor-div bg-white sub-typo w-3/4">
              <select class="w-full">
                <option value="option1" class="sub-typo"></option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <p className="sub-header">Banner Name</p>
            <div class="nor-div bg-white sub-typo w-3/4">
              <select class="w-full">
                <option value="option1" class="sub-typo"></option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid lg:flex gap-4 md:gap-20 md:mb-20 mb-10">
          <div className="flex-col space-y-2 flex-1">
            <p className="header">Banner Image (Website)</p>
            <p className="sub-typo">Min. Dimensions: 900x225</p>
            <div className="lg:w-3/4 w-2/3">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center min-h-[250px] border-2 border-yellow-500 border-solid rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 sub-typo">
                    Click to upload
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
          <div className="flex-col space-y-2 flex-1">
            <p className="header">Banner Image (mobile)</p>
            <p className="sub-typo">Min. Dimensions: 900x225</p>
            <div className="lg:w-3/4 w-2/3">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center border-2 min-h-[250px] border-yellow-500 border-solid rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 sub-typo">
                    Click to upload
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-left">
          <button className="nor-btn header md:px-12 px-6">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default Addbanner;
