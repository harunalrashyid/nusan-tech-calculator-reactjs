import React from 'react';
import logo from '../../logo.svg';
import './header.css'

const Header = props => {
	const { title="Welcome to React" } = props;

	return(
		<header className="App__header">
	        <img src={logo} className="App__logo" alt="logo" />
	        <h1>{title}</h1>
	        <a
	          className="App__link"
	          href="https://reactjs.org"
	          target="_blank"
	          rel="noopener noreferrer"
	        >
	          Learn React
	        </a>
		</header>
	);
}

export default Header;
