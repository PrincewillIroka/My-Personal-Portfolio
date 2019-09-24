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
            </div>
            <div>
              <div
                className="anImg"
                style={{
                  backgroundImage: 'url(' + eLaundryWebsite + ')'
                }}
              ></div>
            </div>
            <div>
              <div
                className="anImg"
                style={{
                  backgroundImage: 'url(' + medicalEquipmentWebsite + ')'
                }}
              ></div>
            </div>
            <div>
              <div
                className="anImg"
                style={{
                  backgroundImage: 'url(' + worldNewsApp + ')'
                }}
              ></div>
            </div>
            <div></div>
            <div></div>
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
          height: 70%;
        }

        > .anImg {
          background-position: top left;
          background-size: cover;
          background-repeat: 'no-repeat';
          width: 100%;
        }
      }

      > div:last-child {
        margin-bottom: 30px;
      }
    }
  }
`
