import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginView from './Views/LoginView/LoginView';

export default class App extends React.Component {
  render() {
    return (
      <LoginView/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
