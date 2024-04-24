// Function get publick and digital key pairs
export const fetchKeyPairs = async () => {
  const res = await fetch("http://localhost:5000/users/keyGeneration");
  const resData = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch keypairs!");
  }
  return resData;
};

export const startRegister = async (data) => {
  const res = await fetch("http://localhost:5000/users/register", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();

  if (!res.ok) {
    throw new Error("Registration Failed!");
  }
  return resData;
};

export const verifySign = async (data) => {
  const res = await fetch("http://localhost:5000/users/verify", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();

  if (!res.ok) {
    throw new Error("Digital Signature verification failed!");
  }
  return resData;
};

export const verifyEmail = async (data) => {
  const res = await fetch("http://localhost:5000/users/verifyotp", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();

  if (!res.ok) {
    throw new Error("Email verification failed!");
  }
  return resData;
};
