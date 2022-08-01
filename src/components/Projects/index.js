import React, { useState } from "react";
import WorldUniversities from "../../assets/images/projectImages/world-universities.png";
import WorldNewsApp from "../../assets/images/projectImages/world_news_app.png";
import "./Projects.css";

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
    description: "News from top sites around the world",
    technologies: "React, News API",
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
        <div className="details">
          <div className="details-images-container">
            {activeTab.images.length
              ? activeTab.images.map((image) => (
                  <img className="details-image" src={image} />
                ))
              : null}
          </div>
          <div className="details-info">
            <span className="details-description">{activeTab.description}</span>
            <div className="details-technologies">
              <h5 className="details-technologies-heading">
                Technologies used:&nbsp;
              </h5>
              <span className="details-technologies-info">
                {activeTab.technologies}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
