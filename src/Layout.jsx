// components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";

const Layout = ({ accountStatus }) => {
  return (
    <>
      <Header accountStatus={accountStatus} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
