import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar'
import { 
  BrowserRouter as Router, 
  Route, 
  // Link 
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Images from './Images';
import Weather from './Weather';


var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={BootstrapNavBar} />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/images' component={(props)=> 
            <Images atlImages={atlImages} />
          } />
          <Route path='/weather' component={Weather} />
          <div className="container main">
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
