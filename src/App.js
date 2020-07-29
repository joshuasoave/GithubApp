import React from 'react';
import './main.css';
import GithubApp from './components/GithubApp';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/"
        exact component={Home}/>
        <Route path="/about"
        component={About}/>
        <Route path="/app"
        component={GithubApp}/>
      </div>
    </Router>
  );
}

export default App;
