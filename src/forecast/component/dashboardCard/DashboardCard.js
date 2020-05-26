import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./DashboardCard.css";
import {
  Link,
} from "@ui5/webcomponents-react";

class DashboardCard extends Component {
  render() {
    return (
      <div>
        <div className="card-header">
          <div className="card-header-status">
            Status:
            <div className="card-header-statusType">In Progress</div>
          </div>
          <Link className="card-header-title">Story1-000001</Link>
          <div className="card-header-desc">
            Story fo the dshfa dadsfasdf asdfasdf asdf asdf asdf asfd asdf asdfasdf asd fasdf asdf asdf asdf asdf asdf asd thsadfalksjfalsdasdkfjashfa asdlkjhf asdfkjhsadlfkjsa asdfkjasdhflasdhfalskjfd asdfadsfgf
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DashboardCard);
