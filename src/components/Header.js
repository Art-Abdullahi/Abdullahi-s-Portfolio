import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="App-header container text-center">
          <h1>Hi i am Abdullahi and i develop web Apps</h1>
          <div className="container">
            <button className="button1 mr-2">
              <a href="#projects">Projects</a>
            </button>
            <button className="button1 ml-2">Contact Me</button>
          </div>
        </header>
      </>
    );
  }
}
