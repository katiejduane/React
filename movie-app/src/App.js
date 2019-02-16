import React, { Component } from 'react';
import './App.css';
import Poster from './poster';
import Navbar from './navbar';

class App extends Component {
  // in order to use 'this', we have to have a constructor
  constructor(){
    super();
    this.state = {
      movieList: []
    }
    this.movieSearch = this.movieSearch.bind(this);
  }

  componentDidMount() {
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        const results = myJson.results;
        console.log(results)
        this.setState({
          movieList: results
        })
      })
  }

  movieSearch(e){
    e.preventDefault();
    const movieTitle = document.getElementById('searchTerm').value 
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=' + movieTitle;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        const results = myJson.results;
        console.log(results)
        this.setState({
          movieList: results
        });
      });	
  }

  render() {
    const posters = this.state.movieList.map((movie,i)=>{
      return(<Poster key={i} movie={movie}/>)
    })
    return (
      <div className="container">
        <Navbar />
        <div className="row">
          <h1>The movie app... again</h1>

          <form onSubmit={this.movieSearch}>
            <input id="searchTerm" type="text" placeholder="Movie title" />
            <button type="submit" className="btn">Search</button>
          </form>

          {posters}
        </div>

      </div>
    );
  }
}

export default App;
