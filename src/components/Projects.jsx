import React, { Component } from 'react'
import styled from 'styled-components'

export default class Projects extends Component {
  render() {
    return (
      <Wrapper>
        <div className="projectsContainer">
          <div>
            <div>
              
            </div>
            <div></div>
            <div></div>
            <div></div>
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
      grid-template-columns: repeat(2, 45% [col-start]);
      grid-row-gap: 30px;
      grid-column-gap: 40px;
      max-height: 570px;
      padding: 5% 0 5% 5%;

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

        

      }

      > div:last-child {
        margin-bottom: 30px;
      }
    }

    
  }
`
