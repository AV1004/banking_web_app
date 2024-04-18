import { useState } from "react";

export default function LogIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <form className="bg-white p-8 shadow-md w-96 rounded-2xl">
        {/* Device Details Section */}

        {/* <div className="mb-4 "> */}
        <h1 className="text-4xl tracking-wide font-light uppercase mb-8 text-center">
          Sign In
        </h1>
        <input
          type="text"
          name="email"
          required
          placeholder="Email Address"
          className="border p-2 w-full mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setShowOptVer(true);
          }}
          className="bg-blue-500 mt-6 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Submit
        </button>
        {/* </div> */}
      </form>
    </div>
  );
}
