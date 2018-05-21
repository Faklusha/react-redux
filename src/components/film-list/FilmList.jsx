import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FilmListItem from './FilmListItem';
import {fetchFilms, fetchFilmById} from '../../actions/actions';
import './_film-list.css';

@connect(state => ({
    films: state.films,
}))
export default class FilmList extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        bindActionCreators(fetchFilms, dispatch)();
    }

    selectFilm = (id) => {
        const {dispatch, sortField} = this.props;
        bindActionCreators(fetchFilmById, dispatch)(id);
    }

    renderFilms = () => {
        const {films} = this.props;
        if(films.length === 0) {
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
            <div className={"film-list"}>
                {this.renderFilms()}
            </div>
        );
    }
}
