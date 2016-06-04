import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class NavBar extends Component {
  render() {
    return(
      <View style={styles.navBar}>
        <Text style={styles.navBarText}>
          더 보기
        </Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    backgroundColor: '#FF6E40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarText: {
    fontSize: 20,
    color: 'white',
  },

});
