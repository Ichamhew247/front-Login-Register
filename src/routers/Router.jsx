import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/register";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import Aboutme from "../pages/Aboutme";
import Container from "../layouts/Container";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,

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
        {
          path: "/aboutme",
          element: <Aboutme />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
