import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Table from "./Table";
import { GoHistory } from "react-icons/go";
import { NavLink } from "react-router-dom";
const UserProfile = () => {
  const fileInputRef = useRef(null);
  const tableRef = useRef(null);
  const handleButtonClick = () => {
    // Trigger a click on the hidden file input element
    fileInputRef.current.click();
  };

  const data = React.useMemo(
    () => [
      {
        
        type: "Received",
        name: "John",
        amount: "10000",
        date: "30/03/2024",
        time: "5:07 PM",
      },
      {
        type: "Send",
        name: "Valay",
        amount: "5000",
        date: "12/03/2024",
        time: "4:06 AM",
      },
      // Add more data as needed
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Sr no.", accessor: "srno" },

      { Header: "Type", accessor: "type" },
      { Header: "Name", accessor: "name" },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: ({ value, row }) => (
          <span
            style={{
              color: row.original.type === "Received" ? "green" : "red",
            }}
          >
            {value}
          </span>
        ),
      },
      { Header: "Date", accessor: "date" },
      { Header: "Time", accessor: "time" },
      // Add more columns as needed
    ],
    []
  );

  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    if (showHistory && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showHistory]);

  const handleShowHistoryClick = () => {
    setShowHistory(true);
  };

  return (
    <>
      <div className="rounded-xl max-w-sm mx-auto  overflow-hidden shadow-xl">
        <div className="text-center my-4 rounded-xl">
          <button className="mt-4" onClick={handleButtonClick}>
            <CgProfile className="h-28 w-28" />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <h3 className="font-serif uppercase mt-3 font-bold text-2xl text-gray-800 dark:text-white mb-1">
            User Name
          </h3>
        </div>

        <div className="sm:divide-y sm:divide-gray-200 rounded-xl ">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <span className="text-sm font-medium text-gray-500">Ac no.</span>
            <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              123456789{" "}
            </span>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <span className="text-sm font-medium text-gray-500">
              Email address
            </span>
            <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              p@example.com
            </span>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <span className="text-sm font-medium text-gray-500">
              Phone number
            </span>
            <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              987456321
            </span>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <span className="text-sm font-medium text-gray-500">Address</span>
            <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              123 Main St
              <br />
              Anytown, USA 12345
            </span>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <span className="text-sm font-medium text-gray-500">
              {" "}
              Date Of Birth
            </span>
            <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              12/3/2004
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={handleShowHistoryClick}
        className="m-auto mt-12 p-2 flex rounded-xl items-center bg-[#222831] hover:opacity-80 text-white"
      >
        <GoHistory
          fill="white"
          className="bg-[#222831] hover:bg-[#393E46] h-4 mr-2 w-4"
        />
        Show Recent Transaction
      </button>
      {showHistory && (
        <div ref={tableRef}>
          <Table columns={columns} data={data} max={2}/>
        </div>
      )}
      {showHistory && <NavLink to={"/user/history"}><button className="m-auto  p-2 flex rounded-xl items-center  hover:opacity-80 text-[#222831]">Read More..</button></NavLink>}
    </>
  );
};

export default UserProfile;
