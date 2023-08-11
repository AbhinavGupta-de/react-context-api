import React, { createContext, useEffect } from 'react';
export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
	state = {
		testString: 'test',
		isDarkTheme: true,
		darkTheme: {
			text: 'white',
			background: '#5c5c5c',
		},
		lightTheme: {
			text: '#222',
			background: '#d8ddf1',
		},
	};

	changeTheme = () => {
		this.setState({ isDarkTheme: !this.state.isDarkTheme });
	};

	// This is how we do it if we do not want that if else statement in our components
	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState.isDarkTheme !== this.state.isDarkTheme) {
	// 		if (this.state.isDarkTheme) {
	// 			this.setState({
	// 				theme: {
	// 					text: 'white',
	// 					background: '#5c5c5c',
	// 				},
	// 			});
	// 		} else {
	// 			this.setState({
	// 				theme: {
	// 					text: '#222',
	// 					background: '#d8ddf1',
	// 				},
	// 			});
	// 		}
	// 	}
	// }

	render() {
		return (
			<ThemeContext.Provider
				value={{ ...this.state, changeTheme: this.changeTheme }}
			>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContextProvider;
