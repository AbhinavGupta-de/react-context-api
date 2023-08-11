import React from 'react';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import ThemeContextProvider from './Components/ThemeContext';
import AuthContextProvider from './Components/AuthContext';

const App = () => {
	return (
		<div className="App">
			<div className="ui raised very padded text container segment">
				<ThemeContextProvider>
					<AuthContextProvider>
						<Navbar />
						<TodoList />
					</AuthContextProvider>
				</ThemeContextProvider>
			</div>
		</div>
	);
};

export default App;
