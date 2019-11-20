import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Container from './components/Container'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}

