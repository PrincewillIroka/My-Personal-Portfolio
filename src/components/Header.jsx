import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { toggleActiveTab, toggleMobileView } from '../store/actions'

class Header extends Component {
  headerItemClicked = (e, tab) => {
    this.props.toggleActiveTab(tab)
  }

  openSidebar = () => {
    this.props.openSidebar()
  }

  render() {
    return (
      <Wrapper>
        <div className="headerContainer">
          <ul className="headerUl">
            <li className="hamburger-btn">
              <i className="fas fa-bars" onClick={this.openSidebar}></i>
            </li>
            <li
              onClick={e => this.headerItemClicked(e, 'About')}
              className={`headerLi ${this.props.activeTab === 'About' &&
                'activeLi'}`}
            >
              About
            </li>
            <li
              onClick={e => this.headerItemClicked(e, 'Projects')}
              className={`headerLi ${this.props.activeTab === 'Projects' &&
                'activeLi'}`}
            >
              Projects
            </li>
            <li
              onClick={e => this.headerItemClicked(e, 'Contact')}
              className={`headerLi ${this.props.activeTab === 'Contact' &&
                'activeLi'}`}
            >
              Contact
            </li>
            {/* <li
              onClick={e => this.headerItemClicked(e, 'Articles')}
              className={`headerLi ${this.props.activeTab === 'Articles' &&
                'activeLi'}`}
            >
              Articles
            </li> */}
          </ul>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeTab: state.activeTab,
    isMobileView: state.isMobileView
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleActiveTab: tab => {
      dispatch(toggleActiveTab(tab))
    },
    openSidebar: () => {
      dispatch(toggleMobileView())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
const Wrapper = styled.div` 
.headerContainer {
  padding-top: 30px;

  .headerUl {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #f0f0f0;
    user-select: none;
    list-style-type:none;

    .hamburger-btn{
      margin-right: 60px;
      align-self:flex-start;
      display: none;
      .fa-bars{
        font-size: 25px;
      }
    }

    .headerLi {
      margin-right: 60px;
      font-weight: bold;
      padding-bottom: 30px;
      cursor: default;
      font-family: font-family: 'Chilanka', cursive;
    }

    .activeLi {
      color: #f44e91;
      border-bottom: 2px solid #f44e91;
    }
  }
}

@media (max-width: 785px) {
  .hamburger-btn{
    display: block !important;
  }

  .hamburger-btn, .headerLi{
      margin-right: 40px !important;
  }
  
}
`
