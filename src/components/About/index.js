import React from "react";
import { useDispatch } from "react-redux";
import { toggleActiveTab } from "../../store/actions";
import photo from "../../assets/images/Twitter_Social_Icon_Circle_Color.png";
import photo1 from "../../assets/images/GitHub-Mark.png";
import photo2 from "../../assets/images/LI-In-Bug.png";
import photo3 from "../../assets/images/Stack_Overflow_icon.png";
import photo4 from "../../assets/images/dev.to-icon.png";
import "./About.css";

const About = () => {
  const dispatch = useDispatch();

  const roundButtonClick = (e, tab) => {
    dispatch(toggleActiveTab(tab));
  };

  // downloadResume() {
  //   const link = document.createElement("a");
  //   link.href = "./documents/Princewill_Iroka_Resume.pdf";
  //   link.download = "Princewill Iroka Resume";
  //   link.dispatchEvent(new MouseEvent("click"));
  // }

  return (
    <div className="about-container">
      <div className="parent-container">
        <span className="about-text-1">Hello, I'm</span>
        <span className="about-text-2">Princewill Iroka</span>
        <span className="about-text-3">
          I am a productive Fullstack Software Engineer who is passionate about
          developing scalable, maintainable, cutting-edge web and mobile apps.
          Using flexible modern Software Architecture principles, I can work in
          a team or with minimal supervision to deliver high quality software
          products that meets and exceeds users' expectation.
        </span>
        <span className="about-text-4">Find Me on:</span>
        <div className="find-me-on-link-container">
          <a
            className="find-me-on-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/princewill-iroka-19865784/"
          >
            <img src={photo2} alt="LinkedIn" />
          </a>
          <a
            className="find-me-on-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/PrincewillIroka"
          >
            <img src={photo1} alt="GitHub" />
          </a>
          <a
            className="find-me-on-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/5994977/princewill-iroka"
          >
            <img src={photo3} alt="Stackoverflow" />
          </a>
          <a
            className="find-me-on-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/princewilliroka"
          >
            <img src={photo4} alt="Dev.to" />
          </a>
          <a
            className="find-me-on-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/PrincewillIroka"
          >
            <img src={photo} alt="Twitter" />
          </a>
        </div>
        <div className="c-t-div">
          <span
            className="hire-span"
            onClick={(e) => roundButtonClick(e, "Contact")}
          >
            HIRE ME
          </span>
          {/* <a className="resume-link" target="_blank" href="https://drive.google.com/open?id=1uBx5NHt0po_osHWxYuaeVDCDvzGDR8Rl">
                MY RESUME
              </a> */}
        </div>
      </div>
    </div>
  );
};

export default About;
