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
  View,
  Button,
  CheckBox,
  Picker,
  Slider,
  Switch,
  TextInput,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      checkboxValue: false,
      pickerValue: null,
      sliderValue:0,
      switchValue:false,
      textValue:'',
    };
  }

  componentDidMount() {
    setInterval(this.onTimer.bind(this), 1000);
  }

  onTimer() {
    console.log('Set switch to false.');
    this.setState({switchValue: false});
  }

  onPressButton() {
    console.log('Pressed!');
  }

  onCheckValueChange(value) {
    console.log(value);
    this.setState({checkboxValue: value});
  }

  onPickerValueChange(value, index) {
    console.log(value);
    console.log(index);
    this.setState({pickerValue: value})
  }

  onSliderValueChange(value) {
    console.log(value);
    this.setState({sliderValue: value});
  }

  onSliderSlidingComplete() {
    console.log('Slided!');
  }

  onSwitchValueChange(value) {
    console.log(value);
    this.setState({switchValue: value});
  }

  onTextInputChange(value) {
    console.log(value);
    if (value.length < 10)
      this.setState({textValue: value});
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressButton}
          title="Click Me!"
        />

      <View style={styles.horizontaler}>
          <CheckBox
            onValueChange={this.onCheckValueChange.bind(this)}
            style={{marginBottom: 10}}
            value={this.state.checkboxValue}/>
          <Text>
            Check Me!
          </Text>
        </View>

        <Picker style={styles.picker}
          selectedValue={this.state.pickerValue}
          onValueChange={this.onPickerValueChange.bind(this)}>
          <Picker.Item label="Javascript" value="js"/>
          <Picker.Item label="Ruby" value="rb"/>
          <Picker.Item label="Python" value="py"/>
          <Picker.Item label="C++" value="cpp"/>
        </Picker>

        <Slider style={styles.slider}
          maximumValue={10}
          minimumValue={0}
          step={0.5}
          value={this.state.sliderValue}
          onValueChange={this.onSliderValueChange.bind(this)}
          onSlidingComplete={this.onSliderSlidingComplete.bind(this)}>
        </Slider>

        <Switch style={styles.switch}
          value={this.state.switchValue}
          onValueChange={this.onSwitchValueChange.bind(this)}>
        </Switch>

        <TextInput
          style={styles.textIput}
          onChangeText={this.onTextInputChange.bind(this)}
          value={this.state.textValue}>
        </TextInput>
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
  horizontaler: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    width: 200,
    height: 50,
  },
  slider: {
    width: 200,
  },
  switch: {

  },
  textIput: {
    width: 200,
  }
});
