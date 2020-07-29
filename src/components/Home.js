import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {

  return(
    <div className="home-page">
      <h2>Welcome to The Power of Babel!</h2>
      <Link to="/app">
        <img id="home-img" src="https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
      </Link>
      <h4>An application to find a Github user's favorite coding languages.</h4>
    </div>
  )

}

export default Home;
