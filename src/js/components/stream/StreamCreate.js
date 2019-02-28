import React, { Component } from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';

import { createStream } from '../../reducers/streams/action-creators';

const mapStateToProps = state => {
  return {
    currentUserId: state.authStatus.currentUserId
  }
};

class StreamCreate extends Component {
  handleFormSubmit = (values) => {
    this.props.createStream(values, this.props.currentUserId)
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

export default connect(mapStateToProps, { createStream })(StreamCreate);
