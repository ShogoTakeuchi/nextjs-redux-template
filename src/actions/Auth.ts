import { Action } from "redux";

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

interface LoginAction extends Action {
  type: AuthActionTypes.LOGIN;
  payload: { user: firebase.User };
}
export const login = (user: firebase.User): LoginAction => ({
  type: AuthActionTypes.LOGIN,
  payload: {
    user: user
  }
});

interface LogoutAction extends Action {
  type: AuthActionTypes.LOGOUT;
  payload: {};
}
export const logout = (): LogoutAction => ({
  type: AuthActionTypes.LOGOUT,
  payload: {}
});

export type AuthActions = LoginAction | LogoutAction;
