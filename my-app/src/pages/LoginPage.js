import React from 'react';
import Login from '../components/login/Login';

const LoginPage = (props) => {
	console.log('LoginPage', props);
	console.log(props.match.params.id);
	return (
		<div>
			<Login />
		</div>
	);
};

export default LoginPage;
