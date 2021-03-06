import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./Sidebar";
import MainLayout from "./MainLayout";

class Container extends Component {
  appStyle = () => {
    return {
      display: "flex",
    };
  };
  render() {
    return (
      <Wrapper>
        <div className="App" style={this.appStyle()}>
          <div
            className={`${
              this.props.isMobileView ? "sidebar" : "hiddenSidebar"
            }`}
          >
            <Sidebar></Sidebar>
          </div>
          <div className="mainlayout">
            <MainLayout></MainLayout>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeTab: state.activeTab,
    isMobileView: state.isMobileView,
  };
};

export default connect(mapStateToProps, null)(Container);

const Wrapper = styled.div`
  .App {
    display: flex;
    > div:nth-child(1) {
      width: 30%;
      background-color: #F3F3F3;
    }

    @media (max-width: 785px) {
      .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 95% !important;
      }

      .hiddenSidebar {
        display: none;
      }
    }
  }
`;
