import React, { Component } from "react";
import styled from "styled-components";
import photo from "../assets/images/Twitter_Social_Icon_Circle_Color.png";
import photo1 from "../assets/images/GitHub-Mark.png";
import photo2 from "../assets/images/LI-In-Bug.png";
import photo3 from "../assets/images/Instagram_AppIcon_Aug2017.png";
import { connect } from "react-redux";
import { toggleActiveTab } from "../store/actions";

class About extends Component {
  roundButtonClick(e, tab) {
    this.props.toggleActiveTab(tab);
  }

  // downloadResume() {
  //   const link = document.createElement("a");
  //   link.href = "./documents/Princewill_Iroka_Resume.pdf";
  //   link.download = "Princewill Iroka Resume";
  //   link.dispatchEvent(new MouseEvent("click"));
  // }

  render() {
    return (
      <Wrapper>
        <div className="about-container">
          <div className="parent-container">
            <span>Hello, I'm</span>
            <span>Princewill Iroka</span>
            <span>
              I am a productive Software Developer who is passionate about
              developing scalable, maintainable, cutting-edge web and mobile
              apps. Using flexible modern Software Architecture principles, I
              can work in a team or with minimal supervision to deliver high
              quality software products that meets and exceeds users'
              expectation.
            </span>
            <span>Find Me on</span>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/PrincewilIroka"
              >
                <img src={photo} alt="Twitter" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/PrincewillIroka"
              >
                <img src={photo1} alt="GitHub" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/princewill-iroka-19865784/"
              >
                <img src={photo2} alt="LinkedIn" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/princewilliroka/"
              >
                <img src={photo3} alt="Instagram" />
              </a>
            </div>
            <div className="c-t-div">
              <span
                className="hire-span"
                onClick={e => this.roundButtonClick(e, "Contact")}
              >
                HIRE ME
              </span>
              {/* <a className="resume-link" target="_blank" href="https://drive.google.com/open?id=1uBx5NHt0po_osHWxYuaeVDCDvzGDR8Rl">
                MY RESUME
              </a> */}
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleActiveTab: tab => {
      dispatch(toggleActiveTab(tab));
    }
  };
};

export default connect(null, mapDispatchToProps)(About);

const Wrapper = styled.div`
  .about-container {
    display: flex;

    .parent-container {
      display: flex;
      flex-direction: column;
      padding: 70px 22% 0;
      height: 100vh;
      overflow-y: auto;

      > span:nth-child(1) {
        color: #707070;
        font-size: 17px;
        font-family: "Rubik", sans-serif;
      }

      > span:nth-child(2) {
        color: #f44e91;
        font-weight: bold;
        font-size: 20px;
        font-family: "Roboto", sans-serif;
      }

      > span:nth-child(3) {
        color: #707070;
        font-family: "Rubik", sans-serif;
        font-size: 17px;
      }

      > span:nth-child(4) {
        color: #707070;
        font-family: "Fira Sans", sans-serif;
        font-size: 18px;
      }

      > span:nth-child(2),
      > span:nth-child(3),
      > span:nth-child(4) {
        margin-top: 25px;
      }

      > div:nth-child(5) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a:nth-child(1) img {
          height: 40px;
          width: 40px;
        }

        a:nth-child(2) img {
          height: 50px;
          width: 50px;
        }

        a:nth-child(3) img {
          height: 35px;
          width: 45px;
        }

        a:nth-child(4) img {
          height: 35px;
          width: 35px;
        }
      }

      .c-t-div {
        display: flex;
        margin: 60px 0 100px;
        > span {
          cursor: default;
        }
        .hire-span {
          background-color: #f33b86;
          border-radius: 50px;
          padding: 15px 40px;
          color: #fff;
          margin-right: 30px;
          border: 1px solid transparent;

          &:hover {
            background-color: #fff;
            border: 1px solid #f33b86;
            color: #f33b86;
          }
        }

        .resume-link {
          border: 1px solid #f33b86;
          border-radius: 50px;
          padding: 15px 30px;
          color: #f33b86;

          &:hover {
            background-color: #f33b86;
            border: 1px solid transparent;
            color: #fff;
          }
        }
      }
    }

    @media (max-width: 600px) {
      .parent-container {
        padding: 60px 30px 80px !important;
      }
    }

    @media (max-width: 785px) {
      .parent-container {
        padding: 60px;
      }
      .hire-span {
        padding: 15px 25px !important;
      }
      .resume-link {
        padding: 15px 20px !important;
      }
    }
  }
`;
