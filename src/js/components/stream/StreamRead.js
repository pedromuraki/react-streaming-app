import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getStream } from '../../reducers/streams/action-creators';

const mapStateToProps = state => ({
  stream: state.streams
});

class StreamRead extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    const { stream } = this.props;

    return (
      <div>
        <h1>{stream.title}</h1>
        <p>{stream.description}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps, { getStream })(StreamRead);
