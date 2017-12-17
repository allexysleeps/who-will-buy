import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Logo from '../../Components/Logo/Logo';
import LoginForm from '../../Partials/LoginForm/LoginForm';
import {palette} from '../../Constants/style';

class LoginScreen extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<View style={styles.container}>
				<Logo />
				<LoginForm style={styles.form}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: palette.light_grayish_blue,
		alignItems: 'center',
		justifyContent: 'center',
	},
	form: {
		width: "90%"
	}
});

export default LoginScreen;