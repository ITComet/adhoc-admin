import React, { useState } from "react";

const Banner = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col tab-div md:gap-6 gap-3">
      <div className="">
        <img src="assets/images/Rectangle 477.png" alt="" className="w-full" />
      </div>
      <div className="space-y-5">
        <div className="flex justify-end">
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id="toggle"
                className="sr-only"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <div
                className={`block w-11 h-6 rounded-full transition ${
                  isChecked ? "bg-yellow-300" : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 bg-yellow-500 w-4 h-4 rounded-full transition transform ${
                  isChecked ? "translate-x-full bg-yellow-500" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
        <div className="flex items-center flex-col space-y-1">
          <p className="sub-header">Canadian</p>
          <p className="sub-typo text-[15px]">Start Date: May 28, 2023</p>
          <p className="sub-typo text-[15px]">Expiry Date: May 28, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
