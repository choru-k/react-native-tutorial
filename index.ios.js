/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import NavBar from './navBar.js'
import User from './user.js'
import ButtonGroup from './buttonGroup'
import Tabs from './tabs'

class gitbookTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <User />
        <View style={{height: 40}}>
        </View>
        <ButtonGroup />
        <View style={{flex: 1}}>
        </View>
        <Tabs />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

AppRegistry.registerComponent('gitbookTest', () => gitbookTest);
