import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

class InputText extends React.Component {
	render() {
		const {value, onChangeText, placeholder} = this.props;
		return (
			<TextInput
				style={styles.general}
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}/>
		)
	}
}

const styles = StyleSheet.create({
	general: {
		borderColor: 'black',
		borderWidth: 1,
		width: 200,
	}
});

export default InputText;