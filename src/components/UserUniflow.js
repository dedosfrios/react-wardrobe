import React, { Component } from 'react';



class Parent extends Component{
	constructor(props){
		super(props);	

		this.state = {state_one:"Acabo de cambiar el estado de state_two",
									state_two:"two"};
		this.mostrarState_one = this.mostrarState_one.bind(this);
		this.mastrarState_two = this.mastrarState_two.bind(this);							
	}
	mostrarState_one(){
		this.setState({state_two:"guess who in this B"})
	}
	mastrarState_two(){
		this.setState({state_two:"I change it again Biatch!"})
	}
	render(){
		return ( <div>
				<Child_one dato={this.props.info.name}/>
				<button onClick={this.mostrarState_one}>Click me to change whats underneath</button>
				<h3>{this.state.state_two}</h3>
				<button onClick={this.mostrarState_two}>change it again</button>				
			</div>)
	}
}

const Child_one = (props) => <h3>{props.dato}</h3>
		


export default Parent