import React from 'react';
import {connect} from 'react-redux';
import {LOGIN_SCREEN, SIGNUP_SCREEN} from '../../Configs/screenNames';
import LoginScreen from '../LoginScreen/LoginScreen';

class ScreenController extends React.Component {
	constructor() {
		super();
		this.screenMap = {
			[LOGIN_SCREEN]: <LoginScreen/>,
			[SIGNUP_SCREEN]: null
		}
	}
	render() {
		const {mainScreen} = this.props;
		return this.screenMap[mainScreen];
	}
}

const mapStateToProps = (store) => {
	return {
		mainScreen: store.AppStateReducer.mainScreen
	}
};

export default connect(mapStateToProps)(ScreenController);