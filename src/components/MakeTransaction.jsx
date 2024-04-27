import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { makeTransaction } from "../https/transaction";
import { encrypt } from "../utils/encryptDecrypt";

export default function MakeTransaction() {
  const [activeTab, setActiveTab] = useState("accountNo");
  const auth = useAuthUser();
  const authHeader = useAuthHeader();

  const changePaymentMethod = (method) => {
    method === "account" ? setActiveTab("accountNo") : setActiveTab("phoneNo");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);

    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;

    let finalData;

    const encyptedUPIPin = encrypt(data.upiPin);

    if (data.AcoountNumber) {
      if (data.AcoountNumber === auth.userId) {
        throw new Error("Can't send money to your Account No");
      }
      finalData = {
        senderId: auth.userId,
        acNo: data.AcoountNumber,
        upiPin: encyptedUPIPin,
        title: data.title,
        amount: data.amount,
      };
    }

    if (data.mobileNumber) {
      finalData = {
        senderId: auth.userId,
        phone: data.mobileNumber,
        upiPin: encyptedUPIPin,
        title: data.title,
        amount: data.amount,
      };
    }

    makeTransaction(finalData, authHeader);
  };

  return (
    <div className="mt-10 ml-10">
      <Button
        className={` ${
          activeTab === "accountNo"
            ? "bg-[#222831] text-[#EEEEEE]  hover:bg-[#393E46]"
            : ""
        }  mr-4 `}
        variant="text"
        onClick={() => {
          changePaymentMethod("account");
        }}
      >
        Using Account Number
      </Button>
      <Button
        className={` ${
          activeTab === "phoneNo"
            ? "bg-[#222831] text-[#EEEEEE]  hover:bg-[#393E46]"
            : ""
        }   `}
        variant="text"
        onClick={() => {
          changePaymentMethod("phone");
        }}
      >
        Using Phone Number
      </Button>

      {/* Form */}
      <div className="flex justify-center items-center  mt-10 mr-14">
        <Card className="w-full max-w-[48rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="bg-[#222831] rounded-r-xl">
            {activeTab === "accountNo" ? (
              <form onSubmit={submitHandler} className="bg-[#222831] p-8 ">
                <h1 className="text-4xl tracking-wide font-light  mb-8 text-center bg-[#222831] text-[#EEEEEE]">
                  Using AccountNo
                </h1>
                <input
                  type="text"
                  name="AcoountNumber"
                  required
                  placeholder="Account Number"
                  className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
                />
                <input
                  type="password"
                  name="upipin"
                  placeholder="Enter your six digit PIN"
                  required
                  className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  required
                  className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
                />
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount in ₹"
                  required
                  className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
                />
                <button
                  type="submit"
                  className="bg-[#EEEEEE] mt-6 text-[#222831] py-2 px-4 rounded w-full  hover:bg-[#393E46] hover:text-[#EEEEEE]"
                >
                  Send Money
                </button>
                {/* </div> */}
              </form>
            ) : (
              <form onSubmit={submitHandler} className="bg-[#222831] p-8 ">
                <h1 className="text-4xl tracking-wide font-light  mb-8 text-center bg-[#222831] text-[#EEEEEE]">
                  Using PhoneNo
                </h1>
                <input
                  type="number"
                  name="mobileNumber"
                  required
                  placeholder="Mobile Number"
                  className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
                />
                <input
                  type="password"
                  name="upipin"
                  placeholder="Enter your six digit PIN"
                  required
                  className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  required
                  className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
                />
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount in ₹"
                  required
                  className="border p-2 w-full mb-2 bg-[#222831] text-[#EEEEEE]"
                />
                <button
                  type="submit"
                  className="bg-[#EEEEEE] mt-6 text-[#222831] py-2 px-4 rounded w-full  hover:bg-[#393E46] hover:text-[#EEEEEE]"
                >
                  Send Money
                </button>
                {/* </div> */}
              </form>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
