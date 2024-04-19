import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Root from "./components/Root";
<<<<<<< HEAD
import { lazy } from "react";
import UserNav from "./components/UserNav";

const HomePage = lazy(() => import("./components/HomePage"));
const SignUp = lazy(() => import("./components/SignUp"));
const LogIn = lazy(() => import("./components/LogIn"));
const UserHomePage = lazy(() => import("./components/UserHomePage"));
const Transaction = lazy(() => import("./components/Transaction"));
const History = lazy(() => import("./components/History"));
const UserProfile = lazy(() => import("./components/UserProfile"));
=======
import { lazy } from "react"
import UserNav from "./components/UserNav";

const HomePage=lazy(()=>import("./components/HomePage"));
const SignUp=lazy(()=>import("./components/SignUp"));
const LogIn=lazy(()=>import("./components/LogIn"));
const UserHomePage=lazy(()=>import("./components/UserHomePage"));
const Transaction=lazy(()=>import("./components/Transaction"));
const History=lazy(()=>import("./components/History"));
const UserProfile=lazy(()=>import("./components/UserProfile"));
>>>>>>> 823ca6338589d616903e1934a7fbd6136b748b31

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
    element: <UserNav />,
    children: [
      { path: "home", element: <UserHomePage /> },
      { path: "transaction", element: <Transaction /> },
      { path: "history", element: <History /> },
      { path: "profile", element: <UserProfile /> },
    ],
  },
]);

function App() {
<<<<<<< HEAD
  return <RouterProvider router={router} />;
=======
  
    return <RouterProvider router={router} />;
  
>>>>>>> 823ca6338589d616903e1934a7fbd6136b748b31
}

export default App;
