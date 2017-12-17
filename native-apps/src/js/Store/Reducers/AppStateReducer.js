import {SWITCH_MAIN_SCREEN} from '../actionTypes';
import {LOGIN_SCREEN} from '../../Configs/screenNames';

export default function reducer(store={
	mainScreen: LOGIN_SCREEN
}, action) {
	switch(action.type) {
		case SWITCH_MAIN_SCREEN: {
			return {...store, mainView: action.payload}
		}
	}
	return store;
}