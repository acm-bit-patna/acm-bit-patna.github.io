import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import ContestPage from "./ContestPage";
import LandingPage from "./LandingPage";
import TeamPage from "./TeamPage";
import AboutPage from "./AboutPage"


function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/contests">
                    <ContestPage />
                </Route>
                <Route path="/team">
                    <TeamPage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
