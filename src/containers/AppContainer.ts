import { connect } from "react-redux";
import { login, AuthActions } from "../actions/Auth";
import App from "../components/App";
import firebase from "../configs/firebase";

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.auth.user
  };
};

const mapDispatchToProps = (dispatch: (args: AuthActions) => void) => {
  return {
    refLogin: () => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          dispatch(login(user));
        }
      });
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
