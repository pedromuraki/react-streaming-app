import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import Header from './header';
import StreamList from './stream/StreamList';
import StreamCreate from './stream/StreamCreate';
import StreamRead from './stream/StreamRead';
import StreamUpdate from './stream/StreamUpdate';
import StreamDelete from './stream/StreamDelete';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" component={StreamCreate} />
          <Route path="/stream/view/:id" component={StreamRead} />
          <Route path="/stream/edit/:id" component={StreamUpdate} />
          <Route path="/stream/delete/:id" component={StreamDelete} />
        </div>
      </Router>
    </div>
  )
}

export default App;
