import React, { Component } from 'react';
import UserAPI from './api'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './thumbnail-gallery.css';
import './bootstrap.css';


class AllUsers extends Component {
	render() {
		return (
			<div>
				<h1>
					This is all users.
				</h1>
					{
						UserAPI.users.map( (u) => (
							<div class="col-lg-3 col-md-4 col-xs-6">
								<Link to={`/users/${u.username}`} class="d-block mb-4 h-100">
            			<img class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt=""/>
          			</Link>
        			</div>
        		))
					}
			</div>
		);
	}
}

export default AllUsers;