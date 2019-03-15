import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';

import StreamForm from './StreamForm';

import { getStream } from '../../reducers/streams/action-creators';

import axios from 'axios';
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
    axios
      .patch(`http://localhost:3001/streams/${this.props.match.params.id}`, values)
      .then(() => history.push('/'));
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

export default connect(mapStateToProps, { getStream })(StreamUpdate);
