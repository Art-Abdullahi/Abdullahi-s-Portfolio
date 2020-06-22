import React from "react";

import "./App.css";
import Header from "./components/Header";
import Background from "./components/Particles";
import Example from "./components/Navigator";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Example />
      <Header />
      <Background />
      <Projects />
    </>
  );
}

export default App;
