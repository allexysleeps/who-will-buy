import {combineReducers} from 'redux';
import {reducer as formReducer}  from 'redux-form';
import AppStateReducer from './AppStateReducer';

const RootReducer = combineReducers({
	AppStateReducer,
	form: formReducer
});

export default RootReducer;