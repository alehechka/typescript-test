import React, { Component } from "react";
import { connect, RootStateOrAny } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import CredentialsModel from '../../models/Credentials';

interface Props {
  authError: string,
  auth: any,
  signIn: (creds: CredentialsModel) => any
}

export class SignIn extends Component<Props> {
  state: CredentialsModel = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.signIn(this.state);
    console.log(this.state)
  };

  render() {
    if (this.props.auth.uid) {
      return <Redirect to="/" />
    }
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {this.props.authError && <p>{this.props.authError}</p>}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch: (action: any) => any) => {
  return {
    signIn: (creds: CredentialsModel) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
