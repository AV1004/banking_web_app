import React, { useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { completeProfile } from "../https/auth";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  const navigate = useNavigate();

  const [image, setImage] = useState("");

  // const changeImageHandler = (e) => {
  //   const file = e.target.files?.[0];

  //   const reader = new FileReader();

  //   if (file) {
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       if (typeof reader.result === "string") setImage(reader.result);
  //     };
  //   }
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;

    const finalData = {
      userId: auth.userId,
      name: data.name,
      address: data.address,
      dob: data.dob,
      bank: data.bank,
      upipin: data.upipin,
      image: data.image,
    };

    completeProfile(finalData, authHeader)
      .then((resData) => {
        console.log(resData);
      })
      .then(() => {
        navigate("/user/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center mt-9 ">
      <div className=" p-8 shadow-md w-96 rounded-2xl bg-[#222831] text-[#EEEEEE]">
        <form className="bg-[#222831]" onSubmit={submitHandler}>
          <div className="mb-4 bg-[#222831]">
            <h1 className="text-3xl tracking-wide font-light uppercase mb-8 text-center bg-[#222831] text-[#EEEEEE]">
              Complete Profile{" "}
            </h1>

            {/* {image && (
              <img
                className="object-cover h-32 w-32 m-auto mb-5 rounded-[50%]"
                src={image}
                alt="New Image"
              />
            )} */}

            <input
              type="file"
              name="image"
              required
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="date"
              placeholder="Date Of Birth"
              name="dob"
              required
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="text"
              name="bank"
              placeholder="Enter your bank name"
              required
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="password"
              name="upipin"
              required
              placeholder="Upi Pin"
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
          </div>

          {/* Personal Details Section */}
          <div>
            <button
              type="submit"
              className="disabled:bg-[#222831] disabled:text-[#EEEEEE] bg-[#EEEEEE] text-[#222831]  py-2 px-4 rounded w-full hover:bg-[#393E46] hover:text-[#EEEEEE]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
