import React, { Component } from "react";
import { withRouter } from "react-router";
import "./RootComponent.css";
import HeaderBar from "./header/HeaderBar";
import { Layout } from "antd";
import { isMobile, isMobileOnly } from "react-device-detect";
import SideBarNavigation from "./sideBarNavigation/SideBarNavigation";
import { Page } from "@ui5/webcomponents-react";
const { Sider, Content } = Layout;

class RootComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }
  sideBarTriggered = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div >
         <div >
          <HeaderBar sideBarTiggered={this.sideBarTriggered} />
        </div>
        {/*<div>
          <div className={this.getContainerStyle}>
            {this.state.collapsed &&
              <SideBarNavigation />
            }
            {this.props.children}
          </div> */}
        <Layout >
          <Sider
            width={isMobile ? (isMobileOnly ? "100%" : "33%") : "20%"}
            collapsedWidth="0"
            className="site-layout-background"
            collapsed={this.state.collapsed}
          >
            <SideBarNavigation />
          </Sider>
          <Content>
            <Page showHeader={false}>
              {this.props.children}
            </Page>
          </Content>
        </Layout>

      </div>
    );
  }
}

export default withRouter(RootComponent);
