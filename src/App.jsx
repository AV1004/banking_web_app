import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Root from "./components/Root";
import { lazy, useEffect, useState } from "react";
import { fetchKeyPairs } from "./https/auth";

const HomePage = lazy(() => import("./components/HomePage"));
const SignUp = lazy(() => import("./components/SignUp"));
const LogIn = lazy(() => import("./components/LogIn"));
const UserHomePage = lazy(() => import("./components/UserHomePage"));
const MakeTransaction = lazy(() => import("./components/MakeTransaction"));
const History = lazy(() => import("./components/History"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const UserNav = lazy(() => import("./components/UserNav"));
const AdminNav = lazy(() => import("./components/admin/AdminNav"));
const AdminHome = lazy(() => import("./components/admin/AdminHome"));
const Transactions = lazy(() => import("./components/admin/Transactions"));
const Users = lazy(() => import("./components/admin/Users"));
const AdminLogin = lazy(() => import("./components/admin/AdminLogin"));
const EditUser = lazy(() => import("./components/admin/EditUser"));

function App() {
  // Error
  const [error, setError] = useState("");
  const [keyPairs, setKeyPairs] = useState({ publicKey: "", privateKey: "" });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error ErrorFrom={"logoutUser"} error={error} />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/signup", element: <SignUp keyPairs={keyPairs} /> },
        { path: "/login", element: <LogIn /> },
      ],
    },
    {
      path: "/user",
      element: <UserNav />,
      errorElement: <Error ErrorFrom={"loginUser"} />,
      children: [
        { index: true, element: <UserHomePage /> },
        { path: "transaction", element: <MakeTransaction /> },
        { path: "history", element: <History /> },
        { path: "profile", element: <UserProfile /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminNav />,
      errorElement: <Error ErrorFrom={"loginUser"} />,
      children: [
        { index: true, element: <AdminHome /> },
        { path: "transaction", element: <Transactions /> },
        { path: "users", element: <Users /> },
        { path: "login", element: <AdminLogin /> },
        { path: "users/edituser", element: <EditUser /> },
      ],
    },
  ]);

  useEffect(() => {
    async function fetchPairsOfKey() {
      try {
        const objectOfKeyPairs = await fetchKeyPairs();
        setKeyPairs(objectOfKeyPairs);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, please try again later.",
        });
      }
    }
    fetchPairsOfKey();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
