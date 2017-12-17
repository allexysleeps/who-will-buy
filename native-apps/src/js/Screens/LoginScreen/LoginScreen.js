import React from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from '../../Components/Logo/Logo';
import LoginForm from '../../Partials/LoginForm/LoginForm';
import {palette} from '../../Constants/style';
import {loginRequest} from '../../Utils/API/auth';

class LoginScreen extends React.Component {
	constructor() {
		super();
	}

	handleSubmit = (values) => {
		console.log('asdasdasd');
		console.log(values());
		// loginRequest(data)
		// 	.then( res => {
		// 		console.log(res)
		// 	})
		// 	.catch( err => {
		// 		console.log(err);
		// 	})
	};

	render() {
		return (
			<View style={styles.container}>
				<Logo />
				<LoginForm style={styles.form} handleSubmit={this.handleSubmit}/>
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