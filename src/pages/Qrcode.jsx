import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsUpload } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Qrcode = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [selectedEncryption, setSelectedEncryption] = useState("");
  const [hideSSID, setHideSSID] = useState(false);
  const [twitterOption, setTwitterOption] = useState("");
  const [frameOpen, setFrameOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [mainImage, setMainImage] = useState("assets/images/Frame 1.png");

  const images = [
    "assets/images/Frame 1.png",
    "assets/images/Frame 2.png",
    "assets/images/Frame 3.png",
  ];

  const colors = ["red", "blue", "green"];

  const handleFrameClick = (index) => {
    setSelectedFrame(index);
    setMainImage(images[index]);
  };

  const handleColorClick = (index) => {
    setSelectedColor(index);
  };

  return (
    <div>
      <div className="header mb-10">QR Code Generator</div>
      <div className="lg:flex grid grid-cols-1 gap-5 lg:mb-10 mb-5">
        <div className="nor-div bg-white flex flex-col items-center md:gap-5 gap-3 h-fit">
          <img src={mainImage} alt="" className="lg:w-full sm:w-2/3 w-full min-w-[280px]" />
          <div className="nor-div px-0 py-0 lg:w-full sm:w-2/3 w-full">
            <button
              className={`nor-div px-4 w-full py-3 ${
                frameOpen ? "bg-[#FFB800]" : ""
              }`}
              onClick={() => setFrameOpen(!frameOpen)}
            >
              <p className="sub-header flex items-center justify-between">
                Frame{frameOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </p>
            </button>
            {frameOpen && (
              <div className="flex justify-center py-5">
                {images.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-center items-center border-2 rounded-[10px] p-2 m-2 w-16 h-16 ${
                      selectedFrame === index
                        ? "border-yellow-500"
                        : "border-gray-500"
                    }`}
                    onClick={() => handleFrameClick(index)}
                  >
                    {item === "assets/images/Frame 1.png" ? (
                      <RxCross1 className="w-full h-full object-cover" />
                    ) : (
                      <img
                        src={item}
                        alt={`img-${index}`}
                        className="object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="nor-div px-0 py-0 lg:w-full sm:w-2/3 w-full">
            <button
              className={`nor-div px-4 w-full py-3 ${
                colorOpen ? "bg-[#FFB800]" : ""
              }`}
              onClick={() => setColorOpen(!colorOpen)}
            >
              <p className="sub-header flex items-center justify-between">
                Color{colorOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </p>
            </button>
            {colorOpen && (
              <div className="px-2 pt-4 pb-2 space-y-4">
                <div className="space-y-2">
                  <p className="sub-header">Choose</p>
                  <input type="text" className="tab-div"/>
                </div>
                <div>
                  <p className="sub-header">Or</p>
                <div className="flex justify-center py-5">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className={`flex justify-center items-center border-2 rounded-[10px] p-2 m-2 w-16 h-16 bg-${color}-500 ${
                        selectedColor === index
                          ? "border-yellow-500"
                          : "border-gray-500"
                      }`}
                      onClick={() => handleColorClick(index)}
                    ></div>
                  ))}
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="nor-div bg-white flex flex-col flex-1 h-fit">
          <ul className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-4 mb-6">
            <li className="">
              <Link
                className={`tab-div sub-header flex justify-center ${
                  openTab === 1 ? "bg-[#FFB800] " : "bg-[#FFB800]-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#url_link"
                role="tablist"
              >
                URL
              </Link>
            </li>
            <li className="">
              <Link
                className={`tab-div sub-header flex justify-center ${
                  openTab === 2 ? "bg-[#FFB800] " : "bg-[#FFB800]-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#text_link"
                role="tablist"
              >
                Text
              </Link>
            </li>
            <li className="">
              <Link
                className={`tab-div sub-header flex justify-center ${
                  openTab === 3 ? "bg-[#FFB800] " : "bg-[#FFB800]-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#email_link"
                role="tablist"
              >
                E-Mail
              </Link>
            </li>
            <li className="">
              <Link
                className={`tab-div sub-header flex justify-center ${
                  openTab === 4 ? "bg-[#FFB800] " : "bg-[#FFB800]-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#sms_link"
                role="tablist"
              >
                SMS
              </Link>
            </li>
            <li className="">
              <Link
                className={`tab-div sub-header flex justify-center ${
                  openTab === 5 ? "bg-[#FFB800] " : "bg-[#FFB800]-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#wifi_link"
                role="tablist"
              >
                WI-FI
              </Link>
            </li>
            <li className="">
              <Link
                className={`tab-div sub-header flex justify-center ${
                  openTab === 6 ? "bg-[#FFB800] " : "bg-[#FFB800]-500"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#twitter_link"
                role="tablist"
              >
                Twitter
              </Link>
            </li>
          </ul>
          <div className="flex-1 mb-5">
            <div
              className={`h-fit flex flex-col gap-[80px] ${
                openTab === 1 ? "block" : "hidden"
              }`}
              id="url_link"
            >
              <div />
              <div className="xl:ml-10 ml-5 lg:mb-0 mb-3">
                <input
                  className="header text-[#4F4F4F]"
                  placeholder="Enter your website"
                />
                <p className="sub-typo text-[#8A8A8A]">
                  Your QR Code will be generated automatically
                </p>
              </div>
              <div className="flex">
                <label for="dropzone-file" class="">
                  <div class="flex items-center">
                    <BsUpload />
                    <p class="text-[#0094FF] mx-2 sub-typo">Upload any file</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
                <p className="sub-typo">( pdf, jpg, docx, pptx)</p>
              </div>
            </div>

            <div
              className={`h-full flex flex-col gap-[80px]  w-full ${
                openTab === 2 ? "block" : "hidden"
              }`}
              id="text_link"
            >
              <div />
              <div className="xl:ml-10 ml-5 lg:mb-0 mb-3">
                <input
                  className="header text-[#4F4F4F]"
                  placeholder="Enter your Text"
                />
                <p className="sub-typo text-[#8A8A8A]">
                  Your QR Code will be generated automatically
                </p>
              </div>
              <div className="flex">
                <label for="dropzone-file" class="">
                  <div class="flex items-center">
                    <BsUpload />
                    <p class="text-[#0094FF] mx-2 sub-typo">Upload any file</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
                <p className="sub-typo">( pdf, jpg, docx, pptx)</p>
              </div>
            </div>
            <div
              className={`lg:pt-[80px] w-full ${
                openTab === 3 ? "block" : "hidden"
              }`}
              id="email_link"
            >
              <p className="header mb-10">E-Mail QR code</p>
              <form action="" className="flex flex-col max-w-[500px]">
                <label htmlFor="" className="sub-header ml-2 mb-3">
                  Email:
                </label>
                <input
                  type="text"
                  className="tab-div mb-6 sub-typo"
                  placeholder="Your Email"
                />
                <label htmlFor="" className="sub-header ml-2 mb-3">
                  Subject:
                </label>
                <input
                  type="text"
                  className="tab-div mb-6 sub-typo"
                  placeholder="Enter email subject"
                />
                <label htmlFor="" className="sub-header ml-2 mb-3">
                  Message:
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="tab-div mb-10 sub-typo"
                  placeholder="Enter your message"
                ></textarea>
                <button className="nor-btn max-w-[300px] flex justify-center">
                  Generate QR Code
                </button>
              </form>
            </div>
            <div
              className={`lg:pt-[80px] w-full ${
                openTab === 4 ? "block" : "hidden"
              }`}
              id="sms_link"
            >
              <p className="header mb-10">SMS QR code</p>
              <form action="" className="flex flex-col max-w-[500px]">
                <label htmlFor="" className="sub-header ml-2 mb-3">
                  Number:
                </label>
                <input
                  type="text"
                  className="tab-div mb-6 sub-typo"
                  placeholder="Your phone number"
                />
                <label htmlFor="" className="sub-header ml-2 mb-3">
                  Message:
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="tab-div mb-10 sub-typo"
                  placeholder="Enter your text here"
                ></textarea>
                <button className="nor-btn max-w-[300px] flex justify-center">
                  Generate QR Code
                </button>
              </form>
            </div>
            <div
              className={`lg:pt-[80px] w-full ${
                openTab === 5 ? "block" : "hidden"
              }`}
              id="wifi_link"
            >
              <p className="header mb-10">WIFI QR code</p>
              <form action="" className="flex flex-col">
                <label htmlFor="" className="sub-header ml-2 mb-3">
                  Network Name
                </label>
                <div className="flex sm:flex-row flex-col mb-6 space-y-4 sm:space-y-0">
                  <input
                    type="text"
                    className="tab-div  sub-typo sm:mr-10 mr-4 w-full max-w-[500px]"
                    placeholder="SSID"
                  />
                  <div className="flex items-center">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={hideSSID}
                          onChange={() => setHideSSID(!hideSSID)}
                        />
                        <div
                          className={`w-5 h-5 border border-gray-300 rounded ${
                            hideSSID ? "bg-yellow-500" : "bg-white"
                          } transition duration-200`}
                        ></div>
                        {hideSSID && (
                          <svg
                            className="absolute top-0 left-0 w-5 h-5 text-white fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                          </svg>
                        )}
                      </div>
                      <span className="ml-2 sub-typo">Hidden</span>
                    </label>
                  </div>
                </div>

                <label htmlFor="" className="sub-header ml-2 mb-3">
                  Password
                </label>
                <input
                  type="text"
                  className="tab-div mb-6 sub-typo max-w-[500px]"
                  placeholder="Your password"
                />
                <div className="mb-10 sm:mb-20 flex">
                  <p className="sub-header sm:mr-10 mr-2">Encryption</p>
                  <div className="flex-col sm:flex-row sm:flex items-center sm:space-x-4 space-y-4 sm:space-y-0">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="security"
                          id="none"
                          value="None"
                          className="hidden"
                          checked={selectedEncryption === "None"}
                          onChange={(e) =>
                            setSelectedEncryption(e.target.value)
                          }
                        />
                        <div
                          className={`w-5 h-5 border border-yellow-500 rounded-full ${
                            selectedEncryption === "None"
                              ? "bg-yellow-500"
                              : "bg-white"
                          } transition duration-200`}
                        ></div>
                      </div>
                      <span className="ml-2 sub-typo">None</span>
                    </label>

                    {/* Repeat similar structure for WPA/WPA2 and WEP */}

                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="security"
                          id="wpa"
                          value="WPA/WPA2"
                          className="hidden"
                          checked={selectedEncryption === "WPA/WPA2"}
                          onChange={(e) =>
                            setSelectedEncryption(e.target.value)
                          }
                        />
                        <div
                          className={`w-5 h-5 border border-yellow-500 rounded-full ${
                            selectedEncryption === "WPA/WPA2"
                              ? "bg-yellow-500"
                              : "bg-white"
                          } transition duration-200`}
                        ></div>
                      </div>
                      <span className="ml-2 sub-typo">WPA/WPA2</span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="security"
                          id="wep"
                          value="WEP"
                          className="hidden"
                          checked={selectedEncryption === "WEP"}
                          onChange={(e) =>
                            setSelectedEncryption(e.target.value)
                          }
                        />
                        <div
                          className={`w-5 h-5 border border-yellow-500 rounded-full ${
                            selectedEncryption === "WEP"
                              ? "bg-yellow-500"
                              : "bg-white"
                          } transition duration-200`}
                        ></div>
                      </div>
                      <span className="ml-2 sub-typo">WEP</span>
                    </label>
                  </div>
                </div>
                <button className="nor-btn max-w-[300px] flex justify-center">
                  Generate QR Code
                </button>
              </form>
            </div>
            <div
              className={`lg:pt-[80px] w-full ${
                openTab === 6 ? "block" : "hidden"
              }`}
              id="twitter_link"
            >
              <p className="header mb-10">Twitter</p>
              <form action="" className="flex flex-col">
                <label htmlFor="" className="sub-header ml-2 mb-3">
                  Your Username
                </label>
                <input
                  type="text"
                  className="tab-div mb-6 sub-typo max-w-[500px]"
                  placeholder="@username"
                />
                <div className="mb-10 sm:mb-20 flex flex-col">
                  <p className="sub-header sm:mb-5 mb-2">Choose an Option</p>
                  <div className="flex flex-col space-y-4 ml-3">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="security"
                          id="linktwitter"
                          value="linktwitter"
                          className="twitteroption hidden" // hide the radio
                          checked={twitterOption === "linktwitter"}
                          onChange={(e) => setTwitterOption(e.target.value)}
                        />
                        {/* Change appearance based on the radio state */}
                        <div
                          className={`w-5 h-5 border border-yellow-500 rounded-full ${
                            twitterOption === "linktwitter"
                              ? "bg-yellow-500"
                              : "bg-white"
                          } transition duration-200`}
                        ></div>
                      </div>
                      <span className="ml-2 sub-typo">
                        Link to your profile
                      </span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="security"
                          id="tweet"
                          value="tweet"
                          className="twitteroption hidden" // hide the radio
                          checked={twitterOption === "tweet"}
                          onChange={(e) => setTwitterOption(e.target.value)}
                        />
                        {/* Change appearance based on the radio state */}
                        <div
                          className={`w-5 h-5 border border-yellow-500 rounded-full ${
                            twitterOption === "tweet"
                              ? "bg-yellow-500"
                              : "bg-white"
                          } transition duration-200`}
                        ></div>
                      </div>
                      <span className="ml-2 sub-typo">Post a tweet</span>
                    </label>
                  </div>
                </div>
                <button className="nor-btn max-w-[300px] flex justify-center">
                  Generate QR Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center lg:justify-end gap-5">
        <Link
          to=""
          className="nor-btn px-8 sm:px-16 lg:px-20 h-auto flex-col justify-center"
        >
          <p className="header">Download</p>
          <p className="sub-typo flex justify-center">JPG</p>
        </Link>
        <Link
          to=""
          className="rej-btn px-8 sm:px-16 lg:px-20 h-auto flex-col justify-center"
        >
          <p className="header"> Vector </p>
          <p className="sub-typo flex justify-center">SVG/EPS</p>
        </Link>
      </div>
    </div>
  );
};

export default Qrcode;
