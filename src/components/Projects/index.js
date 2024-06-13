import React, { useState, useEffect, useCallback } from "react";
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
  const [slideIndex, setSlideIndex] = useState(1);

  const handleTabChange = (value) => {
    const foundTab = TABS.find((tab) => tab.title === value);
    handleSlideshow();
    setSlideIndex(1);
    setActiveTab(foundTab);
  };

  const isActiveTab = (value) => {
    return activeTab.title === value;
  };

  const showSlides = useCallback((n) => {
    let i, slideIndexCopy;
    let slides = document.getElementsByClassName("all-slides");
    if (n > slides.length) {
      slideIndexCopy = 1;
    } else if (n < 1) {
      slideIndexCopy = slides.length;
    } else {
      slideIndexCopy = n;
    }
    for (i = 0; i < slides.length; i++) {
      if (slides[i]) {
        slides[i].style.display = "none";
      }
    }
    if (slides[slideIndexCopy - 1]) {
      slides[slideIndexCopy - 1].style.display = "block";
    }
    setSlideIndex(slideIndexCopy);
  }, []);

  const handleSlideshow = useCallback(() => {
    showSlides(1);
  }, [showSlides]);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  useEffect(() => {
    handleSlideshow();
  }, [handleSlideshow]);

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      showSlides(slideIndex + 1);
    }, 3000); // Change image every 3 seconds
    return () => clearTimeout(slideTimeout);
  }, [showSlides, slideIndex, activeTab]);

  return (
    <div className="projects-container">
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
        <div className="slideshow-container">
          {activeTab.images.map((aImg, index) => (
            <div className="all-slides fade" key={index}>
              <img src={aImg} alt="" className="img-slide" />
            </div>
          ))}

          <button className="prev" onClick={() => plusSlides(-1)}>
            ❮
          </button>
          <button className="next" onClick={() => plusSlides(1)}>
            ❯
          </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
