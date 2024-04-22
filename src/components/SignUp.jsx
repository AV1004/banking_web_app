import React, { useState } from "react";

function SignUp() {
  const [showOtpVer, setShowOptVer] = useState(false);
  return (
    <div className="flex justify-center items-center mt-9 ">
      <form className=" p-8 shadow-md w-96 rounded-2xl bg-[#222831] text-[#EEEEEE]">
        {/* Device Details Section */}
        {!showOtpVer && (
          <div className="mb-4 bg-[#222831]">
            <h1 className="text-4xl tracking-wide font-light uppercase mb-8 text-center bg-[#222831] text-[#EEEEEE]">
              Registration
            </h1>
            <h2 className="text-lg mb-2 bg-[#222831] text-[#EEEEEE]">
              Device Details
            </h2>
            <input
              type="text"
              name="deviceId"
              required
              placeholder="Device ID"
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="text"
              name="os"
              placeholder="OS"
              required
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="text"
              name="version"
              placeholder="Version"
              required
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="text"
              name="manufacturer"
              required
              placeholder="Manufacturer"
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="text"
              name="model"
              placeholder="Model"
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
              required
            />
          </div>
        )}

        {/* Personal Details Section */}
        {!showOtpVer && (
          <div className="bg-[#222831] text-[#EEEEEE]">
            <div className="mb-4 bg-[#222831] text-[#EEEEEE]">
              <h2 className="text-lg  mb-2 bg-[#222831] text-[#EEEEEE]">
                Personal Details
              </h2>
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
              />
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
              />
            </div>
            {/* GetOtp Button */}
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setShowOptVer(true);
              }}
              className="bg-[#EEEEEE] text-[#222831]  py-2 px-4 rounded w-full hover:bg-[#393E46] hover:text-[#EEEEEE]"
            >
              Get OTP
            </button>
          </div>
        )}
        {/* // Otp Verificartion */}

        {showOtpVer && (
          <div className="mb-4 w-[100%] bg-[#222831] ">
            <form className="bg-[#222831]">
              <div className="bg-[#222831]">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowOptVer(false);
                  }}
                >
                  <span>
                    {" "}
                    <svg
                      height={"1.5rem"}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      stroke="#EEEEEE"
                      className="bg-[#222831]"
                    >
                      <path
                        d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
                        data-name="4-Arrow Left"
                      />
                    </svg>
                  </span>
                </button>
                <span className="text-xl ml-8 relative top-[-0.5rem] font-semibold mb-2 text-center text-[#EEEEEE] bg-[#222831]">
                  Email OTP Verification
                </span>
                <input
                  type="text"
                  name="otp"
                  required
                  placeholder="Enter OTP"
                  className="border p-4 w-full mt-4 mb-4 bg-[#222831] text-[#EEEEEE]"
                />
                <span className="font-extralight text-sm font-sans mr-4 bg-[#222831] text-[#EEEEEE]">
                  Otp Send to this Dummy_email.....{" "}
                </span>

                <div className=" bg-[#222831] text-[#EEEEEE]">
                  <br />
                  <span className="bg-[#222831] text-[#EEEEEE]">
                    Trouble to get otp? we can{" "}
                  </span>
                  <button className="bg-[#222831] text-[#EEEEEE] hover:text-[#00ADB5]">
                    Resend
                  </button>
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="bg-[#EEEEEE] text-[#222831] py-2  px-4 rounded w-full mt-7  hover:bg-[#393E46] hover:text-[#EEEEEE]"
              >
                Register
              </button>
            </form>
          </div>
        )}
      </form>
    </div>
  );
}

export default SignUp;
