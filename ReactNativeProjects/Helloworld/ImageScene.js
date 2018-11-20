import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class ImageScene extends Component {
  render() {
    let pic1 = {
      uri: 'https://cdn.pixabay.com/photo/2017/05/07/21/42/sky-2293749_960_720.jpg'
    };

    let pic2 = {
      uri: 'https://cdn.pixabay.com/photo/2018/06/28/20/02/sun-3504721_960_720.jpg'
    };

    return (
      <View>
        <Image source={pic1} style={{width:300, height:160}}/>
        <Image source={pic2} style={{width:300, height:160}}/>
        <Image source={pic1} style={{width:300, height:160}}/>
      </View>
    );
  };
}
