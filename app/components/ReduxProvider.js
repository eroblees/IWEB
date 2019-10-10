import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalState from './../reducers/reducers';
import { PLAYER_X, INITIAL_BOARD } from '../constants/constants';

import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IndexScreen from './IndexScreen';
import GameScreen from './GameScreen';

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

const AppContainer = createAppContainer(AppNavigator);

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            turn: PLAYER_X,
            winner: null,
            values: INITIAL_BOARD
        };
        this.store = this.configureStore();
    }
    render() {
        return (
           <Provider store={ this.store }>
                <AppContainer />
            </Provider>
        );
    }
    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}
