import React from "react";
import { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component {
    state = {clicked: false};

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
  render() {
    return (
      <>
        <nav>
          <a href="#">
            <img src="http://img.logoipsum.com/247.svg" alt="" />
          </a>

          <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "navbar"}>
              <li>
                {" "}
                <a href="#" className="active">
                  Home
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">About</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Tech Stacks</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Github Stats</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Projects</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Contact</a>{" "}
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
