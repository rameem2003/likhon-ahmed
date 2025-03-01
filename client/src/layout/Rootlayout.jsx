import React from "react";
import Navbar from "../components/Navber";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
