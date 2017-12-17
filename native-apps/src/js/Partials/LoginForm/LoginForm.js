import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {View} from 'react-native';
import InputText from '../../Components/Inputs/InputText/InputText';

const LoginForm = props => {
	const {handleSubmit} = props;
	return (
		<View onSubmit={handleSubmit}>
			<Field
				name='email'
				component={InputText}
				placeholder='enter email'/>
			<Field
				name='password'
				component={InputText}
				placeholder='enter password'/>
		</View>
	)
};

export default reduxForm({
	form: 'login_form'
})(LoginForm);