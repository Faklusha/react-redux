import React, {Component} from 'react';
import {Switch, Route } from 'react-router-dom';
import Page from './components/pages/Page';
import FilmPage from './components/pages/FilmPage';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Page}/>
                <Route path='/film/:id' component={FilmPage}/>
            </Switch>
        );
    }
}
