import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
	return (
		<header style={ headerStyle }>
			<h1>TODO LIST</h1>
				<Link style={linkSyle} to="/"> Home </Link> |
				<Link to="/about"> About </Link>
		</header>
		)
	}

const headerStyle = {
	background: '#333',
	color: 'white',
	textAlign: 'center',
	padding: '10px',
}	

const linkSyle= {
	color: '#fff',
	textDecoration: 'none',
}

export default Header;	