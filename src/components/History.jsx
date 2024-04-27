import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { PiArrowSquareDownRightLight } from "react-icons/pi";
import { PiArrowSquareUpRightLight } from "react-icons/pi";
import React, { useState } from "react";
import { NotificationDialog } from "./Dilog";

export default function History() {
  // For Active Tab(i.e sent history or received history)
  const [activeTab, setActiveTab] = useState("receive");
  const changePaymentMethod = (method) => {
    method === "receive" ? setActiveTab("receive") : setActiveTab("send");
  };

  // For dilog
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  // Dummy Data
  const receivedMoney = [
    {
      title: "Borrowed",
      name: "John Cardy",
      amount: 2000,
      accountNo: 121212121212,
      mobileNo: 1234567890,
      date: "12-12-2024",
      time: "12:00PM",
    },
    {
      title: "Lent",
      name: "Alice Johnson",
      amount: 1500,
      accountNo: 987654321,
      mobileNo: 9876543210,
      date: "10-10-2024",
      time: "10:00AM",
    },
    {
      title: "Received",
      name: "Bob Smith",
      amount: 3000,
      accountNo: 5555555555,
      mobileNo: 5555555555,
      date: "11-11-2024",
      time: "11:00AM",
    },
    {
      title: "Paid",
      name: "Emily Brown",
      amount: 2500,
      accountNo: 4444444444,
      mobileNo: 4444444444,
      date: "09-09-2024",
      time: "09:00AM",
    },
    {
      title: "Donation",
      name: "Michael Davis",
      amount: 1800,
      accountNo: 7777777777,
      mobileNo: 7777777777,
      date: "08-08-2024",
      time: "08:00AM",
    },
    {
      title: "Gift",
      name: "Sophia Martinez",
      amount: 2200,
      accountNo: 6666666666,
      mobileNo: 6666666666,
      date: "07-07-2024",
      time: "07:00AM",
    },
    {
      title: "Salary",
      name: "William Wilson",
      amount: 1900,
      accountNo: 3333333333,
      mobileNo: 3333333333,
      date: "06-06-2024",
      time: "06:00AM",
    },
    {
      title: "Investment",
      name: "Olivia Anderson",
      amount: 2700,
      accountNo: 2222222222,
      mobileNo: 2222222222,
      date: "05-05-2024",
      time: "05:00AM",
    },
    {
      title: "Refund",
      name: "James Garcia",
      amount: 3200,
      accountNo: 9999999999,
      mobileNo: 9999999999,
      date: "04-04-2024",
      time: "04:00AM",
    },
  ];

  const sentMoney = [
    {
      title: "Loan",
      name: "James Garcia",
      amount: 3099,
      accountNo: 101010101010,
      mobileNo: 9999999999,
      date: "04-04-2024",
      time: "04:00AM",
    },
    {
      title: "Payment",
      name: "Sophia Martinez",
      amount: 2000,
      accountNo: 2222222222,
      mobileNo: 6666666666,
      date: "05-05-2024",
      time: "05:00PM",
    },
    {
      title: "Transfer",
      name: "Michael Davis",
      amount: 1500,
      accountNo: 3333333333,
      mobileNo: 7777777777,
      date: "06-06-2024",
      time: "06:00PM",
    },
    {
      title: "Donation",
      name: "Olivia Anderson",
      amount: 2500,
      accountNo: 4444444444,
      mobileNo: 8888888888,
      date: "07-07-2024",
      time: "07:00PM",
    },
    {
      title: "Salary",
      name: "William Wilson",
      amount: 1800,
      accountNo: 5555555555,
      mobileNo: 9999999999,
      date: "08-08-2024",
      time: "08:00PM",
    },
    {
      title: "Refund",
      name: "Emily Brown",
      amount: 2200,
      accountNo: 6666666666,
      mobileNo: 1111111111,
      date: "09-09-2024",
      time: "09:00PM",
    },
    {
      title: "Expense",
      name: "Bob Smith",
      amount: 2700,
      accountNo: 7777777777,
      mobileNo: 2222222222,
      date: "10-10-2024",
      time: "10:00PM",
    },
    {
      title: "Investment",
      name: "Alice Johnson",
      amount: 3000,
      accountNo: 8888888888,
      mobileNo: 3333333333,
      date: "11-11-2024",
      time: "11:00PM",
    },
    {
      title: "Gift",
      name: "John Cardy",
      amount: 1900,
      accountNo: 9999999999,
      mobileNo: 4444444444,
      date: "12-12-2024",
      time: "12:00PM",
    },
  ];

  return (
    <div className="mt-10 ml-10 mb-20">
      <Button
        className={` ${
          activeTab === "receive"
            ? "bg-[#222831] text-[#EEEEEE]  hover:bg-[#393E46]"
            : ""
        }  mr-4 `}
        variant="text"
        onClick={() => {
          changePaymentMethod("receive");
        }}
      >
        Received
      </Button>
      <Button
        className={` ${
          activeTab === "send"
            ? "bg-[#222831] text-[#EEEEEE]  hover:bg-[#393E46]"
            : ""
        }   `}
        variant="text"
        onClick={() => {
          changePaymentMethod("send");
        }}
      >
        Sent
      </Button>

      {/* History */}
      <div className="flex justify-center items-center gap-36 flex-wrap mt-10 mr-14">
        {activeTab === "receive"
          ? receivedMoney.map((receivedTranscation) => {
              return (
                <Card
                  key={receivedTranscation.accountNo}
                  className="mt-6 w-96 bg-transparent"
                  shadow={false}
                >
                  <CardBody className="bg-[#222831] rounded-t-3xl text-[#EEEEEE]">
                    <PiArrowSquareDownRightLight className="h-16 w-16 mb-3 bg-[#222831]" />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 bg-[#222831] text-[#EEEEEE]"
                    >
                      from
                    </Typography>
                    <Typography
                      variant="h3"
                      color="blue-gray"
                      className="mb-2 bg-[#222831] text-[#EEEEEE]"
                    >
                      {receivedTranscation.name}
                    </Typography>
                    <div className="flex gap-4 bg-[#222831]">
                      <Typography variant="h6" className=" bg-[#222831]">
                        Amount: ₹{receivedTranscation.amount}
                      </Typography>
                      <Typography variant="h6" className=" bg-[#222831]">
                        Title : {receivedTranscation.title}
                      </Typography>
                    </div>
                  </CardBody>
                  <CardFooter className="pt-0 bg-[#222831] ">
                    <NotificationDialog
                      type={"sender"}
                      detail={receivedTranscation}
                    />
                  </CardFooter>
                </Card>
              );
            })
          : sentMoney.map((sentTranscation) => {
              return (
                <Card className="mt-6 w-96 bg-transparent" shadow={false}>
                  <CardBody className="bg-[#222831] rounded-t-3xl text-[#EEEEEE]">
                    <PiArrowSquareUpRightLight className="h-16 w-16 mb-3 bg-[#222831]" />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 bg-[#222831] text-[#EEEEEE]"
                    >
                      sent to
                    </Typography>
                    <Typography
                      variant="h3"
                      color="blue-gray"
                      className="mb-2 bg-[#222831] text-[#EEEEEE]"
                    >
                      {sentTranscation.name}
                    </Typography>
                    <div className="flex gap-4 bg-[#222831]">
                      <Typography variant="h6" className=" bg-[#222831]">
                        Amount: ₹{sentTranscation.amount}
                      </Typography>
                      <Typography variant="h6" className=" bg-[#222831]">
                        Title : {sentTranscation.title}
                      </Typography>
                    </div>
                  </CardBody>
                  <CardFooter className="pt-0 bg-[#222831] ">
                    <NotificationDialog
                      type={"receiver"}
                      detail={sentTranscation}
                    />
                  </CardFooter>
                </Card>
              );
            })}
      </div>
    </div>
  );
}
