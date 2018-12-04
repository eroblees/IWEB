import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalState from './../reducers/reducers';
import { PLAYER_X, INITIAL_BOARD } from '../constants/constants';
import GameScreen from './GameScreen';

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
                <GameScreen />
            </Provider>
        );
    }
    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}