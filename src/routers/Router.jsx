import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "../layouts/Header";
import Login from "../pages/Login";
import Register from "../pages/register";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),

      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/homepage",
          element: <Homepage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
