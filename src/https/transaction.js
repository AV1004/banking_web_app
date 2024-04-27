export const makeTransaction = async (data, authHeader) => {
  let url;
  if (data.acNo) {
    url = "http://localhost:5000/transaction/makeTranscationUsingAccNo";
  }

  if (data.phone) {
    console.log("Phone");
  }

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: authHeader,
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await res.json();

  console.log(resData);
};
