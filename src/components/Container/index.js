import React from "react";
import { useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "../Sidebar";
import MainLayout from "../MainLayout";
import "./Container.css";

const Container = () => {
  const isMobileView = useSelector((state) => state.isMobileView);

  return (
    <div className="container">
      <div className={`${!isMobileView ? "sidebar" : "hidden-sidebar"}`}>
        <Sidebar />
      </div>
      <MainLayout />
    </div>
  );
};

export default Container;
