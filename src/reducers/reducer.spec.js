import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reducer from './reducer';
import {ACTION_TYPES} from "../actions/actions-types";

configure({adapter: new Adapter()});

const state = {
    films: 'films',
    selectedFilm: 'selectedFilm',
    searchValue: 'searchValue',
    sortField: 'sortField',
    searchField: 'searchField'
};

describe('Reducer', () => {
    it('it should return correct fetchFilms action', () => {
        expect(
            Reducer(state, {type: ACTION_TYPES.fetchFilms})
        ).toEqual(state);
    });

    it('it should return correct saveFilms action', () => {
        const {films, ...props} = state;
        const newFilms = 'updatedFilms';
        expect(
            Reducer(state, {type: ACTION_TYPES.saveFilms, films: newFilms})
        ).toEqual({films: newFilms, ...props});
    });

    it('it should return correct fetchFilmById action', () => {
        expect(
            Reducer(state, {type: ACTION_TYPES.fetchFilms})
        ).toEqual(state);
    });

    it('it should return correct selectFilm action', () => {
        const {selectedFilm, ...props} = state;
        const newFilm = 'updatedFilm';
        expect(
            Reducer(state, {type: ACTION_TYPES.selectFilm, film: newFilm})
        ).toEqual({selectedFilm: newFilm, ...props});
    });

    it('it should return correct resetFilms action', () => {
        const {films, ...props} = state;
        expect(
            Reducer(state, {type: ACTION_TYPES.resetFilms})
        ).toEqual({films: [], ...props});
    });

    it('it should return correct resetSelectedFilm action', () => {
        const {selectedFilm, ...props} = state;
        expect(
            Reducer(state, {type: ACTION_TYPES.resetSelectedFilm})
        ).toEqual({selectedFilm: null, ...props});
    });

    it('it should return correct changeSearchValue action', () => {
        const {searchValue, ...props} = state;
        const newValue = 'updatedValue';
        expect(
            Reducer(state, {type: ACTION_TYPES.changeSearchValue, value: newValue})
        ).toEqual({searchValue: newValue, ...props});
    });

    it('it should return correct changeSearchField action', () => {
        const {searchField, ...props} = state;
        const newValue = 'updatedValue';
        expect(
            Reducer(state, {type: ACTION_TYPES.changeSearchField, value: newValue})
        ).toEqual({searchField: newValue, ...props});
    });


    it('it should return correct changeSortField action', () => {
        const {sortField, ...props} = state;
        const newValue = 'updatedValue';
        expect(
            Reducer(state, {type: ACTION_TYPES.changeSortField, value: newValue})
        ).toEqual({sortField: newValue, ...props});
    });

});