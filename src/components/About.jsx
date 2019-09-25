import React, { Component } from 'react'
import styled from 'styled-components'
import photo from '../assets/images/Twitter_Social_Icon_Circle_Color.png'
import photo1 from '../assets/images/GitHub-Mark.png'
import photo2 from '../assets/images/LI-In-Bug.png'
import photo3 from '../assets/images/Instagram_AppIcon_Aug2017.png'
import { connect } from 'react-redux'
import { toggleActiveTab } from '../store/actions'

class About extends Component {
  roundButtonClick(e, tab) {
    this.props.toggleActiveTab(tab)
  }

  render() {
    return (
      <Wrapper>
        <div className="aboutContainer">
          <span>Hello, I'm</span>
          <span>Princewill Iroka</span>
          <span>
            I’m a dreamer and builder with remarkable talent and limitless
            potential. With continuos zeal and diligence to grow personally and
            professionally, offering excellent technical skills, and
            collaboratively participating in teams that deliver software that
            meets and surpasses expectations.
          </span>
          <span>Find Me on</span>
          <div>
            <a target="_blank" href="https://twitter.com/PrincewilIroka">
              <img src={photo} alt="Twitter" />
            </a>
            <a target="_blank" href="https://github.com/PrincewillIroka">
              <img src={photo1} alt="GitHub" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/princewill-iroka-19865784/"
            >
              <img src={photo2} alt="LinkedIn" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/princewilliroka/"
            >
              <img src={photo3} alt="Instagram" />
            </a>
          </div>
          <div>
            <span>HIRE ME</span>
            <span
              onClick={e => {
                this.roundButtonClick(e, 'Projects')
              }}
            >
              PORTFOLIO
            </span>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleActiveTab: tab => {
      dispatch(toggleActiveTab(tab))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(About)

const Wrapper = styled.div`
  .aboutContainer {
    display: flex;
    flex-direction: column;
    padding: 70px 22% 0;

    > span:nth-child(1) {
      color: #707070;
      font-size: 17px;
      font-family: 'Rubik', sans-serif;
    }

    > span:nth-child(2) {
      color: #f44e91;
      font-weight: bold;
      font-size: 20px;
      font-family: 'Roboto', sans-serif;
    }

    > span:nth-child(3) {
      color: #707070;
      font-family: 'Rubik', sans-serif;
      font-size: 17px;
    }

    > span:nth-child(4) {
      color: #707070;
      font-family: 'Fira Sans', sans-serif;
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

    > div:nth-child(6) {
      margin-top: 60px;
      > span {
        cursor: default;
      }
      > span:nth-child(1) {
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

      > span:nth-child(2) {
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
`
