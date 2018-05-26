import React, {Component} from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import {bindActionCreators} from 'redux';
import FilmListItem from './FilmListItem';
import {fetchFilms} from '../../actions/actions';

import './_film-list.css';

@connect(state => ({
    films: state.films,
}), {push, fetchFilms})
export default class FilmList extends Component {

    componentDidMount() {
        const {fetchFilms} = this.props;
        fetchFilms();
    }

    selectFilm = (id) => {
        const {push} = this.props;
        push('someurl')
    }

    renderFilms = () => {
        const {films} = this.props;
        if(!films || films.length === 0) {
            return (<span>No films found</span>)
        }
        return films.map(film => (
            <FilmListItem
                title={film.title}
                date={film.release_date}
                genre={film.genres.join(',')}
                
                path={film.poster_path}
                setActiveFilm={() => this.selectFilm(film.id)}
            />
        ));
    }


    render() {
        return (
            <div className="film-list">
                {this.renderFilms()}
            </div>
        );
    }
}
