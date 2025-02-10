import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default RootLayout;
