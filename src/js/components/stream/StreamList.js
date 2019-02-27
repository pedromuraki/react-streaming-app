import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv from 'uuid';

import { getStreams } from '../../reducers/streams/action-creators';

const mapStateToProps = state => ({
  streams: state.streams,
  currentUserId: state.authStatus.currentUserId
});

class StreamList extends Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderStreamList = () => {
    const streams = Object.values(this.props.streams);

    return streams.length !== 0
      ? streams.map(stream => (
        <li key={uuidv()}>
          <h2>{stream.title}</h2>
          <p>{stream.description}</p>
          <div>
            <Link to={`stream/view/${stream.id}`} className="button">Watch</Link>
          </div>
          {stream.userId === this.props.currentUserId ? (
            <div>
              <Link to={`stream/edit/${stream.id}`} className="button">Edit</Link>
              <Link to={`stream/delete/${stream.id}`} className="button">Delete</Link>
            </div>
          ) : null}
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
