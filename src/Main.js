import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';

class Main extends Component {
	render() {
		return (
			<main>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
			</Switch>
			</main>
		);
	}
}

export default Main;