import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import PortfolioPhoto from './components/PortfolioPhoto'
import MainLayout from './components/MainLayout'

class App extends Component {
  appStyle = () => {
    return {
      display: 'flex'
    }
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App" style={this.appStyle()}>
          <PortfolioPhoto></PortfolioPhoto>
          <MainLayout></MainLayout>
        </div>
      </Provider>
    )
  }
}

export default App
