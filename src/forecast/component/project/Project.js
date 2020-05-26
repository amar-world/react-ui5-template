import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './Project.css';
import {
  Panel, Input, Label, Grid, TabContainer, TabLayout,
  TabContainerTabsPlacement, Tab, DatePicker, TextArea, Select, Option, Page, Bar, Button
} from "@ui5/webcomponents-react";
import { Descriptions } from "antd";
import { isMobile, isMobileOnly } from "react-device-detect";
import SprintList from "../sprintList/SprintList";
import ResourceList from "../resourceList/ResourceList";
import StoryList from "../storyList/StoryList";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMode: false,
      editMode: true,
      project: {
        projectName: "",
        startDate: "",
        endDate: "",
        projectType: "",
        status: "",
        priority: "",
        desc: ""
      },
      resources: [],
      sprints: [],
      stories: []
    }
  }
  render() {
    return (
      <Page showHeader={false} showFooter={true}
        customFooter={<Bar contentRight={<Button>Save</Button>} />}>
        {this.state.editMode &&
          <Panel headerText={"Information"}>
            <Grid>
              <div>
                <Label showColon={true} required={true}>Project Name</Label>
                <Input maxlength={20} value={this.state.project.projectName}></Input>
              </div>
              <div>
                <Label showColon={true} required={true}>Start Date</Label>
                <DatePicker value={this.state.project.startDate} />
              </div>
              <div>
                <Label showColon={true} required={true}>End Date</Label>
                <DatePicker value={this.state.project.endDate} />
              </div>
              <div>
                <Label showColon={true} required={true}>Project Type</Label>
                <Select selectedOption={this.state.project.projectType}>
                  <Option key={''}>Select</Option>
                  {this.props.CommonReducer.ProjectTypeList &&
                    this.props.CommonReducer.ProjectTypeList.map(eachStatus => {
                      return <Option key={eachStatus.key}>{eachStatus.value}</Option>
                    })}
                </Select>
              </div>
            </Grid>
            <Grid defaultSpan={"XL6 L6 M6 S12"}>
              <Grid defaultSpan={"XL6 L6 M6 S12"}>
                <div>
                  <Label showColon={true} required={true}  >Status</Label>
                  <Select selectedOption={this.state.project.status}>
                    <Option key={''}>Select</Option>
                    {this.props.CommonReducer.priorityList &&
                      this.props.CommonReducer.priorityList.map(eachStatus => {
                        return <Option key={eachStatus.key}>{eachStatus.value}</Option>
                      })}
                  </Select>
                </div>
                <div>
                  <Label showColon={true} required={true}>Priority</Label>
                  <Select selectedOption={this.state.project.priority}>
                    {/* <Option key={''}>Select</Option> */}
                    {this.props.CommonReducer.statusList &&
                      this.props.CommonReducer.statusList.map(eachStatus => {
                        return <Option key={eachStatus.key}>{eachStatus.value}</Option>
                      })}
                  </Select>
                </div>
              </Grid>
              <div>
                <Label showColon={true} required={true}  >Description</Label>
                <TextArea />
              </div>
            </Grid>
          </Panel>
        }
        {this.state.displayMode &&
          <Panel headerText={"Information"}>
            <Descriptions column={isMobile ? isMobileOnly ? 1 : 2 : 4}>
              <Descriptions.Item label="Project Name">{this.state.project.name}-{this.state.project.id}</Descriptions.Item>
              <Descriptions.Item label="Start Date">{this.state.project.startDate}</Descriptions.Item>
              <Descriptions.Item label="End Date">{this.state.project.endDate}</Descriptions.Item>
              <Descriptions.Item label="Project Type">{this.state.project.projectType}</Descriptions.Item>
              <Descriptions.Item label="Status">{this.state.project.status}</Descriptions.Item>
              <Descriptions.Item label="Priority">{this.state.project.priority}</Descriptions.Item>
              <Descriptions.Item label="Description">{this.state.project.desc}</Descriptions.Item>
            </Descriptions>
          </Panel>
        }
        {/* <Panel fixed={true} headerText={"Information"}> */}
          <TabContainer
            collapsed={false}
            fixed={false}
            showOverflow={false}
            tabLayout={TabLayout.Standard}
            tabsPlacement={TabContainerTabsPlacement.Top}
          // onTabSelect={onTabSelect}
          >
            <Tab text="RESOURCES"><ResourceList resourceData={this.state.resources} /></Tab>
            <Tab text="SPRINT"><SprintList sprintData={this.state.sprints} /></Tab>
            <Tab text="STORY"><StoryList storyData={this.state.stories} /></Tab>
          </TabContainer>
        {/* </Panel> */}
      </Page>
    );
  }
}

export default withRouter(Project);
