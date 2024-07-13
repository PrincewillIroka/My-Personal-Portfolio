import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleActiveTab,
  toggleClickedHamburgerBtn,
  toggleMobileView,
} from "../../store/actions";
import "./Header.css";

const Header = () => {
  const { activeTab } = useSelector((state) => state);
  const dispatch = useDispatch();

  const headerItemClicked = (e, tab) => {
    dispatch(toggleActiveTab(tab));
  };

  const openSidebar = () => {
    dispatch(toggleMobileView(true));
    dispatch(toggleClickedHamburgerBtn());
  };

  return (
    <div className="header-container">
      <ul className="header-ul">
        <li className="hamburger-btn">
          <i
            className="fas fa-bars hamburger-icon"
            onClick={() => openSidebar()}
          ></i>
        </li>
        <li className="nav-links-container">
          <ul className="nav-links">
            <li
              onClick={(e) => headerItemClicked(e, "About")}
              className={`header-list-item ${
                activeTab === "About" && "active-li"
              }`}
            >
              About
            </li>
            <li
              onClick={(e) => headerItemClicked(e, "Projects")}
              className={`header-list-item ${
                activeTab === "Projects" && "active-li"
              }`}
            >
              Projects
            </li>
            <li
              onClick={(e) => headerItemClicked(e, "Contact")}
              className={`header-list-item ${
                activeTab === "Contact" && "active-li"
              }`}
            >
              Contact
            </li>
            {/* <li
              onClick={e => headerItemClicked(e, 'Articles')}
              className={`header-list-item ${activeTab === 'Articles' &&
                'active-li'}`}
            >
              Articles
            </li> */}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Header;
