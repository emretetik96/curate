import React, { Component } from 'react';
import UserAPI from './api'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class AllUsers extends Component {
	render() {
		return (
			<div>
				<h1>
					This is all users.
				</h1>
				<ListGroup>
					{
						UserAPI.users.map( (u) => (
							<ListGroupItem>
								<Link to={`/users/${u.username}`}>
									{u.username}
								</Link>
								<img src={require(`${u.prof_pic}`)} alt="User prof pic" />
							</ListGroupItem>
						))
					}
				</ListGroup>
			</div>
			);
	}
}

export default AllUsers;