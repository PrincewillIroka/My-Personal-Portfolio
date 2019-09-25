import React, { Component } from 'react'
import photo from '../assets/images/portfolio_pic2.jpg'
import styled from 'styled-components'

export default class Sidebar extends Component {
  portfolioPictureStyle = () => {
    return {
      height: '250px',
      width: '250px',
      borderRadius: '50%'
    }
  }

  render() {
    return (
      <Wrapper>
        <div className="portfolioContainer">
          <img
            src={photo}
            alt="Portfolio"
            className="portfolioPicture"
            style={this.portfolioPictureStyle()}
          />
          <span>Princewill Iroka</span> <span>Software Developer</span>
          <div>
            <span>
              <i class="fas fa-dot-circle"></i>Node JS, Vue JS, React
            </span>
            <span>
              <i class="fas fa-dot-circle"></i>React Native, Android(Java)
            </span>
            <span>
              <i class="fas fa-dot-circle"></i>Laravel
            </span>
          </div>
          <span>
            Developed by{' '}
            <a target="_blank" href="https://twitter.com/princewiliroka/">
              Princewill Iroka
            </a>{' '}
            with React JS
          </span>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  .portfolioContainer {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span:nth-child(2) {
      margin-top: 20px;
      font-family: 'Pacifico', cursive;
      font-size: 25px;
      color: #1c699b;
    }

    > span:nth-child(3) {
      margin-top: 20px;
      font-size: 17px;
      color: #1c699b;
    }

    > div:nth-child(4) {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      width: 80%;
      font-size: 14px;
      color: #1c699b;

      > span {
        margin-bottom: 10px;
      }

      .fas {
        margin-right: 5px;
      }
    }

    > span:last-child {
      position: fixed;
      bottom: 3px;
      font-size: 14px;
      font-family: 'Fira Sans Extra Condensed', sans-serif;

      > a {
        color: #f44e91;
      }
    }
  }
`
