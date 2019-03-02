import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Projects extends Component {
    constructor(){
        super()
        this.state = {
            project: '',
            projectType: '',
            projectProg: ''
        }
        this.changeProject = this.changeProject.bind(this);
        this.changeProjectType = this.changeProjectType.bind(this);
        this.changeProjectProg = this.changeProjectProg.bind(this);
        this.addNewProject = this.addNewProject.bind(this);
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: `http://localhost:3000/getProjects`
        }).then((projectListFromBackEnd) => {
            console.log(projectListFromBackEnd)
            this.setState({
                projectList: projectListFromBackEnd.data
            })
        })
    }

    addNewProject(e) {
        e.preventDefault(e);
        console.log("an idea!")
        this.props.addNewProject(this.state.project, this.state.projectType, this.state.projectProg)
    }

    changeProject(event) {
        this.setState({
            project: event.target.value
        })
    }

    changeProjectType(event) {
        this.setState({
            projectType: event.target.value
        })
    }

    changeProjectProg(event) {
        this.setState({
            projectProg: event.target.value
        })
    }

    render() {
        const projectArray = this.props.projectList.map((project) => {
            return (
                <tr key={project.id}>
                    <td className="deep-orange lighten-3">{project.projectName}</td>
                    <td className="pink lighten-3">{project.projectType}</td>
                    <td className="teal lighten-3">{project.projectProg}</td>
                    <td><Link to={"/editproject/" + project.id}><button className="btn lime">Edit</button></Link></td>
                    <td><button className="btn orange darken-3">Completed</button></td>
                </tr>
            )
        })

        return(
            <div className="idea-app">
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center teal-text">Current Projects!</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Made with React and Express</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <form onSubmit={this.addNewProject} className="add-box">
                        <input onChange={this.changeProject} type="text" id="project" placeholder="Project name" value={this.state.project} />
                        <input onChange={this.changeProjectType} type="text" id="category" placeholder="Type (drawing, short story, etc)..." value={this.state.projectType} />
                        <input onChange={this.changeProjectProg} type="text" id="progress" placeholder="Progress (is it just an idea, or are you actually making this thing?)" value={this.state.projectProg} />
                        <button type="submit" className="btn btn-primary">Add Project</button>
                    </form>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Type</th>
                                <th>Progress</th>
                                <th>Edit</th>
                                <th>Completed!</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projectArray}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Projects;