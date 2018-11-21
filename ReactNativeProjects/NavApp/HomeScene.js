/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

type Props = {};
export default class HomeScene extends Component<Props> {
  static navigationOptions = {
    title: '두번째화면!',
    headerRight: (
        <Button
        title="정보"/>
    ),
  };

  render() {
    const {params} = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text>HomeScene {params.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
