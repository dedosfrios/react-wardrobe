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
					<div>{this.props.name}</div>
					<div>{this.props.profession}</div>
					<div>{this.props.age}</div>
				</div>
			)
	}
}

class User extends React.Component{
	render(){
		return (
			<div>
				<BasicInfo name="Jamie Lannister" profession="KingSlayer" age="25"/>				
			</div>
		);
	}
}




export default User