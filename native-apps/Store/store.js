import {createStore} from 'redux';
import RootReducer from './Reducers/RootReducer';

const store = createStore(RootReducer);

export const dispatch = store.dispatch;
export default store;