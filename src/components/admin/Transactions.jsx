import React from "react";
import Table from "../Table";
export default function Transactions() {
  const data = React.useMemo(
    () => [
      {
        from: "John",
        to: "cena",
        amount: "10000",
        date: "30/03/2024",
        time: "5:07 PM",
        status: "Success",
        // action: <Link to={""}>Manage</Link>
      },
      {
        type: "Send",
        from: "Valay",
        to: "Raina",
        amount: "5000",
        date: "12/03/2024",
        time: "4:06 AM",
        status: "Failed",
        // action: <Link to={""}>Manage</Link>
      },
      {
        from: "parth",
        to: "kuldip",
        amount: "10000",
        date: "30/03/2024",
        time: "5:07 PM",
        status: "Success",
      },
      {
        from: "Valay",
        to: "deva",
        amount: "5000",
        date: "12/03/2024",
        time: "4:06 AM",
        status: "Failed",
        // action: <Link to={""}>Manage</Link>
      },
      // Add more data as needed
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      { Header: "Sr no.", accessor: (row, index) => index + 1 },
      { Header: "From", accessor: "from" },
      { Header: "To", accessor: "to" },
      { Header: "Amount", accessor: "amount" },
      { Header: "Date", accessor: "date" },
      { Header: "Time", accessor: "time" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <span style={{ color: value === "Success" ? "green" : "red" }}>
            {value}
          </span>
        ),
      },
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
