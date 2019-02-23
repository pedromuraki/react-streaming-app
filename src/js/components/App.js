import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header';
import StreamList from './stream/StreamList';
import StreamCreate from './stream/StreamCreate';
import StreamRead from './stream/StreamRead';
import StreamUpdate from './stream/StreamUpdate';
import StreamDelete from './stream/StreamDelete';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" component={StreamCreate} />
          <Route path="/stream/view" component={StreamRead} />
          <Route path="/stream/edit" component={StreamUpdate} />
          <Route path="/stream/delete" component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
