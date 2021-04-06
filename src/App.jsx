// npm files
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";
import { RecoilRoot } from "recoil";

//project files
import "./styles/App.css";

//components
import Tracker from "./components/Tracker";
import Header from "./components/Header";


import Home from "./screens/Home";
import TrackedParcels from "./components/TrackedParcels";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Container>
            <Header />
            <div className="tracker"><Tracker /></div>
            <div className="grid-container"><TrackedParcels/></div>
            {/* <Grid className="grid-container"><CardList/></Grid> */}
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
