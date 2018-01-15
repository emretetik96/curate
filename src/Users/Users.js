import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import AllUsers from './AllUsers';
import User from './User';


const Users = () => (
	<Switch>
		<Route exact path='/users' component={AllUsers} />
		<Route path='/users/:username' component={User} />
	</Switch>
);

export default Users;