import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {

  return(
    <header>
      <h2>The Power of Babel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/app">
              <p>Babel</p>
            </Link>
          </li>
          <li>
            <Link to='/about'>
            <p>About</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default Header;
