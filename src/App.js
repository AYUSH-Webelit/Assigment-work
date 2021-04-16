import './app.css';
import React, { Component } from 'react'
import Info from './components/Info/Info'
import Intro from './components/Intro/Intro'
import Nav from './components/Navbar/Nav'
import Services from './components/Services/Services'
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div className='body'>
        <Nav/>
        <Intro/>
        <Info/>
        <Services/>
        <Team/>
        <Footer/>
      </div>
    )
  }
}

