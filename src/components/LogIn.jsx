import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../https/auth";

import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

export default function LogIn({ loginHandler }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = useSignIn();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // const { data } = await axios.post(
      //   `${server}/users/login`,
      //   { email, password },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     withCredentials: true,
      //   }
      // );

      login({ email: email, password: password })
        .then((resData) => {
          signIn({
            auth: {
              token: resData.token,
              type: "Bearer",
            },
            userState: { userId: resData.userId },
          });
        })
        .then(() => {
          navigate("/user/profile");
        });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center  mt-44">
        <form
          className="bg-[#222831] p-8 shadow-md w-96 rounded-2xl"
          onSubmit={submitHandler}
        >
          {/* Device Details Section */}

          {/* <div className="mb-4 "> */}
          <h1 className="text-4xl tracking-wide font-light uppercase mb-8 text-center bg-[#222831] text-[#EEEEEE]">
            Login
          </h1>

          <input
            type="text"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
          />
          <button
            type="submit"
            className="bg-[#EEEEEE] mt-6 text-[#222831] py-2 px-4 rounded w-full  hover:bg-[#393E46] hover:text-[#EEEEEE]"
          >
            Login
          </button>
          {/* </div> */}
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}
