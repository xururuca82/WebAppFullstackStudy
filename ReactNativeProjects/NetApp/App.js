/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      spots: [
        {id: '1', name: 'Dummy1', description:''},
        {id: '2', name: 'Dummy2', description:''},
      ],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch ('데이터를 받을 url')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          spots: responseJson
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  postData() {
    fetch ('url', {
      method: 'POST',
      body: {
        name: '맛집1',
        description: 'dsasfsfe',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.spots}
          keyExtractor={(item, index) => item.id}
          renderItem = {
            ({item}) =>
            <View style={styles.itemStyle}>
              <Text style={styles.itemTextStyle}>
                {item.name}
              </Text>
            </View>
          }
        />
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
  list: {
    alignSelf: 'stretch',
  },
  itemStyle: {
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 44,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  itemTextStyle: {
    fontSize: 18,
  },
});
