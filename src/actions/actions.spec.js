import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    saveFilms,
    selectFilm,
    resetFilms,
    resetSelectedFilm,
    changeSortField,
    changeSearchValue,
    changeSearchField,
    resolveUrl
} from './actions';


configure({adapter: new Adapter()});
describe('Actions', () => {
    it('it should return correct saveFilms action', () => {
        expect(
            saveFilms('films')
        ).toEqual({type: 'SAVE_FILMS', films: 'films'})
    });

    it('it should return correct selectFilm action', () => {
        expect(
            selectFilm('films')
        ).toEqual({type: 'SELECT_FILM', film: 'films'})
    });

    it('it should return correct resetFilms action', () => {
        expect(
            resetFilms('films')
        ).toEqual({type: 'RESET_FILMS'})
    });

    it('it should return correct resetSelectedFilm action', () => {
        expect(
            resetSelectedFilm('id')
        ).toEqual({type: 'RESET_SELECTED_FILM', id: 'id'})
    });

    it('it should return correct changeSearchValue action', () => {
        expect(
            changeSearchValue('value')
        ).toEqual({type: 'CHANGE_SEARCH_VALUE', value: 'value'})
    });

    it('it should return correct changeSearchField action', () => {
        expect(
            changeSearchField('value')
        ).toEqual({type: 'CHANGE_SEARCH_FIELD', value: 'value'})
    });

    it('it should return correct changeSortField action', () => {
        expect(
            changeSortField('value')
        ).toEqual({type: 'CHANGE_SORT_FIELD', value: 'value'})
    });

    it('it should return correct url with search field', () => {
        expect(
            resolveUrl('searchValue', 'searchField', 'sortField')
        ).toEqual('http://react-cdp-api.herokuapp.com/movies?limit=100&sortOrder=asc&sortBy=sortField&search=searchValue&searchBy=searchField')
    });

    it('it should return correct url without search field', () => {
        expect(
            resolveUrl(null, null, 'sortField')
        ).toEqual('http://react-cdp-api.herokuapp.com/movies?limit=100&sortOrder=asc&sortBy=sortField')
    });
});