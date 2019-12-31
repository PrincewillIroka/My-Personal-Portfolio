import React, { Component } from 'react'
import photo from '../assets/images/portfolio_pic2.jpg'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { toggleMobileView } from '../store/actions'

class Sidebar extends Component {
  portfolioPictureStyle = () => {
    return {
      height: '30%',
      width: '65%',
      borderRadius: '50%'
    }
  }

  closeSidebar = () => {
    this.props.closeSidebar()
  }

  render() {
    return (
      <Wrapper>
        <div className="portfolioContainer">
          <div className="top-container">
            <i className="fas fa-times" onClick={this.closeSidebar}></i>
          </div>
          <div className="n-container">
            <img
              src={photo}
              alt="Portfolio"
              className="portfolioPicture"
              style={this.portfolioPictureStyle()}
            />
            <span className="f-span">Princewill Iroka</span>
            <span className="s-span">Software Developer</span>
            <div className="p-div">
              <span>
                <i className="fas fa-dot-circle"></i>React, Vue JS
            </span>
              <span>
                <i className="fas fa-dot-circle"></i>React Native
            </span>
              <span>
                <i className="fas fa-dot-circle"></i>Node JS
            </span>
            </div>
            <span className="l-span">
              Developed by{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/princewiliroka/">
                Princewill Iroka
            </a>{' '}
              with React JS
          </span>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeSidebar: () => {
      dispatch(toggleMobileView())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Sidebar)

const Wrapper = styled.div`
  .portfolioContainer {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    .top-container{
      display:none;
      justify-content:flex-end;
      padding: 10px;
    }

    .fa-times{
      font-size: 30px;
    }

    .n-container{
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > .f-span {
      margin-top: 20px;
      font-family: 'Pacifico', cursive;
      font-size: 1.4375rem;
      color: #1c699b;
    }

    > .s-span {
      margin-top: 20px;
      font-size: 17px;
      color: #1c699b;
    }

    > .p-div {
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

    > .l-span {
      position: fixed;
      bottom: 10px;
      font-size: 14px;
      font-family: 'Fira Sans Extra Condensed', sans-serif;

      > a {
        color: #f44e91;
      }
    }

  }

  @media (min-width: 1160px) {
    .portfolioPicture{
      height: 32% !important;
      width: 50% !important;
    }
  }

  @media (max-width: 1160px) {
    .portfolioPicture{
      height: 30% !important;
      width: 60% !important;
    }
  }

  @media (max-width: 992px) {
    .portfolioPicture{
      height: 30% !important;
      width: 65% !important;
    }
    .p-div{
      font-size: 12px !important;
    }
    .l-span{
      font-size:0.625rem !important;
    }
  }

  @media (max-width: 880px) {
    .portfolioPicture{
      height: 30% !important;
      width: 75% !important;
    }
  }

  @media (max-width: 785px) {
    .top-container{
      display:flex !important;
    }
    .portfolioPicture{
      height: 40% !important;
      width: 25% !important;
    }
  }

  @media (max-width: 670px) {
    .portfolioPicture{
      height: 40% !important;
      width: 30% !important;
    }
  }

  @media (max-width: 490px) {
    .portfolioPicture{
      height: 40% !important;
      width: 40% !important;
    }
  }

  @media (max-width: 400px) {
    .portfolioPicture{
      height: 40% !important;
      width: 45% !important;
    }
  }

`
