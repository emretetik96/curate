import React, { Component } from 'react';
import UserAPI from '../api';
import { Image } from 'react-bootstrap';

class User extends Component {
	render() {
		const user = UserAPI.get(this.props.match.params.username);
		return (
			<div>
				{console.log(user.prof_pic)}
				<Image src={require(`${user.prof_pic}`)} alt="User prof pic" />
				<h1>{user.name}</h1>
				<p>{user.description}</p>
			</div>
		);
	}
}

export default User;