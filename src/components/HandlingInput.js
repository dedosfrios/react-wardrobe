import React, { Component } from 'react';

class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {username:''};		
	}
	handleChange = (event) => { 
		this.setState({ username: event.target.value})
		console.log(event)
	}	

	render(){
		return (<div>
							<form>
								<label>Enter your username</label>
								<input 	type='text' 
												name='username' 
												value={this.state.username} 
												onChange={this.handleChange}
								/>
							</form>
							<h3>This is your username: {this.state.username}</h3>
						</div>)
	}	
}

export default LoginForm