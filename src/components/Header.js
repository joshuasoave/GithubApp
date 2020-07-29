import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {

  return(
    <header>
      <h2>The Power of Babel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <HomeIcon fontSize="large"/>
            </Link>
          </li>
          <li>
            <Link to="/app">
              <SearchIcon fontSize="large"/>
            </Link>
          </li>
          <li>
            <Link to='/about'>
            <InfoIcon fontSize="large"/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default Header;
