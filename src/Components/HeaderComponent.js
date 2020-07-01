import React, { Component } from "react";
// import { Link } from "react-scroll";
import "../scss/header.scss";

const ProgressBar = ({ width }) => {
  const progressbarStyle = {
    backgroundColor: "rgb(219, 129, 129)",
    width: `${width}%`,
    height: "7px",
    borderRadius: "30px",
  };
  return <div style={progressbarStyle}></div>;
};
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pbw: 0,
      activeTag: 0,
    };
  }

  windowListner = () => {
    setInterval(() => {
      this.handleScrolled();
    }, 3);
  };

  handleScrolled = () =>
    requestAnimationFrame(() => {
      var container = document.querySelector(".container");
      var winScroll = container.scrollTop;
      var height = container.scrollHeight - container.clientHeight;
      var scrolled = (winScroll / height) * 100;
      // console.log('handle scrolled called scrolled is '+ scrolled);
      // console.log('handle scrolled called height is ' + height);
      // console.log('handle scrolled called winscroll is ' + winScroll);
      var temp;
      if (scrolled < 26) temp = 0;
      else if (scrolled >= 26 && scrolled <= 76) temp = 1;
      else temp = 2;
      this.setState({
        pbw: scrolled,
        activeTag: temp,
      });
    });
  componentDidMount() {
    this.windowListner();
  }
  render() {
    // console.log('render called scrolled is ' + this.state.pbw);
    // console.log(this.state.activeTag);

    return (
      <div className="header">
        <div className="progress-bar-container">
          <ProgressBar width={this.state.pbw} />
        </div>
        <nav className="navbar">
          <ul className="nav-menu">
            <li
              className={`nav-item ${
                this.state.activeTag === 0 ? "active" : ""
              }`}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`nav-item ${
                this.state.activeTag === 1 ? "active" : ""
              }`}
            >
              {" "}
              <a href="#works"> Works </a>
            </li>
            <li
              className={`nav-item ${
                this.state.activeTag === 2 ? "active" : ""
              }`}
            >
              {" "}
              <a href="#contact"> Contact </a>
            </li>
          </ul>
          <div className="social-menu">
            <a href="https://www.facebook.com/profile.php?id=100010825184962">
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a href="https://twitter.com/MatiAjay">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
            <a href="https://github.com/Ajaya1000/">
              <i className="fa fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/ajaya-mati-252a85184/">
              <i className="fa fa-linkedin fa-lg"></i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
