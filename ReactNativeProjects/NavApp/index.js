/** @format */

import {AppRegistry} from 'react-native';
import IndexScene from './IndexScene';
import HomeScene from './HomeScene';

import TabScene1 from './TabScene1';
import TabScene2 from './TabScene2';

import {name as appName} from './app.json';

import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';

const TabSceneNavigator = createBottomTabNavigator({
  Tab1 : {screen: TabScene1},
  Tab2 : {screen: TabScene2},
});

const MainNavigation = createStackNavigator({
  Index : {screen: IndexScene},
  Home : {screen: HomeScene},
  Tab: {
    screen: TabSceneNavigator,
    navigationOptions: {
      title: 'Tab Scenes',
    },
  },
});

const NavApp = createAppContainer(MainNavigation);

AppRegistry.registerComponent(appName, () => NavApp);
