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
export default class IndexScene extends Component<Props> {
  static navigationOptions = {
    title: '첫화면!',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('Home', {name: '윤'})}
          title="Home으로">
        </Button>
        <Button
          onPress={() => navigate('Index', {})}
          title="Index로">
        </Button>
        <Button
          onPress={() => navigate('Tab', {})}
          title="Tab으로">
        </Button>
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
