import './index.styl';
import React from 'react';
import { Link } from 'react-router';

export default class Html extends React.Component {

	render() {

		return (
			<div>
				<header id="header">
					<nav id="nav">
						<Link to="/projekt" className="nav-link">Das Projekt</Link>
						<Link to="/helfen" className="nav-link">Wie kann ich helfen?</Link>
						<Link to="/stories" className="nav-link">Stories</Link>
						<Link to="/kontakt" className="nav-link">Kontakt</Link>
					</nav>
				</header>
				<div id="content">
					{this.props.children}
				</div>
			</div>

		)
	}
}
