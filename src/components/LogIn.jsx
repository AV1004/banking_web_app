import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="flex justify-center items-center  mt-44">
      <form className="bg-[#222831] p-8 shadow-md w-96 rounded-2xl">
        {/* Device Details Section */}

        {/* <div className="mb-4 "> */}
        <h1 className="text-4xl tracking-wide font-light uppercase mb-8 text-center bg-[#222831] text-[#EEEEEE]">
          Login
        </h1>

        <input
          type="text"
          name="email"
          required
          placeholder="Email Address"
          className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
        />
        <Link to="/user">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setShowOptVer(true);
            }}
            className="bg-[#EEEEEE] mt-6 text-[#222831] py-2 px-4 rounded w-full  hover:bg-[#393E46] hover:text-[#EEEEEE]"
          >
            Login
          </button>
        </Link>
        {/* </div> */}
      </form>
    </div>
  );
}
