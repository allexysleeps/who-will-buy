import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-native-elements';
import {palette} from '../../../Constants/style';

const SubmitButton = props => {
	const {title, onPress} = props;
	return (
		<Button
			raised
			containerViewStyle={{
				marginTop: 50
			}}
			textStyle={{
				fontSize: 16
			}}
			backgroundColor={palette.lime_green}
			borderRadius={3}
			title={title.toUpperCase()}
			onPress={onPress}/>
	)
};

SubmitButton.defaultProps = {
	title: "submit",
};

SubmitButton.propTypes = {
	title: PropTypes.string,
	onPress: PropTypes.func,
};

export default SubmitButton;