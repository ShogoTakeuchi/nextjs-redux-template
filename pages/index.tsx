import React, { Component } from "react";
import { connect } from "react-redux";
import { Store } from "redux";
import AppContainer from "../src/containers/AppContainer";

class Index extends Component {
  // Sample
  static getInitialProps({ store }: { store: Store }) {
    store.dispatch({ type: "FOO", payload: "Boo!!" });
    return { custom: "Custom Props!!", ...store.getState() };
  }

  render() {
    return (
      <>
        <p>Firebase Firestore Management by Next.js</p>
        <div>
          <AppContainer />
        </div>
      </>
    );
  }
}

export default connect()(Index);
