import React from 'react';
import './Style/App.css';
import { Link } from 'react-router-dom';

import icon from './photos/icon.png'

const Nav = () => {
	return (
		<header role="navigation">
			<nav id="section1" className="navbar navbar-expand-sm navbar-light bg-none">
				<Link className="navbar-brand" to="/"><img style={{ maxWidth: 50, maxHeight: 50 }} src={icon} alt="" />ГОЛОВНА</Link>
				<button className="navbar-toggler" data-toggle="collapse" data-target="#navbarManu">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarManu">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item"><Link className="nav-link" to="/search">ПОШУК ЗОБРАЖЕНЬ</Link></li>
						<li className="nav-item"><Link className="nav-link" to="/about">АВТОР</Link></li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Nav;
