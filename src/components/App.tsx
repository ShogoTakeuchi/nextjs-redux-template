import React, { Component } from "react";
import firebase from "../configs/firebase";
import Main from "./Main";
import AuthContainer from "../containers/AuthContainer";

interface Props {
  currentUser: firebase.User | null;
  refLogin: () => void;
}

class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.refLogin();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>{currentUser ? <Main user={currentUser} /> : <AuthContainer />}</div>
    );
  }
}

export default App;
