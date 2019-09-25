import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import MainLayout from './components/MainLayout'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/css/all.min.css'

class App extends Component {
  appStyle = () => {
    return {
      display: 'flex'
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <div className="App" style={this.appStyle()}>
            <div>
              <Sidebar></Sidebar>
            </div>
            <div>
              <MainLayout></MainLayout>
            </div>
          </div>
        </Wrapper>
      </Provider>
    )
  }
}

const Wrapper = styled.div`
  .App {
    display: flex;
    > div:nth-child(1) {
      width: 30%;
      background-color: #c0e2ed;
    }
  }
`

export default App
