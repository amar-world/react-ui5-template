import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Bar,
  BarDesign,
  Button,
  Title,
  Avatar,
  AvatarSize,
} from "@ui5/webcomponents-react";
import "./HeaderBar.css";
import { ActionCreators } from "../../action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class HeaderBar extends Component {
  render() {
    return (
      <Bar
        design={BarDesign.Auto}
        contentLeft={[
          <Button icon={"menu2"} key="menu2" onClick={this.props.sideBarTiggered}></Button>,
          <Title key="golitForecast">Forecast</Title>,
        ]}
        contentMiddle={<Button icon={"home"}></Button>}
        contentRight={<Avatar icon={"employee"} size={AvatarSize.XS}></Avatar>}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    HeaderReducer: state.HeaderReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderBar)
);
