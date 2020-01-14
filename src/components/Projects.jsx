import React, { Component } from 'react'
import styled from 'styled-components'
import eLaundryApp from '../assets/images/projectImages/Screenshot_20190910-221244.png'
import worldUniversities from '../assets/images/projectImages/world-universities.png'
import eLaundryWebsite from '../assets/images/projectImages/e-laundry_website.png'
import medicalEquipmentWebsite from '../assets/images/projectImages/medical_equipment_system.png'
import worldNewsApp from '../assets/images/projectImages/world_news_app.png'

export default class Projects extends Component {
  render() {
    return (
      <Wrapper>
        <div className="projects-container">
          <div className='parent-container'>
            <div className='m-container'>
              <div className='item-container'>
                <div
                  className="anImg"
                  style={{
                    backgroundImage: 'url(' + worldNewsApp + ')'
                  }}
                ></div>
                <div className="text-container">
                  <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://worldnewsapp.netlify.com/">
                      World News App
                  </a>
                  </span>
                  <span>News from top sites around the world.</span>
                  <div>
                    <span>Technologies used:</span>
                    <span>React, News API</span>
                  </div>
                  <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://worldnewsapp.netlify.com/">
                      View web app
                  </a>
                  </span>
                </div>
              </div>
              <div className='item-container'>
                <div
                  className="anImg"
                  style={{
                    backgroundImage: 'url(' + worldUniversities + ')'
                  }}
                ></div>
                <div className="text-container">
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="https://play.google.com/store/apps/details?id=com.princewilliroka.worlduniversitiesapp"
                    >
                      World Universities (Mobile App)
                  </a>
                  </span>
                  <span>Thousands of top Universities around the World.</span>
                  <div>
                    <span>Technologies used:</span>
                    <span>React Native</span>
                  </div>
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="https://play.google.com/store/apps/details?id=com.princewilliroka.worlduniversitiesapp"
                    >
                      View app on Google Play Store
                  </a>
                  </span>
                </div>
              </div>
              <div className='item-container'>
                <div
                  className="anImg"
                  style={{
                    backgroundImage: 'url(' + eLaundryApp + ')'
                  }}
                ></div>
                <div className="text-container">
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="https://play.google.com/store/apps/details?id=com.princewill.e_laundry"
                    >
                      e-Laundry (Mobile App)
                  </a>
                  </span>
                  <span>An online laundry services android app.</span>
                  <div>
                    <span>Technologies used:</span>
                    <span>Android(Java)</span>
                  </div>
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="https://play.google.com/store/apps/details?id=com.princewill.e_laundry"
                    >
                      View app on Google Play Store
                  </a>
                  </span>
                </div>
              </div>
              <div className='item-container'>
                <div
                  className="anImg"
                  style={{
                    backgroundImage: 'url(' + medicalEquipmentWebsite + ')'
                  }}
                ></div>
                <div className="text-container">
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="http://medical-equipment--system.herokuapp.com/"
                    >
                      Medical Equipment Management System
                  </a>
                  </span>
                  <span>A web app for medical laboratories.</span>
                  <div>
                    <span>Technologies used:</span>
                    <span>Vue JS, Laravel</span>
                  </div>
                  <span>
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href="http://medical-equipment--system.herokuapp.com/"
                    >
                      View web app
                  </a>
                  </span>
                </div>
              </div>
              <div className='item-container'>
                <div
                  className="anImg"
                  style={{
                    backgroundImage: 'url(' + eLaundryWebsite + ')'
                  }}
                ></div>
                <div className="text-container">
                  <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://e-laundry.com.ng">
                      e-Laundry (Web App)
                  </a>
                  </span>
                  <span>An online laundry services web app.</span>
                  <div>
                    <span>Technologies used:</span>
                    <span>Laravel</span>
                  </div>
                  <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://e-laundry.com.ng">
                      View web app
                  </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  .projects-container {
    display: flex;
    align-items: center;    

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
`
