import React from 'react';
import {Provider} from 'react-redux';
import ScreenController from './src/Screens/ScreenController/ScreenController';
import store from './src/Store/store';

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
		    <ScreenController/>
	    </Provider>
    );
  }
}