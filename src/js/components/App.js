import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header';
import StreamList from './stream/StreamList';
import StreamCreate from './stream/StreamCreate';
import StreamShow from './stream/StreamShow';
import StreamEdit from './stream/StreamEdit';
import StreamDelete from './stream/StreamDelete';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" component={StreamCreate} />
          <Route path="/stream/show" component={StreamShow} />
          <Route path="/stream/edit" component={StreamEdit} />
          <Route path="/stream/delete" component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
