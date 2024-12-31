import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Sidebar.css";
import photo from "../../assets/images/portfolio_pic_new.jpg";
import {
  toggleMobileView,
  toggleClickedHamburgerBtn,
} from "../../store/actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isMobileView = useSelector((state) => state.isMobileView);

  const handleSidebar = () => {
    dispatch(toggleMobileView(false));
    dispatch(toggleClickedHamburgerBtn());
  };

  return (
    <div className="portfolio-container">
      {isMobileView && (
        <div className="top-container">
          <i className="fas fa-times" onClick={() => handleSidebar()}></i>
        </div>
      )}
      <div className="n-container">
        <img src={photo} alt="Portfolio" className="portfolio-picture" />
        <span className="f-span">Princewill Iroka</span>
        <span className="s-span">Software Engineer</span>
        <div className="skills-wrapper">
          <div className="p-div">
            <span>
              <i className="fas fa-dot-circle"></i>React, Next.js
            </span>
            <span>
              <i className="fas fa-dot-circle"></i>Node JS (Express.js, Hapi.js)
            </span>
            <span>
              <i className="fas fa-dot-circle"></i>Mongo DB, Postgre, MySQL
            </span>
            <span>
              <i className="fas fa-dot-circle"></i>APIs (REST, GraphQL)
            </span>
          </div>
        </div>
        <span className="l-span">
          Developed by
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/PrincewillIroka/My-Personal-Portfolio"
            className="link-owner"
          >
            <b> Princewill Iroka </b>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
