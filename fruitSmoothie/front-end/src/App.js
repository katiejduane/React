import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar'
import Home from './Home';
import Inspire from './Inspire'
import Projects from './Projects'
import Completed from './Completed'

// import Edit from './Edit';


class App extends Component {
  constructor(){
    super();
    this.state = {
      ideaList: [],
      projectList: []
    
    }
    this.addNewIdea = this.addNewIdea.bind(this);
    this.addNewProject = this.addNewProject.bind(this);
  }

  componentDidMount(){
    axios({
      method: "GET",
      url: `http://localhost:3000/getIdeas`
    }).then((ideaListFromBackEnd)=>{
      console.log(ideaListFromBackEnd) 
      this.setState({
        ideaList: ideaListFromBackEnd.data
      })
    })
  }

  addNewIdea(idea, type, prog) {
    // console.log(idea, type, prog)
    axios({
      method: 'POST',
      url: 'http://localhost:3000/addIdea',
      data: {
        ideaName: idea,
        ideaType: type,
        ideaProg: prog
      }
    }).then((backEndResponse)=>{
      console.log(backEndResponse)
      this.setState({
        ideaList: backEndResponse.data
      })
    })
  }

  addNewProject(project, type, prog){
    axios({
      method: 'POST',
      url: 'http://localhost:3000/addProject',
      data: {
        projectName: project,
        projecType: type,
        projectProg: prog
      }
    }).then((backEndResponse)=>{
      console.log(backEndResponse)
      this.setState({
        projectList: backEndResponse.data
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" render={()=>{
            return (<Home ideaList={this.state.ideaList} addNewIdea={this.addNewIdea}/>)
          }}/>
          <Route exact path="/inspire" component={Inspire} />
          <Route exact path="/current" render={()=>{
            return (<Projects projectList={this.state.projectList} addNewProject={this.addNewProject} />)
          }}/>
          <Route exact path="/completed" component={Completed} />
        </div>
      </Router>
    );
  }
}

export default App;
