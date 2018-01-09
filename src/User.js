import React, { Component } from 'react';
import UserAPI from './api';

class User extends Component {
	render() {
		const user = UserAPI.get(this.props.match.params.username);
		return (
			<div>
				<h1>{user.name}</h1>
				<p>{user.description}</p>
			</div>
		);
	}
}

export default User;