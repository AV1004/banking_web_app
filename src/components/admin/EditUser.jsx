import React from "react";
import { CgProfile } from "react-icons/cg";

export default function EditUser() {

  
  return (
    <div className="m-auto">
      <form
onSubmit={submitHandler}        className="m-auto p-8 shadow-md w-96 rounded-2xl bg-[#222831] text-[#EEEEEE]"
      >
        <div className="bg-[#222831] text-[#EEEEEE]">
          <div className="mb-4 bg-[#222831] text-[#EEEEEE]">
          <h1 className="text-3xl tracking-wide font-light uppercase mb-8 text-center bg-[#222831] text-[#EEEEEE]">
              Edit Profile
            </h1>
            <div className="bg-[#222831] flex items-center justify-center">
              <CgProfile fill="white" className="bg-[#222831]  h-9 w-9 mb-3" />
              <input
                type="file"
                name="photo"
                required
                className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE] border-none outline-none"
              />
            </div>
            <input
              type="date"
              required
              name="name"
              placeholder="Date of birth"
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="text"
              required
              name="address"
              placeholder="Address"
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
      </form>
          <p className="text-red-600 mt-5 font-semibold text-center">Note: Only this details can be change here, other details can change with visit of bank</p>
    </div>
  );
} 
