import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Icon
} from 'react-native';


class Button extends Component {
  render() {
    return (
      <View style={{flex: 1, height: 100, borderWidth: 0.3, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <Text style={{marginTop: 5}}>{this.props.name}</Text>
      </View>
    )
  }
}

export default class buttonGroup extends Component {
  render() {
    return(
      <View style={styles.buttonGroup}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button name="내 계정" />
          <Button name="친구" />
          <Button name="강의평가" />
          <Button name="학점계산기" />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button name="쪽지함" />
          <Button name="공지사항" />
          <Button name="도움말" />
          <Button name="설정" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonGroup: {
    height: 200,
    backgroundColor: 'white',
  },

});
