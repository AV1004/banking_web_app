import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader";

export default function AdminNav() {
  return (
    <Suspense fallback={<Loader />}>
      <nav className="flex justify-between mb-6 bg-[#222831] p-4 text-xl ">
        <div className="bg-[#222831]">
          <ul className=" flex space-x-8 bg-[#222831] text-[#00ADB5]  ">
            <NavLink to={"/admin"} className="text-white hover:text-[#00ADB5]  bg-[#222831]">
            XYZ Banking
            </NavLink>
            <NavLink
              to={"/admin/transaction"}
              className="text-white hover:text-[#00ADB5]  bg-[#222831]"
            >
              Transaction
            </NavLink>
            <NavLink
              to={"/admin/users"}
              className="hover:text-[#00ADB5] text-white bg-[#222831]"
            >
              All Users
            </NavLink>
          </ul>
        </div>
        <ul className="bg-[#222831] mr-7 space-x-9">
          <NavLink
            to={"/admin/login"}
            className=" hover:text-[#00ADB5] text-white bg-[#222831]"
          >
            LogIn
          </NavLink>    
          
          <NavLink
            to={"/"}
            className=" hover:text-[#00ADB5] text-white bg-[#222831]"
          >
            Logout
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </Suspense>
  );
}
