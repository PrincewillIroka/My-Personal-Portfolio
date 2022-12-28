import React, { useState } from "react";
import WorldUniversities from "../../assets/images/project_images/world_universities_1.png";
import WorldNewsApp from "../../assets/images/project_images/world_news_app_1.png";
// import FreeCoursesPlatform from "../../assets/images/project_images/free_courses_platform.png";
import "./Projects.css";
import Carousel, { CarouselItem } from "../Carousel";

const TABS = [
  {
    title: "World News App",
    description: "News from top sites around the world",
    technologies: "React, News API",
    images: [WorldNewsApp, WorldUniversities],
  },
  {
    title: "World Universities",
    description: "",
    images: [WorldUniversities, WorldNewsApp],
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
    images: [WorldNewsApp, WorldUniversities],
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
          {TABS.map((tab, index) => (
            <span
              onClick={(e) => {
                e.preventDefault();
                handleTabChange(tab.title);
              }}
              className={`single-title ${
                isActiveTab(tab.title) && "active-title"
              }`}
              key={index}
            >
              {tab.title}
            </span>
          ))}
        </div>
        <div className="details">
          <div className="details-images-container">
            <Carousel>
              {activeTab?.images?.length
                ? activeTab.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        className="details-image"
                        src={image}
                        alt="Details"
                      />
                    </CarouselItem>
                  ))
                : null}
            </Carousel>
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
