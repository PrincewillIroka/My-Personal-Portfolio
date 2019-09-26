import React, { Component } from 'react'
import styled from 'styled-components'
import eLaundryApp from '../assets/images/projectImages/Screenshot_20190910-221244.png'
import eLaundryWebsite from '../assets/images/projectImages/e-laundry_website.png'
import medicalEquipmentWebsite from '../assets/images/projectImages/medical_equipment_system.png'
import worldNewsApp from '../assets/images/projectImages/world_news_app.png'

export default class Projects extends Component {
  render() {
    return (
      <Wrapper>
        <div className="projectsContainer">
          <div>
            <div>
              <div
                className="anImg"
                style={{
                  backgroundImage: 'url(' + eLaundryApp + ')'
                }}
              ></div>
              <div>
                <span>e-Laundry (Mobile App)</span>
                <span>An online laundry services android app.</span>
                <div>
                  <span>Technologies used:</span>
                  <span>Android(Java)</span>
                </div>
                <span>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.princewill.e_laundry"
                  >
                    View app on Google Play Store
                  </a>
                </span>
              </div>
            </div>
            <div>
              <div
                className="anImg"
                style={{
                  backgroundImage: 'url(' + eLaundryWebsite + ')'
                }}
              ></div>
              <div>
                <span>e-Laundry (Web App)</span>
                <span>An online laundry services web app.</span>
                <div>
                  <span>Technologies used:</span>
                  <span>Laravel</span>
                </div>
                <span>
                  <a target="_blank" href="https://e-laundry.com.ng">
                    View web app
                  </a>
                </span>
              </div>
            </div>
            <div>
              <div
                className="anImg"
                style={{
                  backgroundImage: 'url(' + medicalEquipmentWebsite + ')'
                }}
              ></div>
              <div>
                <span>Medical Equipment Management System</span>
                <span>A web app for medical laboratories.</span>
                <div>
                  <span>Technologies used:</span>
                  <span>Vue JS, Laravel</span>
                </div>
                <span>
                  <a
                    target="_blank"
                    href="http://medical-equipment--system.herokuapp.com/"
                  >
                    View web app
                  </a>
                </span>
              </div>
            </div>
            <div>
              <div
                className="anImg"
                style={{
                  backgroundImage: 'url(' + worldNewsApp + ')'
                }}
              ></div>
              <div>
                <span>World News App</span>
                <span>Get news from top sites around the world.</span>
                <div>
                  <span>Technologies used:</span>
                  <span>React JS, News API</span>
                </div>
                <span>
                  <a target="_blank" href="https://worldnewsapp.netlify.com/">
                    View web app
                  </a>
                </span>
              </div>
            </div>
            {/* <div></div>
            <div></div> */}
          </div>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  .projectsContainer {
    display: flex;
    align-items: center;

    > div:nth-child(1) {
      display: grid;
      grid-template-columns: repeat(3, 30% [col-start]);
      grid-row-gap: 30px;
      grid-column-gap: 40px;
      max-height: 570px;
      padding: 5% 2% 5% 5%;
      overflow-y: auto;

      > div {
        height: 320px;
        border: 1px solid #eee;
        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05),
          0 2px 7px 0 rgba(72, 22, 66, 0.05);
        &:hover {
          box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1),
            0 2px 7px 0 rgba(72, 22, 66, 0.1);
        }

        > div:nth-child(1) {
          height: 65%;
        }

        > .anImg {
          background-position: top left;
          background-size: cover;
          background-repeat: 'no-repeat';
          width: 100%;
        }

        > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          padding: 15px 5px 5px 10px;
          height: 35%;
          align-items: center;

          > span:nth-child(1) {
            font-weight: bold;
            font-size: 13px;
            color: #1c699b;
            font-family: 'Poppins', sans-serif;
          }

          > span:nth-child(2) {
            font-size: 13px;
            margin: 7px 0;
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
            margin-top: 7px;
            color: #f44e91;
            cursor: default;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
          }
        }
      }

      > div:last-child {
        margin-bottom: 30px;
      }
    }

    @media (max-width: 576px) {
    }

    @media (max-width: 768px) {
    }

    @media (max-width: 992px) {
    }

    @media (max-width: 1200px) {
    }
  }
`
