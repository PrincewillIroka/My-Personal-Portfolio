import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../Header";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Articles from "../Articles";

const MainLayout = () => {
  const activeTab = useSelector(({ activeTab }) => activeTab);

  const ActiveComponent = (tab) => {
    return tab.activeTab === "About" ? (
      <About />
    ) : tab.activeTab === "Projects" ? (
      <Projects />
    ) : tab.activeTab === "Contact" ? (
      <Contact />
    ) : (
      <Articles />
    );
  };

  return (
    <Wrapper>
      <div className="container">
        <Header />
        <ActiveComponent activeTab={activeTab} />
      </div>
    </Wrapper>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
