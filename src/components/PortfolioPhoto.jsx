import React, { Component } from 'react'
import photo from '../assets/images/portfolio_pic3.jpg'

export default class PortfolioPhoto extends Component {
  portfolioPictureStyle = () => {
    return {
      height: '100vh',
      width: '40%'
    }
  }

  render() {
    return (
      <img
        src={photo}
        alt="Portfolio"
        className="portfolioPicture"
        style={this.portfolioPictureStyle()}
      />
    )
  }
}
