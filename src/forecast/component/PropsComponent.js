import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../action";

export default function PorpsComponent(ComposedComponent) {

  class PorpsComponent extends Component {

    constructor(props) {

      super(props);
      this.state = {
        someData: 'sdfgfds'
      }
    }
    componentDidMount(){
      this.props.actions.getCommonDropdown();
    }

    render() {

      return (<ComposedComponent {...this.props} />);
    }
  }

  const mapStateToProps = (state) => {
    return {
      HeaderReducer: state.HeaderReducer,
      CommonReducer: state.CommonReducer
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(ActionCreators, dispatch)
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(PorpsComponent);
}