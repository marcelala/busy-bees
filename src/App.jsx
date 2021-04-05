// npm files
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";
import { RecoilRoot } from "recoil";

//project files
import "./styles/App.css";

//components
import Tracker from "./components/Tracker";
import Card from "./components/Card";
import Header from "./components/Header";

// import Map from './components/Map';
// import ProgressBar from './components/Progressbar';

import Home from "./screens/Home";
import TrackedParcels from "./components/TrackedParcels";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Container>
            <Header />
            <Tracker />
            <TrackedParcels />
          </Container>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/card/:id" exact component={Card} /> */}
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}
