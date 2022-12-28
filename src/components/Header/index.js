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
    <div className="headerContainer">
      <ul className="headerUl">
        <li className="hamburger-btn">
          <i className="fas fa-bars" onClick={openSidebar}></i>
        </li>
        <li
          onClick={(e) => headerItemClicked(e, "About")}
          className={`headerLi ${activeTab === "About" && "activeLi"}`}
        >
          About
        </li>
        <li
          onClick={(e) => headerItemClicked(e, "Projects")}
          className={`headerLi ${activeTab === "Projects" && "activeLi"}`}
        >
          Projects
        </li>
        <li
          onClick={(e) => headerItemClicked(e, "Contact")}
          className={`headerLi ${activeTab === "Contact" && "activeLi"}`}
        >
          Contact
        </li>
        {/* <li
              onClick={e => headerItemClicked(e, 'Articles')}
              className={`headerLi ${activeTab === 'Articles' &&
                'activeLi'}`}
            >
              Articles
            </li> */}
      </ul>
    </div>
  );
};

export default Header;
