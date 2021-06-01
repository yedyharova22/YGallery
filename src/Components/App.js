import React from 'react';
import './Style/App.css';

import Nav from './Nav';
import Home from './Home';
import Search from './Search';
import About from './About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const NotFound = () => {
	return (<div>NOT FOUND</div>);
}

const App = () => {
	return (
		<div className="Page">
			<Router>
				<div className="App">
					<Nav />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/search" exact component={Search} />
						<Route path="/about" exact component={About} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
			{/* <footer>
				FOOTER
			</footer> */}
		</div>
	);
}

export default App;
