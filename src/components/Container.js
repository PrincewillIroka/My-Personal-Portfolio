import React, { Component } from 'react'
import Sidebar from './Sidebar'
import MainLayout from './MainLayout'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { connect } from 'react-redux'

class Container extends Component {
    appStyle = () => {
        return {
            display: 'flex'
        }
    }
    render() {
        return (
            <Wrapper>
                <div className="App" style={this.appStyle()}>
                    <div className={`${this.props.isMobileView ? 'sidebar' : 'hiddenSidebar'}`}>
                        <Sidebar></Sidebar>
                    </div>
                    <div className="mainlayout">
                        <MainLayout></MainLayout>
                    </div>
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

export default connect(
    mapStateToProps,
    null
)(Container)

const Wrapper = styled.div`
  .App {
    display: flex;
    > div:nth-child(1) {
      width: 30%;
      background-color: #c0e2ed;
    }

    @media (max-width: 785px) {
      .sidebar {
        position: fixed;
        top: 0;
        left:0;
        width: 95% !important;
      }

        .hiddenSidebar{
            display: none;
        }
    }
  }
`
