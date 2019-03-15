import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import Modal from '../Modal';

import { getStreams } from '../../reducers/streams/action-creators';
import { hideModal } from '../../reducers/modalStatus/action-creators';

class StreamDelete extends React.Component {
  deleteStream = (targetStream) => {
    axios
      .delete(`http://localhost:3001/streams/${targetStream}`)
      .then(this.props.getStreams)
      .then(this.props.hideModal);
  }

  render() {
    const actions = (
      <>
        <button onClick={() => this.deleteStream(this.props.targetStream)}>Delete</button>
        <button onClick={this.props.hideModal}>Cancel</button>
      </>
    );

    return (
      <Modal
        title="Delete Stream"
        content="Are you sure do you want to delete the stream?"
        actions={actions}
      />
    );
  }
}

export default connect(null, { getStreams, hideModal })(StreamDelete);
