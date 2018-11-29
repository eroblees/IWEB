import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

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