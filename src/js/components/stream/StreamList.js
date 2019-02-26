import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getStreams } from '../../reducers/streams/action-creators';

const mapStateToProps = state => ({
  streams: state.streams
});

class StreamList extends Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderStreamList = () => {
    const streams = Object.values(this.props.streams);

    return streams.length !== 0
      ? streams.map(stream => (
        <li key={stream.id}>
          <h2>{stream.title}</h2>
          <p>{stream.description}</p>
        </li>
      ))
      : <li>No streams live at this moment.</li>;
  }

  render() {
    return (
      <div>
        <h1>Streaming now:</h1>
        <div>
          <ul>
            {this.renderStreamList()}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, { getStreams })(StreamList);
