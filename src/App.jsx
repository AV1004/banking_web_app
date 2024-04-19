import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import Error from "./components/Error";
import Root from "./components/Root";
import { useEffect, useState } from "react";
import LoadingGif from "./assets/Loading.gif";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import UserHomePage from "./components/UserHomePage";
import Transaction from "./components/Transaction";
import History from "./components/History";
import UserProfile from "./components/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },
    ],
  },
  {
    path: "/user",
    children: [
      { path: "home", element: <UserHomePage /> },
      { path: "transaction", element: <Transaction /> },
      { path: "history", element: <History /> },
      { path: "profile", element: <UserProfile /> },
    ],
  },
]);

function App() {
  const [introAnimation, setIntroAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntroAnimation(false);
    }, 1000);
  }, []);

  if (introAnimation === true) {
    return (
      <div className="flex flex-col h-screen  bg-gray-100">
        <img className="  m-auto " src={LoadingGif} alt="Welcome" />
      </div>
    );
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;
