import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {View} from 'react-native';
import InputText from '../../Components/Inputs/InputText/InputText';
import SubmitButton from '../../Components/Buttons/SubmitButton/SubmitButton';

const LoginForm = props => {
	const {handleSubmit, style} = props;
	return (
		<View style={style}>
			<Field
				name='email'
				label='email'
				keyboardType='email-address'
				component={InputText}/>
			<Field
				name='password'
				label='password'
				secureTextEntry
				component={InputText}/>
			<SubmitButton onPress={handleSubmit}/>
		</View>
	)
};

export default reduxForm({
	form: 'login_form'
})(LoginForm);