import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Articles from './Articles'
import { connect } from 'react-redux'

class MainLayout extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <Header></Header>
          <ActiveComponent activeTab={this.props.activeTab} />
        </div>
      </Wrapper>
    )
  }
}

const ActiveComponent = tab => {
  return tab.activeTab === 'About' ? (
    <About />
  ) : tab.activeTab === 'Projects' ? (
    <Projects />
  ) : tab.activeTab === 'Contact' ? (
    <Contact />
  ) : (
    <Articles />
  )
}

const mapStateToProps = state => {
  return {
    activeTab: state.activeTab
  }
}

export default connect(mapStateToProps)(MainLayout)

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
  }
`
