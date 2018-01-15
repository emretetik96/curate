import React, { Component } from 'react';
import UserAPI from '../api'
import { Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./AllUsers.css"

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
								<div className="img-container">
									<Image src={require(`${u.prof_pic}`)} alt="User prof pic" className="image" />
									<Link to={`/users/${u.username}`}>
										<div className="overlay">
											<div className="overlay-text">
												{u.name}
											</div>
										</div>
									</Link>
								</div>
							</ListGroupItem>
						))
					}
				</ListGroup>
			</div>
			);
	}
}

export default AllUsers;