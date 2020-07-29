import React from 'react';
import './main.css';
import GithubApp from './components/GithubApp';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Route path="/"
          exact component={Home}/>
          <Route path="/GithubApp"
          component={Home}/>
          <Route path="/about"
          component={About}/>
          <Route path="/app"
          component={GithubApp}/>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
