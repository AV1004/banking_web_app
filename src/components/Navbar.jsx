import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="grid grid-rows-none grid-cols-3 gap-4 h-12 bg-[#222831] text-[#EEEEEE] text-xl p-3">
      <ul className="flex col-span-2 gap-4 bg-[#222831]">
        <li className=" hover:text-[#00ADB5] bg-[#222831]">
          <Link className="bg-[#222831]" to={"/"}>
            XYZ Banking
          </Link>
        </li>
      </ul>
      <ul className="flex gap-9 flex-row-reverse mr-3 bg-[#222831]">
        <li className="hover:text-[#00ADB5] bg-[#222831]">
          <Link className="bg-[#222831]" to={"/signup"}>
            Sign Up
          </Link>
        </li>
        <li className="hover:text-[#00ADB5] bg-[#222831]">
          <Link className="bg-[#222831] " to={"/login"}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
