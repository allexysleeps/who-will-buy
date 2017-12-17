import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

class InputText extends React.Component {
	render() {
		const {label} = this.props;
		return (
			<View>
				<FormLabel labelStyle={styles.label}>{label}</FormLabel>
				<FormInput
					{...this.props}/>
			</View>
		)
	}
}

const styles = {
	label: {
		fontSize: 18,
		fontWeight: "300",
	},
	input: {
		fontSize: 20,
	}

};

InputText.propTypes = {
	label: PropTypes.string,
};

export default InputText;