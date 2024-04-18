import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import Error from "./components/Error";
import Root from "./components/Root";
import { useEffect, useState } from "react";

import LoadingGif from "./assets/Loading.gif";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/signup", element: <SignUp/> },
      { path: "/login", element: "login" },
    ],
  },
]);

function App() {
  const [introAnimation, setIntroAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntroAnimation(false);
    }, 6000);
  }, []);

  if (introAnimation === true) {
    return (
      <div className="flex flex-col h-screen bg-[#EEEEEE]">
        <img className="  m-auto " src={LoadingGif} alt="Welcome" />
      </div>
    );
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;
