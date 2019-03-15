import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';

import axios from 'axios';

import StreamForm from './StreamForm';

const mapStateToProps = state => {
  return {
    currentUserId: state.authStatus.currentUserId
  }
};

class StreamCreate extends Component {
  handleFormSubmit = (values) => {
    axios
      .post('http://localhost:3001/streams', { ...values, userId: this.props.currentUserId })
      .then(() => history.push('/'));
  }

  render() {
    return (
      <div>
        <h1>Create stream.</h1>
        <StreamForm handleFormSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(StreamCreate);
