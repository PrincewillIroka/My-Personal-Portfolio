import React, { useState } from "react";
import styled from "styled-components";
import WorldUniversities from "../assets/images/projectImages/world-universities.png";
import WorldNewsApp from "../assets/images/projectImages/world_news_app.png";

const TABS = [
  {
    title: "World News App",
    description: "",
    images: [WorldUniversities],
  },
  {
    title: "World Universities",
    description: "",
    images: [],
  },
  {
    title: "Free Courses",
    description: "",
    images: [],
  },
  {
    title: "G-mail clone",
    description: "",
    images: [],
  },
  {
    title: "Project Management app",
    description: "",
    images: [],
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState({
    title: "World News App",
    description: "",
    images: [WorldUniversities],
  });

  const handleTabChange = (value) => {
    const foundTab = TABS.find((tab) => tab.title === value);
    setActiveTab(foundTab);
  };

  const isActiveTab = (value) => {
    return activeTab.title === value;
  };

  return (
    <Wrapper>
      <div className="projects-container">
        <div className="tabbed-layout">
          <div className="title-tab">
            {TABS.map((tab) => (
              <span
                onClick={() => handleTabChange(tab.title)}
                className={`single-title ${
                  isActiveTab(tab.title) && "active-title"
                }`}
              >
                {tab.title}
              </span>
            ))}
          </div>
          <div className="details-tab">
            <div className="details-images-container">
              {activeTab.images.length
                ? activeTab.images.map((image) => <img src={image} />)
                : null}
            </div>
            <div className="details-description">
              
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`

  .projects-container {
    display: flex;   
    width: 100%;
    height: 100vh;
    overflow-y:none;    
    
    .tabbed-layout{
      display: flex;

      .title-tab{
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #f3f3f3;

        .single-title{
          height: 50px;
          width:100%;
          display: flex;
          align-items: center;
          padding: 0 10px;
          border-bottom: 1px solid #f3f3f3;
          font-size: 1.0rem;
          opacity: 0.9;
          cursor:pointer;
          font-family: Arial;
        }

        .active-title{
          background: #f33b86;
          color: #fff;
          opacity: 1.0;
        }
      }

      .details-tab{
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .details-images-container{

        }
      }
    }

    .parent-container{
      height: 100vh;
      overflow-y: auto;
      padding: 0 70px 0 50px;
      padding-bottom: 100px !important;

      .m-container {
        display: grid;
        grid-template-columns: repeat(2, 50% [col-start]);
        grid-row-gap: 50px;
        grid-column-gap: 40px;
        padding: 5% 0;

      .item-container {
        height: 400px;
        max-height: 400px;
        border: 1px solid #eee;
        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05),
          0 2px 7px 0 rgba(72, 22, 66, 0.05);
        &:hover {
          box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1),
            0 2px 7px 0 rgba(72, 22, 66, 0.1);
        }

        .anImg {
          background-position: top left;
          background-size: cover;
          background-repeat: 'no-repeat';
          width: 100%;
          height: 65%;
        }

        .text-container {
          display: flex;
          flex-direction: column;
          height: 35%;
          justify-content: center;
          align-items: center;

          > span:nth-child(1) {
            font-weight: bold;
            font-size: 13px;
            color: #1c699b;
            font-family: 'Poppins', sans-serif;
          }

          > span:nth-child(2) {
            font-size: 13px;
            margin: 10px 0;
          }

          > div:nth-child(3) {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            > span:nth-child(1) {
              margin-right: 5px;
              font-weight: bold;
            }
          }

          > span:nth-child(4) {
            font-size: 13px;
            margin-top: 10px;
            color: #f44e91;
            cursor: default;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
          }
        }
      }

    }

  }

  @media (max-width: 600px) {
    .parent-container{
      padding: 0 15px 0 25px !important;
      padding-bottom: 100px !important;
    }
    .m-container {
      grid-template-columns: repeat(1, 100% [col-start]) !important;      
    }
  }
`;
