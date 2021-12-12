import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './component/Header'
import MainContent from './component/MainContent'
import Verifay from './component/Verifay'
import Passcode from './component/Passcode'
//import Footer from './component/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Route path='/' component={MainContent} exact />
          <Route path='/Verifay' component={Verifay} />
          <Route path='/Passcode' component={Passcode} />
        </main>
      </Router>
    )
  }
}

export default App
