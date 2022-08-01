import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleActiveTab, toggleMobileView } from "../../store/actions";
import "./Header.css";

class Header extends Component {
  headerItemClicked = (e, tab) => {
    this.props.toggleActiveTab(tab);
  };

  openSidebar = () => {
    this.props.openSidebar();
  };

  render() {
    return (
      <div className="headerContainer">
        <ul className="headerUl">
          <li className="hamburger-btn">
            <i className="fas fa-bars" onClick={this.openSidebar}></i>
          </li>
          <li
            onClick={(e) => this.headerItemClicked(e, "About")}
            className={`headerLi ${
              this.props.activeTab === "About" && "activeLi"
            }`}
          >
            About
          </li>
          <li
            onClick={(e) => this.headerItemClicked(e, "Projects")}
            className={`headerLi ${
              this.props.activeTab === "Projects" && "activeLi"
            }`}
          >
            Projects
          </li>
          <li
            onClick={(e) => this.headerItemClicked(e, "Contact")}
            className={`headerLi ${
              this.props.activeTab === "Contact" && "activeLi"
            }`}
          >
            Contact
          </li>
          {/* <li
              onClick={e => this.headerItemClicked(e, 'Articles')}
              className={`headerLi ${this.props.activeTab === 'Articles' &&
                'activeLi'}`}
            >
              Articles
            </li> */}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeTab: state.activeTab,
    isMobileView: state.isMobileView,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleActiveTab: (tab) => {
      dispatch(toggleActiveTab(tab));
    },
    openSidebar: () => {
      dispatch(toggleMobileView());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
