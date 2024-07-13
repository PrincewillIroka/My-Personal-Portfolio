import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import "./Projects.css";

const TABS = [
  {
    title: "Quick Chat",
    description:
      "An app that helps you start a quick chat with anyone instantly.",
    technologies: "React, Node JS, Express.js, Mongo DB, Redis",
    images: [
      "https://i.imgur.com/by7itrJ.png",
      "https://i.imgur.com/eNfmDvu.png",
      "https://i.imgur.com/7B79DWr.png",
      "https://i.imgur.com/Z9tdGva.png",
    ],
    liveLink: "https://quickchatt.netlify.app/",
  },
  {
    title: "Ticket Zone",
    description: "A web app to Sell/Buy event tickets easily.",
    technologies: "React, Node JS, Hapi.js, Mongo DB",
    images: [
      "https://imgur.com/jZa7Dr0.png",
      "https://imgur.com/L8qaS5g.png",
      "https://imgur.com/ix0m7UY.png",
      "https://imgur.com/uDOnxx6.png",
    ],
    liveLink: "https://ticket-zone.vercel.app/",
    githubLink: "https://github.com/PrincewillIroka/TicketZone",
  },
  {
    title: "World News App",
    description: "News from top sites around the world",
    technologies: "React, News API",
    images: [
      "https://i.imgur.com/EA92YOC.png",
      "https://i.imgur.com/W1pdeel.png",
      "https://i.imgur.com/9VJVhkx.png",
      "https://i.imgur.com/4Wv19yY.png",
    ],
    liveLink: "https://worldnewsapp.netlify.app/",
    githubLink: "https://github.com/PrincewillIroka/World-News",
  },
  {
    title: "University Portal",
    description: "A web app for a university website/portal.",
    technologies: "React",
    images: [
      "https://i.imgur.com/1SUuBMf.png",
      "https://i.imgur.com/zEfnG7N.png",
      "https://i.imgur.com/seLtHVK.png",
      "https://i.imgur.com/pZUSCCY.png",
    ],
    liveLink: "https://university-portal.netlify.app/",
    githubLink: "https://github.com/PrincewillIroka/university-portal",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const isMobileView = useSelector((state) => state.isMobileView);

  const handleTabChange = (nextIndex) => {
    const foundTab = TABS[nextIndex];
    setActiveTab(foundTab);
    setActiveTabIndex(nextIndex);
    showSlides(0);
  };

  const isActiveTab = (value) => {
    return activeTab.title === value;
  };

  const showSlides = useCallback((n) => {
    let i, slideIndexCopy;
    let slides = document.getElementsByClassName("all-slides");
    if (n === slides.length) {
      slideIndexCopy = 0;
    } else {
      slideIndexCopy = n;
    }
    for (i = 0; i < slides.length; i++) {
      if (i === slideIndexCopy) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
    setSlideIndex(slideIndexCopy);
  }, []);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  useEffect(() => {
    showSlides(0);
  }, [showSlides]);

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      showSlides(slideIndex + 1);
    }, 3000); // Change image every 3 seconds
    return () => clearTimeout(slideTimeout);
  }, [showSlides, slideIndex]);

  const handleNextProject = () => {
    let nextIndex = activeTabIndex + 1;
    if (activeTabIndex === TABS.length - 1) {
      nextIndex = 0;
    }
    handleTabChange(nextIndex);
  };

  return (
    <div className="projects-container">
      <div className="title-tab">
        {TABS.map((tab, index) => (
          <span
            onClick={(e) => {
              handleTabChange(index);
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
        <div className="slideshow-container">
          {activeTab.images.map((aImg, index) => (
            <div className="all-slides fade" key={index}>
              <img src={aImg} alt="" className="img-slide" />
            </div>
          ))}

          {slideIndex > 0 && (
            <button className="prev" onClick={() => plusSlides(-1)}>
              ❮
            </button>
          )}
          <button className="next" onClick={() => plusSlides(1)}>
            ❯
          </button>
        </div>
        <div className="details-info">
          <div className="details-description-wrapper">
            {isMobileView && (
              <span className="details-title">{activeTab.title}:</span>
            )}
            <span className="details-description">{activeTab.description}</span>
          </div>
          <div className="details-technologies">
            <h5 className="details-technologies-heading">
              Technologies used:&nbsp;
            </h5>
            <span className="details-technologies-info">
              {activeTab.technologies}
            </span>
          </div>
          <div className="details-app-container">
            {activeTab.liveLink && (
              <a
                href={`${activeTab.liveLink}`}
                target="_blank"
                rel="noreferrer"
                className="details-app-single details-app-live"
              >
                View Live
              </a>
            )}
            {activeTab.githubLink && (
              <a
                href={`${activeTab.githubLink}`}
                target="_blank"
                rel="noreferrer"
                className="details-app-single details-app-github"
              >
                Github
              </a>
            )}
            {isMobileView && (
              <button
                className="details-app-single details-app-next"
                onClick={() => handleNextProject()}
              >
                Next Project
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
