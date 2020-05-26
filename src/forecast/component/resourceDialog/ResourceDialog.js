import React, { Component } from "./node_modules/react";
import './ResourceDialog.css';
import { Modal, Descriptions } from "antd";
import { isMobile, isMobileOnly } from "react-device-detect";
import { List, CustomListItem } from "@ui5/webcomponents-react";

class ResourceDialog extends Component {
  render() {
    return (
      <div >
        <Modal
          title="Avilable Resources"
          centered
          visible={this.props.isAddDialogOpen}
          onOk={() => this.props.isAddDialogOpen = false}
          onCancel={() => this.props.isAddDialogOpen = false}
        >
          <List>
            <CustomListItem>
              <Descriptions column={isMobile ? isMobileOnly ? 1 : 2 : 4}>
                <Descriptions.Item label="Name">{this.props.name}-{this.state.id}</Descriptions.Item>
                <Descriptions.Item label="Skills">{this.state.skills}</Descriptions.Item>
                <Descriptions.Item label="Sec Skills">{this.state.secSkills}</Descriptions.Item>
                <Descriptions.Item label="Available from">{this.state.availableFrom}</Descriptions.Item>
                <Descriptions.Item label="PM">{this.state.pm}</Descriptions.Item>
                <Descriptions.Item label="Designation">{this.state.designation}</Descriptions.Item>
              </Descriptions>

            </CustomListItem>

          </List>
        </Modal>
      </div>
    );
  }
}

export default ResourceDialog;
