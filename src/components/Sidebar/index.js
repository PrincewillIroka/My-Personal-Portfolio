import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import "./Sidebar.css";
import photo from "../../assets/images/portfolio_pic_new.jpg";
import { toggleMobileView } from "../../store/actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isMobileView = useSelector((state) => state.isMobileView);

  const closeSidebar = () => {
    dispatch(toggleMobileView(false));
  };

  return (
    <div className="portfolio-container">
      {isMobileView && (
        <div className="top-container">
          <i className="fas fa-times" onClick={() => closeSidebar()}></i>
        </div>
      )}
      <div className="n-container">
        <img src={photo} alt="Portfolio" className="portfolio-picture" />
        <span className="f-span">Princewill Iroka</span>
        <span className="s-span">Senior Software Engineer</span>
        <div className="skills-wrapper">
          <div className="p-div">
            <span>
              <i className="fas fa-dot-circle"></i>React, React Native
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
            href="https://github.com/PrincewillIroka"
          >
            <span> Princewill Iroka </span>
          </a>
          with React JS
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
