import React, { Component } from "react";

interface Props {
  doLogin: (email: string, password: string) => void;
}

interface State {
  email: string;
  password: string;
}

class Auth extends Component<Props, State> {
  state = {
    email: "",
    password: ""
  };

  constructor(props: Props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(e: any) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e: any) {
    this.setState({ password: e.target.value });
  }

  async onSubmit(e: any) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      this.props.doLogin(email, password);
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.onSubmit}>
            <div>
              <input
                ref="email"
                placeholder="email"
                type="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div>
              <input
                ref="password"
                placeholder="password"
                type="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
            <div>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
        <style jsx>{`
          div {
            background: white;
            margin: 10px;
          }
        `}</style>
      </>
    );
  }
}

export default Auth;
