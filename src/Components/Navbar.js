import React from 'react';
import { ThemeContext } from './ThemeContext';
import { AuthContext } from './AuthContext';

class Navbar extends React.Component {
	static contextType = ThemeContext;
	render() {
		const { isDarkTheme, lightTheme, darkTheme } = this.context;
		const theme = isDarkTheme ? darkTheme : lightTheme;

		return (
			<AuthContext.Consumer>
				{(context) => (
					<nav
						style={{
							background: theme.background,
							height: '120px',
						}}
					>
						<h2
							className="ui centered header"
							style={{ textAlign: 'center', color: theme.text }}
						>
							Home
						</h2>
						<p
							onClick={context.toggleAuth}
							style={{ color: theme.text, textAlign: 'center' }}
						>
							{context.isAuthenticated ? 'Logged in' : 'Logged Out'}
						</p>
						<div className="ui three buttons">
							<button className="ui button">Overview</button>
							<button className="ui button">Contact</button>
							<button className="ui button">Support</button>
						</div>
					</nav>
				)}
			</AuthContext.Consumer>
		);
	}
}

export default Navbar;
