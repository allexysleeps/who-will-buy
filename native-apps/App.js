import React from 'react';
import {Provider} from 'react-redux';
import ScreenController from './Screens/ScreenController/ScreenController';
import store from './Store/store';

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
		    <ScreenController/>
	    </Provider>
    );
  }
}