import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./Loader";
export default function UserNav() {
  return (
    <Suspense fallback={<Loader />}>
      <nav className="flex justify-between mb-6 bg-[#222831] p-4 text-xl ">
        <div className="bg-[#222831]">
          <ul className=" flex space-x-8 bg-[#222831]  ">
            <NavLink
              className="mr-12 hover:text-[#00ADB5] text-white bg-[#222831]"
              to={""}
            >
              XYZ Banking
            </NavLink>
            <NavLink
              to={"/user/transaction"}
              className="text-white hover:text-[#00ADB5]  bg-[#222831]"
            >
              Transaction
            </NavLink>
            <NavLink
              to={"/user/history"}
              className="hover:text-[#00ADB5] text-white bg-[#222831]"
            >
              History
            </NavLink>
          </ul>
        </div>
        <ul className="bg-[#222831] mr-7">
          <NavLink
            to={"/user/profile"}
            className=" hover:text-[#00ADB5] text-white bg-[#222831]"
          >
            Profile
          </NavLink>
        </ul>
      </nav>
      <Outlet/>
    </Suspense>
  );
}
