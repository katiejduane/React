import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class BootstrapNavBar extends Component{
	constructor(){
		super();
		this.state = {
			activeLink: ""
		}
	}

	setActiveLink(linkRoute) {
		this.setState({
			activeLink: linkRoute
		})
	}
  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="http://www.google.com">ALL About ATL!</a>
		    </div>
		    <ul className="nav navbar-nav">
						<li><Link onClick={() => {this.setActiveLink('/') }} to="/">
							<span className={this.state.activeLink=='/' ? 'active' : ''}>Home</span></Link></li>
						<li><Link onClick={() => {this.setActiveLink('/about') }} to="/about">
							<span className={this.state.activeLink == '/about' ? 'active' : ''}>About</span></Link></li>
						<li><Link onClick={() => {this.setActiveLink('/images') }} to="/images">Photos</Link></li>
						<li><Link onClick={() => {this.setActiveLink('/weather') }} to="/weather">Weather</Link></li>
		    </ul>
		  </div>
		</nav>    
	)
  }
}

export default BootstrapNavBar