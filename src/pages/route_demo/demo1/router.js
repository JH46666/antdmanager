import React from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Info from "./info";
import Home from "./Home";
import Main from "./Main";
import About from "./about";
import Topic from "./topic";

import NoMatch from "./NoMatch";

export default class IRoute extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route
              path="/main"
              render={() => (
                <Main>
                  <Route path="/main/:value" component={Info}></Route>
                </Main>
              )}
            ></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topic}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Home>
      </Router>
    );
  }
}
