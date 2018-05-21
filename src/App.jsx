import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Page from './components/pages/Page';
import ConfigureStore from './reducers/configure-store';
import { PersistGate } from 'redux-persist/integration/react'

const {store, persistor} = ConfigureStore();

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                    <Page/>
                    </PersistGate>
                </Provider>
            </div>
        );
    }
}