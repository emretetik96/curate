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
							</ListGroupItem>
						))
					}
				</ListGroup>
			</div>
			);
	}
}

export default AllUsers;