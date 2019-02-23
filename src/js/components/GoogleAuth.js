import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateAuthStatus } from '../reducers/authStatus/action-creators';

const mapStateToProps = (state) => ({
  isSignedIn: state.authStatus.isSignedIn,
  currentUser: state.authStatus.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  updateAuthStatus: (isSignedIn, currentUser) => dispatch(updateAuthStatus(isSignedIn, currentUser))
});

class GoogleAuth extends Component {
  componentDidMount() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: '219659721651-vd0u3l40av2d1igpj4oarspglslii6lq.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = gapi.auth2.getAuthInstance();
        this.updateAuthStatus();
        this.auth.isSignedIn.listen(this.updateAuthStatus);
      });
    });
  }

  updateAuthStatus = () => {
    this.props.updateAuthStatus(this.auth.isSignedIn.get(), this.auth.currentUser.get());
  }

  toggleAuth = () => {
    this.props.isSignedIn ? this.auth.signOut() : this.auth.signIn();
  }

  renderLoginBtn = () => {
    const { isSignedIn, currentUser } = this.props;
    return isSignedIn ? `Logout (${currentUser.getBasicProfile().getName()})` : 'Login';
  }

  render() {
    return (
      <button onClick={this.toggleAuth}>{this.renderLoginBtn()}</button>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
