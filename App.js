import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IndexScreen from './app/components/IndexScreen';
import GameScreen from './app/components/GameScreen';

const AppNavigator = createStackNavigator({
    IndexScreen: {
      screen: IndexScreen
    },
    GameScreen: {
      screen: GameScreen
    }
  },{
    initialRouteName: "IndexScreen",
    headerMode: 'none'
})

export default createAppContainer(AppNavigator);
