import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import bg from "../assets/6173954.jpg";

const Main = () => {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
