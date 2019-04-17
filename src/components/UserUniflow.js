import React, { Component } from 'react';

// const employes = [
// 					{ id:1,
// 					  name:'One aleatorio',
// 					  profession:'job1',
// 					  age:21
// 					},
// 					{id:2,
// 					 name:'Two aleatorio',
// 					 profession:'job2',
// 					 age:22
// 					},
// 					{id:3,
// 					 name:'Three aleatorio',
// 					 profession:'job3',
// 					 age:23
// 					},
// 					{id:4,
// 					 name:'Four aleatorio',
// 					 profession:'job4',
// 					 age:24
// 					},
// 					{id:5,
// 					 name:'Five aleatorio',
// 					 profession:'job5',
// 					 age:25
// 					},
// 					{id:6,
// 					 name:'Six aleatorio',
// 					 profession:'job6',
// 					 age:26
// 					},
// 				];



class BasicInfo extends React.Component{
	render(){
		return (<div>
							<div>Hello {this.props.name}</div>
							<div>You are: {this.props.profession}</div>
							<div>and You are: {this.props.age}</div>		
							<ActiveEmploye />					
						</div>
			);
	}
}

class ActiveEmploye extends React.Component{
	render(){
		return (
			<div>
				<div>Is currently working: {this.props.active}</div>
			</div>
			);
	}
}

class User extends React.Component{
	render(){
		return (
			<div className="user">
				<BasicInfo name="Jamie Lannister" profession="The King Slayer" age="25" active="NO"/>			
			</div>
		);
	}
}




export default User