import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Grid, Panel, Label } from "@ui5/webcomponents-react";
import DashboardCard from "../dashboardCard/DashboardCard";
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div >
        <Panel className="dashobard-panel" headerText={"Project1 --- Sprint1"}
        header={
          [<Label>Hello Amar for first sprint</Label>,
            <Label>Hello Amar for first sprint</Label>,
          <Label>Hello Amar for first sprint</Label>]

        }>
          <Grid>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
            <DashboardCard></DashboardCard>
          </Grid>
        </Panel>
        <Panel headerText={"Project2"}>
          <Grid>
            <div>Hello Amar you are bit slow</div>
          </Grid>
        </Panel>
      </div>
    );
  }
}

export default withRouter(Dashboard);
