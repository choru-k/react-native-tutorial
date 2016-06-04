import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class User extends Component {
  render() {
    return(
      <View style={styles.user}>
        <View style={{height: 150, flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
          <View style={{width: 100}}>
            <Image source={require('./img/avatar.png')} style={{width: 100, height: 100}}/>
          </View>
          <View style={{flex: 1, marginLeft: 20}}>
            <Text style={{fontSize: 30}}>닉네임</Text>
            <Text style={{color: 'gray', fontSize: 15}}>이름 / ID</Text>
            <Text style={{color: 'gray', fontSize: 15}}>학교이름</Text>
          </View>
        </View>
        <View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./img/list.png')} style={{width: 30, height: 25}}/>
            <Text style={{marginLeft: 5}}>내가 쓴 글</Text>
          </View>
          <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./img/chat.png')} style={{width: 30, height: 25}}/>
            <Text style={{marginLeft: 5}}>댓글 단 글</Text>
          </View>
          <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./img/star.png')} style={{width: 30, height: 30}}/>
            <Text style={{marginLeft: 5}}>스크랩</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  user: {
    height: 200,
    backgroundColor: 'white',
  },
})
