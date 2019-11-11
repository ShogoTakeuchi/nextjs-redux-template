import { AuthActions, AuthActionTypes } from "../actions/Auth";

export interface AuthState {
  user: firebase.User | null;
}
const initialState: AuthState = {
  user: null
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return Object.assign({}, state, {
        user: action.payload.user
      });
    case AuthActionTypes.LOGOUT:
      return Object.assign({}, state, {
        user: null
      });
    default:
      return state;
  }
};

export default authReducer;
