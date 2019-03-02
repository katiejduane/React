import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            idea: '',
            type: '',
            prog: ''
        }
        this.changeIdea = this.changeIdea.bind(this);
        this.changeType = this.changeType.bind(this);
        this.changeProg = this.changeProg.bind(this);
        this.addNewIdea = this.addNewIdea.bind(this);
    }

    addNewIdea(e){
        e.preventDefault(e);
        console.log("an idea!")
        this.props.addNewIdea(this.state.idea, this.state.type, this.state.prog)
    }

    changeIdea(event){
        this.setState({
            idea: event.target.value
        })
    }

    changeType(event) {
        this.setState({
            type: event.target.value
        })
    }

    changeProg(event) {
        this.setState({
            prog: event.target.value
        })
    }

    render(){
        const ideaArray = this.props.ideaList.map((idea)=>{
            return(
                <tr key={idea.id}>
                    <td className="deep-orange lighten-3">{idea.ideaName}</td>
                    <td className="pink lighten-3">{idea.ideaType}</td>
                    <td className="teal lighten-3">{idea.ideaProg}</td>
                    <td><button className="btn orange darken-3">Delete</button></td>
                    <td><Link to={"/editidea/" + idea.id}><button className="btn lime">Edit</button></Link></td>
                </tr>
            )
        })
        return(
            <div className="idea-app">
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center teal-text">Creativity Tracker for Overactive Minds</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Made with React and Express</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <form onSubmit= {this.addNewIdea} className="add-box">
                        <input onChange={this.changeIdea} type="text" id="idea" placeholder="Idea" value={this.state.idea} />
                        <input onChange={this.changeType} type="text" id="category" placeholder="Type (drawing, short story, etc)..." value={this.state.type} />
                        <input onChange={this.changeProg} type="text" id="progress" placeholder="Progress (is it just an idea, or are you actually making this thing?)" value={this.state.prog} />
                        <button type="submit" className="btn btn-primary">Add Idea</button>
                    </form>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Idea</th>
                                <th>Type</th>
                                <th>Progress</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ideaArray}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Home;


// { this.state.task.length > 0 && this.state.date.length > 0 ? <button type="submit" className="btn btn-primary waves-effect">Add Task</button> : <button type="submit" className="no-click btn btn-primary waves-effect">Add Task</button> } 
{/* this means the ability to submit will only happen if the two inputs are populated. */ }