import React, { useContext, useEffect, useState } from "react";
import Table from "../Table";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { server } from "../../main";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkyU72-X0ji5U7vAEhvQqYuARKDjCuaXFTQSJ5WrtAw&s";
const img2 =
  "https://upload.wikimedia.org/wikipedia/commons/2/2a/Jai_Passport_Size_Photo.jpg";

export default function Users() {
  useEffect(async () => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`${server}/admin/allusers`, {
          withCredentials: true,
        });
        console.log(data.responseData);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchData();
  }, []);

  const data = React.useMemo(
    () => [
      {
        photo: <img src={img} className="h-24 w-24 object-cover" />,
        name: "Preaty",
        account: "987456321",
        mobile: "0123456789",
        email: "a@gmail.com",
        dob: "30/03/2024",
        transaction: (
          <Link
            to={"/admin/Transaction"}
            className="text-blue-700 hover:underline"
          >
            Transaction
          </Link>
        ), //for see transaction of perticular user
        address: "Bhavnagar",
        edit: (
          <Link
            to={"/admin/users/edituser"}
            className="text-blue-700 hover:underline"
          >
            Manage
          </Link>
        ),
        remove: (
          <button>
            <MdDelete fill="red" className="h-8 w-8 ml-5" />
          </button>
        ),
      },
      {
        photo: <img src={img2} className="h-24 w-24 object-cover" />,
        name: "NathuRam",
        account: "852369741",
        mobile: "785423215",
        email: "b@gmail.com",

        dob: "30/03/2024",
        transaction: (
          <Link
            to={"/admin/Transactions"}
            className="text-blue-700 hover:underline"
          >
            Transaction
          </Link>
        ), //for see transaction of perticular user
        address: "Mahuva",
        edit: (
          <Link
            to={"/admin/users/edituser"}
            className="text-blue-700 hover:underline"
          >
            Manage
          </Link>
        ),
        remove: (
          <button>
            <MdDelete fill="red" className="h-8 w-8 ml-5" />
          </button>
        ),
      },

      // Add more data as needed
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      { Header: "Sr no.", accessor: (row, index) => index + 1 },

      {
        Header: "Photo",
        accessor: "photo",
      },
      { Header: "Name", accessor: "name" },
      { Header: "Account Number", accessor: "account" },
      { Header: "Mobile Number", accessor: "mobile" },
      { Header: "Email", accessor: "email" },
      { Header: "DOB", accessor: "dob" },
      { Header: "Address", accessor: "address" },
      { Header: "Edit", accessor: "edit" },
      { Header: " Transaction", accessor: "transaction" },
      { Header: "Remove", accessor: "remove" },

      // Add more columns as needed
    ],
    []
  );
  return (
    <div>
      <Table data={data} columns={columns} pagination={true} max={2} />
    </div>
  );
}
