import React from 'react';
import {Text} from 'react-native';

const DisplayText = (props) => {
	const {value} = props;
	return (
		<Text value={value}/>
	)
};

export default DisplayText;