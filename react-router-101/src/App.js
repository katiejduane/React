import React, { Component } from 'react';
import './App.css';
// add the React Router module!
// the main thing we need is BroswerRouter
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import MovieList from './MovieList';
import Movie from './Movie'

class App extends Component {
  render() {
    // the router goes around EVERYTHING it needs to control
    return (
      <Router>
        <div className="App">
        <ul>
          {/* In React Router, we DO NOT use anchor tags! 
          THE LINK component is the new <a>*/}
          {/* <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li> */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/movies">Movies</Link>
        </ul>
        {/* use route component to set up a path match
        if the path matches the broswer path, it will render
        whatever is given as component prop. 
        ROUTE is self-closing.
        If you have path by itself, it will look for that path
        To restrict to exact, use exact */}
        {/* EITHER: your pass the component and render it, or you pass 
        it an anonymous function with the component and props rendered
        as you would without react router. */}
        {/* EXAMPLE OF ANON FUNCTION w PROPS: */}
          {/* <Route exact path="/" render={(props)=>{
            <Home props={props} />
          }} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movies" component={MovieList} />
          <Route path="/movies/:movieId" component={Movie} />
        </div>
      </Router>
    );
  }
}

export default App;
