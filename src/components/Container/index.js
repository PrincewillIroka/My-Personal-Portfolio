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
  const { isMobileView, hasClickedHamburgerBtn } = useSelector(
    (state) => state
  );

  useEffect(() => {
    if (pageWidth > 1070) {
      dispatch(toggleMobileView(false));
    } else if (pageWidth <= 1070) {
      dispatch(toggleMobileView(true));
    }
  }, [dispatch, isMobileView, pageWidth]);

  return (
    <div className="container">
      <div
        className={`${
          isMobileView && hasClickedHamburgerBtn ? "fixed-sidebar" : "sidebar"
        }`}
      >
        <Sidebar />
      </div>
      <MainLayout />
    </div>
  );
};

export default Container;
