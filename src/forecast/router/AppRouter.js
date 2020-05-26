import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PorpsComponent from '../component/PropsComponent';
import Dashboard from "../component/dashboard/Dashboard";
import Project from "../component/project/Project";
import Sprint from "../component/sprint/Sprint";
import Story from "../component/story/Story";

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PorpsComponent(Dashboard)}></Route>
        <Route exact path="/project" component={PorpsComponent(Project)}></Route>
        <Route exact path="/createProject" component={PorpsComponent(Project)}></Route>
        <Route exact path="/sprint" component={PorpsComponent(Sprint)}></Route>
        <Route exact path="/createSprint" component={PorpsComponent(Sprint)}></Route>
        <Route exact path="/story" component={PorpsComponent(Story)}></Route>
        <Route exact path="/createStory" component={PorpsComponent(Story)}></Route>
      </Switch>
    );
  }
}

export default AppRouter
