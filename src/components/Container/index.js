import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useSelector, useDispatch } from "react-redux";

import Sidebar from "../Sidebar";
import MainLayout from "../MainLayout";
import "./Container.css";
import { useWindowDimensions } from "../../hooks";
import { toggleMobileView } from "../../store/actions";

const Container = () => {
  const dispatch = useDispatch();
  const { pageWidth } = useWindowDimensions();
  const isMobileView = useSelector((state) => state.isMobileView);

  useEffect(() => {
    if (pageWidth > 1070) {
      dispatch(toggleMobileView(false));
    }
  }, [dispatch, isMobileView, pageWidth]);

  return (
    <div className="container">
      <div className={`${isMobileView ? "fixed-sidebar" : "sidebar"}`}>
        <Sidebar />
      </div>
      <MainLayout />
    </div>
  );
};

export default Container;
