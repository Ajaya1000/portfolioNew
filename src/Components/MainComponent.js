import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Works from "./WorkComponent";
import Contact from "./ContactComponent";
// import {animateScroll as scroll} from "react-scroll";
import '../scss/main.scss'
// import PropTypes from 'prop-types'

export default class Main extends Component {
  
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Home />
          <Works />
          <Contact />
        </div>
      </>
    );
  }
}
