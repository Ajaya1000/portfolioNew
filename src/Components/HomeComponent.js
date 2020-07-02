import React, { Component } from "react";
export default class Home extends Component {
  windowListener = () => {
    setInterval(() => {
      requestAnimationFrame(() => {
        var container = document.querySelector(".container");
        var winscroll = container.scrollTop;
        var moon = document.querySelector("#moon");
        var cloud1 = document.querySelector("#cloud1");
        var cloud2 = document.querySelector("#cloud2");
        var spiderman = document.querySelector("#spiderman");
        var xAv = container.clientHeight;
        moon.style.left = 20 + 1.2 * winscroll + "px";
        cloud1.style.left = 30 + 2 * winscroll + "px";
        cloud2.style.left = 900 + winscroll + "px";
        spiderman.style.width = 8 * winscroll + "px";
        spiderman.style.top = xAv - 4 * winscroll + "px";
      });
    }, 3);
  };
  componentDidMount() {
    this.windowListener();
  }
  render() {
    return (
      <section id="home">
        <img
          id="bg"
          alt="parallax-1"
          src="https://gta4-mods.com/images/24472/1382245266_12678655089417325265421650272719o.jpg"
        />
        <img id="moon" alt="parallax-2" src={require("../assest/moon.png")} />{" "}
        <img
          id="cloud1"
          alt="parallax-3"
          src={require("../assest/cloud.png")}
        />{" "}
        <img
          id="cloud2"
          alt="parallax-3"
          src={require("../assest/cloud.png")}
        />
        <img
          id="spiderman"
          alt="parallax-4"
          src={require("../assest/spiderman.png")}
        />
        <a href="#works" className="name-holder">
          view<span>&nbsp;&nbsp;&nbsp;work</span>
        </a>
        <a href='#contact' className="scroll-indicator">
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className='intro'>
          <h1> Hii, I'm Ajay. Nice to meet you</h1>
          <p>I love to code.App development both Android and IOS, Fullstack web developement,Competitive Coding are my skills.And yes, I'm a Deep learning(ANN) Enthusiast too. I just love to play around technology.</p>
        </div>
      </section>
    );
  }
}
