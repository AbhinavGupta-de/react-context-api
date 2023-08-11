import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const TodoList = () => {
	const data = useContext(ThemeContext);
	const theme = data.isDarkTheme ? data.darkTheme : data.lightTheme;
	const changeTheme = data.changeTheme;

	return (
		<div
			style={{
				background: theme.background,
				color: theme.text,
				height: '160px',
				textAlign: 'center',
			}}
		>
			<p className="item">Plan the trip</p>
			<p className="item">Go for shopping for dinner</p>
			<p className="item">Go for a walk</p>
			<button className="ui button primary" onClick={changeTheme}>
				Change the Theme
			</button>
		</div>
	);
};

export default TodoList;
