import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => (
  <div>
    <h1>
      <Link to="/">Streaming App</Link>
    </h1>

    <div>
      <Link to="/">Live Streams</Link>
      <GoogleAuth />
    </div>
  </div>
)

export default Header;
