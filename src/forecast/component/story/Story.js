import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './Story.css';
import {
  Panel, Input, Label, Grid, TabContainer, TabLayout,
  TabContainerTabsPlacement, Tab, DatePicker, TextArea, Select, Option
} from "@ui5/webcomponents-react";
import { Descriptions } from "antd";
import { isMobile, isMobileOnly } from "react-device-detect";
import SprintList from "../sprintList/SprintList";
import ResourceList from "../resourceList/ResourceList";
import StoryList from "../storyList/StoryList";

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMode: false,
      editMode: true,
      project: {},
      projectName: ""
    }
  }
  render() {
    return (
      <div >
        {this.state.editMode &&
          <Panel headerText={"Information"}>
            <Grid>
              <div>
                <Label showColon={true} required={true}>Project Name</Label>
                <Input maxlength={20}></Input>
              </div>
              <div>
                <Label showColon={true} required={true}>Start Date</Label>
                <DatePicker />
              </div>
              <div>
                <Label showColon={true} required={true}>End Date</Label>
                <DatePicker />
              </div>
              <div>
                <Label showColon={true} required={true}>Project Type</Label>
                <Select>
                  <Option>Select</Option>
                  <Option>Internal</Option>
                  <Option>External</Option>
                </Select>
              </div>
            </Grid>
            <Grid defaultSpan={"XL6 L6 M6 S12"}>
              <div>
                <Label showColon={true} required={true}  >Description</Label>
                <TextArea />
              </div>
              {/*  <Grid defaultSpan={"XL6 L6 M6 S12"}>
                <div>
                  <Label showColon={true} required={true}  >Start Date</Label>
                  <DatePicker />
                </div>
                <div>
                  <Label showColon={true} required={true}  >Start Date</Label>
                  <DatePicker />
                </div>
              </Grid> */}
            </Grid>
          </Panel>
        }
        {this.state.displayMode &&
          <Panel headerText={"Information"}>
            <Descriptions column={isMobile ? isMobileOnly ? 1 : 2 : 4}>
              <Descriptions.Item label="Project Name">{this.state.project.name}</Descriptions.Item>
              <Descriptions.Item label="Start Date">{this.state.project.startDate}</Descriptions.Item>
              <Descriptions.Item label="End Date">{this.state.project.endDate}</Descriptions.Item>
              <Descriptions.Item label="Project Type">{this.state.project.projectType}</Descriptions.Item>
              <Descriptions.Item label="Description">{this.state.project.desc}</Descriptions.Item>
            </Descriptions>
          </Panel>
        }
        <Panel fixed={true} headerText={"Information"}>
          <TabContainer
            collapsed={false}
            fixed={false}
            showOverflow={false}
            tabLayout={TabLayout.Standard}
            tabsPlacement={TabContainerTabsPlacement.Top}
          // onTabSelect={onTabSelect}
          >

            <Tab text="RESOURCES"><ResourceList /></Tab>
            <Tab text="SPRINT"><SprintList /></Tab>
            <Tab text="STORY"><StoryList /></Tab>

          </TabContainer>
        </Panel>
        <div className="footer">

        </div>
      </div>
    );
  }
}

export default withRouter(Story);
