import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleActiveTab } from "../../store/actions";
import "./Header.css";

const Header = () => {
  const { activeTab } = useSelector((state) => state);
  const dispatch = useDispatch();

  const headerItemClicked = (e, tab) => {
    dispatch(toggleActiveTab(tab));
  };

  const openSidebar = () => {
    dispatch(openSidebar());
  };

  return (
    <div className="header-container">
      <ul className="header-ul">
        <li className="hamburger-btn">
          <i className="fas fa-bars" onClick={() => openSidebar()}></i>
        </li>
        <li
          onClick={(e) => headerItemClicked(e, "About")}
          className={`header-list-item ${activeTab === "About" && "activeLi"}`}
        >
          About
        </li>
        <li
          onClick={(e) => headerItemClicked(e, "Projects")}
          className={`header-list-item ${
            activeTab === "Projects" && "activeLi"
          }`}
        >
          Projects
        </li>
        <li
          onClick={(e) => headerItemClicked(e, "Contact")}
          className={`header-list-item ${
            activeTab === "Contact" && "activeLi"
          }`}
        >
          Contact
        </li>
        {/* <li
              onClick={e => headerItemClicked(e, 'Articles')}
              className={`header-list-item ${activeTab === 'Articles' &&
                'activeLi'}`}
            >
              Articles
            </li> */}
      </ul>
    </div>
  );
};

export default Header;
