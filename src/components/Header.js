import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="App-header container text-center">
          <h1>Hi i am Abdullahi and i develop websites</h1>
          <div className="container">
            <button className="button1">Projects</button>
            <button className="button1">Contact Me</button>
          </div>
        </header>
      </>
    );
  }
}
