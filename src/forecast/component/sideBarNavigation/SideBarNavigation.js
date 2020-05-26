import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Tree } from "antd";
import { ActionCreators } from "../../action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class SideBarNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: [],
      selectedKey: true,
    };
  }
  componentDidMount() {
    this.props.actions.getSideNavigationData();
  }
  onTreeItemSelect = (key, oEvent) => {
    if (oEvent.selectedNodes) {
      var selectedNodes = oEvent.selectedNodes[0];
      var groupId = selectedNodes.groupId;
      switch (groupId) {
        case "PROJECT":
          this.props.history.push("/project");
          break;
        case "SPRINT":
          this.props.history.push("/sprint");
          break;
        case "STORY":
          this.props.history.push("/story");
          break;
        case "BUG":
          this.props.history.push("/bug");
          break;

        default:
          break;
      }
    }
  }
  render() {
    return (
      <Tree style={{ height: '92vh', overflow: 'auto' }} treeData={this.props.HeaderReducer.navigation} onSelect={this.onTreeItemSelect} />
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
  connect(mapStateToProps, mapDispatchToProps)(SideBarNavigation)
);
