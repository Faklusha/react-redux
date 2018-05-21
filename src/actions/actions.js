import {ACTION_TYPES} from './actions-types';
import {SORT_FIELDS} from '../components/description/consts';
import {SEARCH_FIELDS} from '../components/search/consts';

export const resolveUrl = (searchValue, searchField, sortField) => {
    const url = 'http://react-cdp-api.herokuapp.com/movies';
    let params = 'limit=100&sortOrder=asc';
    params = params + `&sortBy=${sortField || SORT_FIELDS.release.name}`;
    if (searchValue) {
        params = params + `&search=${searchValue}&searchBy=${searchField || SEARCH_FIELDS.title.name}`
    }
    return `${url}?${params}`;
};


export const fetchFilms = (searchValue, searchField, sortField) => (dispatch) => {
    fetch(resolveUrl(searchValue, searchField, sortField), {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then((response) => {
        return response.json();
    })
        .then((responseData) => {
            return dispatch(saveFilms(responseData.data));
        })
        .catch((error) => {
            console.error(error);
        });

    return {
        type: ACTION_TYPES.fetchFilms,
    };
};

export function saveFilms(films) {
    return {
        type: ACTION_TYPES.saveFilms,
        films
    };
}

export const fetchFilmById = (id) => (dispatch) => {
    fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then((response) => {
        return response.json();
    })
        .then((responseData) => {
            return dispatch(selectFilm(responseData));
        })
        .catch((error) => {
            console.error(error);
        });

    return {
        type: ACTION_TYPES.fetchFilmById,
        id
    };
};


export function selectFilm(film) {
    return {
        type: ACTION_TYPES.selectFilm,
        film
    };
}

export function resetFilms() {
    console.log('reset_all');

    return {
        type: ACTION_TYPES.resetFilms,
    };
}

export function resetSelectedFilm(id) {
    return {
        type: ACTION_TYPES.resetSelectedFilm,
        id
    };
}

export function changeSearchValue(value) {
    return {
        type: ACTION_TYPES.changeSearchValue,
        value
    };
}


export function changeSearchField(value) {
    return {
        type: ACTION_TYPES.changeSearchField,
        value
    };
}

export function changeSortField(value) {
    return {
        type: ACTION_TYPES.changeSortField,
        value
    };
}