import {combineReducers} from 'redux';
import formReducer  from 'redux-forms';
import AppStateReducer from './AppStateReducer';

const RootReducer = combineReducers({
	AppStateReducer,
	form: formReducer
});

export default RootReducer;