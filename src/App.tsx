import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { Home, NotFound } from "./pages";
import { RootLayout } from "./layouts";
import { Scroll } from "./animation";

// import global styles
import "./styles/overrides.css";
import "./styles/utils.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  // we can create another route object here if we don't want the <RootLayout /> to affect it
]);

export default function App() {
  useEffect(() => {
    Scroll();
  }, []);
  return (
    <>
      <Outlet />
      <RouterProvider router={router} />
    </>
  );
}
