import React, { Component } from 'react';

const clientId = '219659721651-vd0u3l40av2d1igpj4oarspglslii6lq.apps.googleusercontent.com';

class GoogleAuth extends Component {
  constructor() {
    super()

    this.state = {
      isSignedIn: false,
      currentUser: false
    }
  }

  componentDidMount() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId,
        scope: 'email'
      }).then(() => {
        this.auth = gapi.auth2.getAuthInstance();
        this.updatedSignInStatus();
        this.auth.isSignedIn.listen(this.updatedSignInStatus);
      });
    });
  }

  updatedSignInStatus = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
      currentUser: this.auth.currentUser.get()
    });
  }

  toggleAuth = () => {
    this.state.isSignedIn ? this.auth.signOut() : this.auth.signIn();
  }

  renderLoginBtn = () => {
    const { isSignedIn, currentUser } = this.state;
    return isSignedIn ? `Logout (${currentUser.getBasicProfile().getName()})` : 'Login';
  }

  render() {
    return (
      <button onClick={this.toggleAuth}>{this.renderLoginBtn()}</button>
    )
  }
}

export default GoogleAuth;
