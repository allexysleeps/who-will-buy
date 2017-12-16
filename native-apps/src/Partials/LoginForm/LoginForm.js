import React from 'react';
import { Field, reduxForm } from 'redux-forms';
import {TextInput} from 'react-native';

const LoginForm = props => {
	const {handleSubmit} = props;
	return (
		<form onSubmit={handleSubmit}>
			<TextInput placeholder='email'/>
			<TextInput placeholder='password'/>
		</form>
	)
};

export default reduxForm({
	form: 'login_form'
})(LoginForm);