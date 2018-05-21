import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FilmDescription from '../film-description/FilmDescription';
import Search from '../search/Search';
import Description from '../description/Description'
import FilmList from '../film-list/FilmList';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import {resetFilms, resetSelectedFilm} from '../../actions/actions';

import './_page.css';

@connect(state => ({
    selectedFilm: state.selectedFilm,
    films: state.films,
}))
export default class Page extends Component {

    componentWillUnmount() {
        const {dispatch} = this.props;
        bindActionCreators(resetFilms, dispatch);
        this.resetFilm();
    }

    resetFilm() {
        const {dispatch} = this.props;
        return bindActionCreators(resetSelectedFilm, dispatch);
    }

    render() {
        const {selectedFilm, films} = this.props;

        return (
            <div className="page">
                <ErrorBoundary>
                    <Header isFilmSelected={!!selectedFilm} resetActiveFilm={this.resetFilm()}/>
                    {selectedFilm ? <FilmDescription selectedFilm={selectedFilm}/> :
                        <Search resetActiveFilm={this.resetFilm()}/>}
                    <Description isShownOptions={!selectedFilm} count={films.length}/>
                    <FilmList />
                    <Footer/>
                </ErrorBoundary>
            </div>
        );
    }
}
