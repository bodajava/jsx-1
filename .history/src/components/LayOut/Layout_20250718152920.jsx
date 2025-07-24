import React from "react";
import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
