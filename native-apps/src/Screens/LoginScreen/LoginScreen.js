import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import InputText from '../../Components/Inputs/InputText/InputText';
import Logo from '../../Components/Logo/Logo';

class LoginScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			email: null,
			password: null,
		}
	}

	getInputValue = (value, field) => {
		this.setState({
			[field]: value
		})
	};

	render() {
		const {email, password} = this.state;
		return (
			<View style={styles.container}>
				<Logo/>
				<InputText
					placeholder='email'
					value={email}
					onChangeText={(value) => this.getInputValue(value, 'email')}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export default LoginScreen;