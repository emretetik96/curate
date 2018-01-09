import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

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