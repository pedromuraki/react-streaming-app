import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import Header from './header';
import StreamList from './stream/StreamList';
import StreamCreate from './stream/StreamCreate';
import StreamRead from './stream/StreamRead';
import StreamUpdate from './stream/StreamUpdate';
import StreamDelete from './stream/StreamDelete';

const mapStateToProps = state => ({
  modalStatus: state.modalStatus
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new" component={StreamCreate} />
            <Route path="/stream/view/:id" component={StreamRead} />
            <Route path="/stream/edit/:id" component={StreamUpdate} />
            {
              this.props.modalStatus.show
                ? (<StreamDelete targetStream={this.props.modalStatus.targetStream} />)
                : null
            }
          </div>
        </Router>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
