import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ConfigureStore from './reducers/configure-store';
// import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter} from 'react-router-dom';
import Router from './Route'
import Page from './components/pages/Page';
const {store, persistor} = ConfigureStore();

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <Router/>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}