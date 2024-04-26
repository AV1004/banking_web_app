import React, { useState } from "react";
import { completeProfile } from "../https/auth";


export default function EditProfile() {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");
    const [upiPin, setUpiPin] = useState("");

    const changeImageHandler = (e) => {
        const file= e.target.files?.[0];
    
        const reader= new FileReader();
    
        if (file) {
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            if (typeof reader.result === "string") setImage(reader.result);
          };
        }
      };

      const submitHandler = (e)=>{
        e.preventDefault()
        setName(e.target.value)
        setAddress(e.target.value)
        setDob(e.target.value)
        setUpiPin(e.target.value)

        completeProfile({image,name,address,dob,upiPin}).then(resData=>console.log(resData))
      }
  return (
    <div className="flex justify-center items-center mt-9 ">
      <div className=" p-8 shadow-md w-96 rounded-2xl bg-[#222831] text-[#EEEEEE]">
        <form className="bg-[#222831]" onSubmit={submitHandler}>
          <div className="mb-4 bg-[#222831]">
            <h1 className="text-3xl tracking-wide font-light uppercase mb-8 text-center bg-[#222831] text-[#EEEEEE]">
              Complete Profile{" "}
            </h1>

            {image && <img className="object-cover h-32 w-32 m-auto mb-5 rounded-[50%]" src={image} alt="New Image" />}

            <input
              type="file"
              name="image"
              required
              onChange={changeImageHandler}
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="text"
              name="name"
              required
            value={name}
                onChange={(e) => setName(e.target.value)}

              placeholder="Name"
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}

              required
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}

              name="dob"
              placeholder="Date Of Birth"
              required
              className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
            />
            <input
              type="number"
              name="upipin"
              value={upiPin}
              onChange={(e) => setUpiPin(e.target.value)}
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
