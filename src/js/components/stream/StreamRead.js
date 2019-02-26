import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getStream } from '../../reducers/streams/action-creators';

const mapStateToProps = state => ({
  streams: state.streams
});

class StreamRead extends Component {
  componentDidMount() {
    this.props.getStream(3);
  }

  render() {
    const { streams } = this.props;

    return (
      <div>
        <h1>{streams.title}</h1>
        <p>{streams.description}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps, { getStream })(StreamRead);
