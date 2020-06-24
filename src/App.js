import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Menu from "./components/Menu";
import Home from "./components/Home";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/projects"
            render={(props) => <Projects {...props} />}
          />
          <Route exact path="/about" render={(props) => <About {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
