import {ACTION_TYPES} from '../actions/actions-types';

export default function Reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.fetchFilms:
            return state;
        case ACTION_TYPES.saveFilms:
            const newFilms = action.films;
            return Object.assign({}, state, {films: newFilms});
        case ACTION_TYPES.fetchFilmById:
            return state;
        case ACTION_TYPES.selectFilm:
            const newFilm = action.film;
            return Object.assign({}, state, {selectedFilm: newFilm});
        case ACTION_TYPES.resetFilms:
            return Object.assign({}, state, {films: []});
        case ACTION_TYPES.resetSelectedFilm:
            return Object.assign({}, state, {selectedFilm: null});
        case ACTION_TYPES.changeSearchValue:
            const value = action.value;
            return Object.assign({}, state, {searchValue: value});
        case ACTION_TYPES.changeSearchField:
            const field = action.value;
            return Object.assign({}, state, {searchField: field});
        case ACTION_TYPES.changeSortField:
            const updatedSortField = action.value;
            return Object.assign({}, state, {sortField: updatedSortField});
        default:
            return state;
    }
}