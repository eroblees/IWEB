import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalState from './../reducers/reducers';
import { PLAYER_X, INITIAL_BOARD } from '../constants/constants';
import App from './App';

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            turn: PLAYER_X,
            winner: null,
            values: INITIAL_BOARD,
        };
        this.store = this.configureStore();
    }
    render() {
        return (
           <Provider store={ this.store }>
                <App />
            </Provider>
        );
    }
    configureStore() {
        const store = createStore(GlobalState, this.initialState);
        if (module.hot) {
            module.hot.accept('./../reducers/reducers', () => {
                const nextRootReducer = require('./../reducers/reducers').default;
                store.replaceReducer(nextRootReducer);
            });
        }
        return store;
    }
}