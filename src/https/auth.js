// Function get publick and digital key pairs
export const fetchKeyPairs = async () => {
  const res = await fetch("http://localhost:5000/users/keyGeneration");
  const resData = await res.json();

  if (!res.ok) {
    resData.message = "Failed to fetch keypairs!";
    return resData.message;
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

  if (!res.ok || res.status !== 250) {
    return resData.message;
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
    resData.message = "Digital Signature verification failed!";
    return resData.message;
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

  if (res.status !== 200) {
    return resData.message;
  }

  return resData;
};

export const login = async (data) => {
  const res = await fetch("http://localhost:5000/users/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await res.json();

  if (res.status !== 200) {
    return resData.message;
  }

  return resData;
};
