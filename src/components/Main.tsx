import React, { Component } from "react";
import PropTypes from "prop-types";

interface Props {
  user: any;
}

class Main extends Component<Props> {
  static propTypes = {
    // user: PropTypes.func.isRequired
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    return <div>Welcome! Firebase UserId: {this.props.user.uid}</div>;
  }
}

export default Main;
