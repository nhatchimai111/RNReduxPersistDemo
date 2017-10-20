/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
// import { AppLoading } from 'expo';

import store from './src/store';

import HomeContainer from './src/containers/HomeContainer';


export default class App extends Component<{}> {

    state = {
        isReady: false
    }

    componentDidMount() {

        // init persistStore with 3 parameters store, config, callback
        // writelist: state is been saved into AsyncStorage 
        // baclklist: state is'nt been saved into AsyncStorage 
        persistStore(
            store,
            {
                storage: AsyncStorage,
                whitelist: ['userState', 'counterState'],
                // baclklist: ['userState']
            },
            () => {
                this.setState({ isReady: true })
            }
        )
    }

    render() {
        if (!this.state.isReady) {
            return null;
        }
        return (
            <Provider store={store}>
                <HomeContainer />
            </Provider>
        );
    }

}
