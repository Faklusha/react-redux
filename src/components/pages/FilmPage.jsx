import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FilmDescription from '../film-description/FilmDescription';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import {fetchFilmById, resetSelectedFilm} from '../../actions/actions';
import {push} from 'react-router-redux';
import './_page.css';

@connect(state => ({
    selectedFilm: state.selectedFilm,
    id: state.router.location.id,
}), {push})
export default class FilmPage extends Component {

    componentWillMount() {
        const {dispatch, id} = this.props;
        bindActionCreators(fetchFilmById, dispatch)(id);
    }


    componentWillUnmount() {
        this.resetFilm();
    }

    resetFilm() {
        const {dispatch} = this.props;
        bindActionCreators(resetSelectedFilm, dispatch);
        push('homeurl');
    }

    render() {
        const {selectedFilm} = this.props;

        return (
            <div className="page">
                <ErrorBoundary>i
                    <Header isFilmSelected resetActiveFilm={this.resetFilm()}/>
                    <FilmDescription selectedFilm={selectedFilm}/>
                    <Footer/>
                </ErrorBoundary>
            </div>
        );
    }
}
