import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateAuthStatus } from '../reducers/authStatus/action-creators';

const mapStateToProps = (state) => ({
  isSignedIn: state.authStatus.isSignedIn,
  currentUser: state.authStatus.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  updateAuthStatus: (isSignedIn, currentUser, currentUserId) => dispatch(updateAuthStatus(isSignedIn, currentUser, currentUserId))
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
    const isSignedIn = this.auth.isSignedIn.get();
    const currentUser = isSignedIn ? this.auth.currentUser.get() : false;
    const currentUserId = isSignedIn ? this.auth.currentUser.get().getId() : false;
    this.props.updateAuthStatus(isSignedIn, currentUser, currentUserId);
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
      <div>
        <button onClick={this.toggleAuth}>{this.renderLoginBtn()}</button>
        {this.props.isSignedIn ? (<Link to="/stream/new" className="button">New Stream</Link>) : null}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
