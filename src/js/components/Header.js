import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>
      <Link to="/">Streaming App</Link>
    </h1>

    <div>
      <Link to="/">Live Streams</Link>
      <button>Login</button>
    </div>
  </div>
)

export default Header;
