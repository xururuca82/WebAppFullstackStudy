import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export default class BlinkScene extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true, helloText: 'Hello'};

    setInterval(() => {
      this.setState(prevState => {
        return { showText: !prevState.showText, helloText: prevState.helloText + '!'}
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.state.helloText : '';
    return (
      <View>
        <Text style={styles.colorset1}>{display}</Text>
        <Text style={styles.colorset2}>{display}</Text>
        <Text style={styles.colorset3}>{display}</Text>
        <Text style={[styles.colorset1, styles.colorset2]}>{display}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  colorset1 :{
    color: '#ff0000'
  },
  colorset2 :{
    color: '#00ff00',
    fontWeight: 'bold',
  },
  colorset3 : {
    color: '#0000ff'
  }
});
