import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "../layouts/Header";
import Login from "../pages/Login";
import Register from "../pages/register";
import Homepage from "../pages/Homepage";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
