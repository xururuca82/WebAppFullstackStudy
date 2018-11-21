/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {
  Accelerometer
} from 'react-native-sensors';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();

    new Accelerometer({
      updateInterval: 400 // defaults to 100ms
    })
      .then(observable => {
        observable.subscribe(({x,y,z}) => this.setState({x,y,z}));
      })
      .catch(error => {
        console.log("The sensor is not available");
      });

    this.state = {x: 0, y: 0, z: 0};
  }

  // componentDidMount() {
  //   const observable = new Accelerometer({
  //       updateInterval: 100,
  //   });
  //
  //   observable.subscribe(acceleration => {
  //       this.setState(
  //         {
  //           x:acceleration.x,
  //           y:acceleration.y,
  //           z:acceleration.z,
  //         });
  //     })
  // }

  componentWillUnmount() {
    observable.stop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
        x: {this.state.x} |
        </Text>
        <Text>
        y: {this.state.y} |
        </Text>
        <Text>
        z: {this.state.z} |
        </Text>
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
