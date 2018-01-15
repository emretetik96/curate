import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Users from './Users/Users';

class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/users' component={Users} />
			</Switch>
		);
	}
}

export default Main;