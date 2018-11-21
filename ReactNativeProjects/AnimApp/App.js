/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Animated,
  Easing,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();

    this.state = {
      opacityValue: new Animated.Value(0),
      bounceValue: new Animated.Value(0),
      decayValue: new Animated.ValueXY(),

      parallelXYValue: new Animated.ValueXY(),
      parallelScaleValue: new Animated.Value(0),

    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.opacityValue,
      {
        toValue: 1,
        duration: 2000,
        ease: Easing.inOut,
        delay: 500,
      }
    ).start();

    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 1,
        friction: 0.1,
        tension: 3,
      }
    ).start();

    Animated.decay(
      this.state.decayValue,
      {
        velocity: {
          x: -0.25,
          y: 0.25
        },
        deceleration: 0.998,
      }
    ).start();

    /// parallel & sequence
    Animated.parallel([
      Animated.sequence([
        Animated.timing(
          this.state.parallelXYValue.y,
          {
            toValue: -300,
            duration: 2000,
            ease: Easing.inOut,
            delay: 1000,
          }
        ),
        Animated.timing(
          this.state.parallelXYValue.x,
          {
            toValue: -100,
            duration: 2000,
            ease: Easing.inOut,
            delay: 1000,
          }
        ),
      ]),
      Animated.spring(
        this.state.parallelScaleValue,
        {
          toValue: 1,
          friction: 0.1,
          tension: 1,
        }
      )
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text
          style={{opacity: this.state.opacityValue}}>
          Animated Timing
        </Animated.Text>

        <Animated.Text
          style={{transform:
            [
                {scale: this.state.bounceValue},
            ]
          }}>
          Animated Spring
        </Animated.Text>

        <Animated.Text
          style={{transform:
            [
              {translateX: this.state.decayValue.x},
              {translateY: this.state.decayValue.y},
            ]
          }}>
          Animated Decay
        </Animated.Text>

        <Animated.Text
          style={{transform:
            [
              {scale: this.state.parallelScaleValue},
              {translateX: this.state.parallelXYValue.x},
              {translateY: this.state.parallelXYValue.y},
            ]
          }}>
          Animated parallel & sequence
        </Animated.Text>
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
