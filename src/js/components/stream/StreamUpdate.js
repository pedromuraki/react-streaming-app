import React, { Component } from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';

import { getStream, editStream } from '../../reducers/streams/action-creators';

import _ from 'lodash';

const mapStateToProps = state => {
  return {
    stream: state.streams
  }
};

class StreamUpdate extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  handleFormSubmit = (values) => {
    this.props.editStream(this.props.match.params.id, values)
  }

  render() {
    return (
      <div>
        <h1>Edit stream.</h1>
        <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} handleFormSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}

export default connect(mapStateToProps, { getStream, editStream })(StreamUpdate);
