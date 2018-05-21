import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,  applyMiddleware} from 'redux';
import Reducer from './reducers/reducer';
import thunk from 'redux-thunk'

const store = createStore(Reducer, applyMiddleware(thunk));
import Page from './components/pages/Page';


export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Page/>
                </Provider>
            </div>
        );
    }
}