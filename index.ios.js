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
  View
} from 'react-native';

class gitbookTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
        </View>
        <View style={styles.right}>
          <View style={styles.rightTop}>
          </View>
          <View style={styles.rightBottom}>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    backgroundColor: 'red'
  },
  right: {
    flex: 2,
    flexDirection: 'column',
  },
  rightTop: {
    flex: 1,
    backgroundColor: 'blue'
  },
  rightBottom: {
    flex: 2,
    backgroundColor: 'yellow'
  }

});

AppRegistry.registerComponent('gitbookTest', () => gitbookTest);
