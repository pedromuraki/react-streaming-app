import React, { Component } from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';

import { getStream, editStream } from '../../reducers/streams/action-creators';

const mapStateToProps = state => {
  return {
    currentUserId: state.authStatus.currentUserId,
    stream: state.streams
  }
};

class StreamUpdate extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  handleFormSubmit = (values) => {
    this.props.editStream(this.props.match.params.id, values, this.props.currentUserId)
  }

  render() {
    return (
      <div>
        <h1>Edit stream.</h1>
        <StreamForm initialValues={this.props.stream} handleFormSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}

export default connect(mapStateToProps, { getStream, editStream })(StreamUpdate);
