import { connect } from "react-redux";
import { login, AuthActions } from "../actions/Auth";
import Auth from "../components/Auth";
import firebase from "../configs/firebase";

const mapStateToProps = (_: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: (args: AuthActions) => void) => {
  return {
    doLogin: (email: string, password: string) => {
      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          return;
        }
        dispatch(login(user));
      });
      firebase.auth().signInWithEmailAndPassword(email, password);
    }
  };
};

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default AuthContainer;
