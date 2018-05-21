import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import FilmDescription from './FilmDescription';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('FilmDescription', () => {

    it('renders without crashing', () => {
        const activeFilm = {runtime: 'timeline', title: 'name', genres: 'genre', release_date:'date', overview: 'description'};

        shallow(<FilmDescription selectedFilm={activeFilm}/>);
    });

    it('it should render the expected HTML', () => {
        const activeFilm = {runtime: 'timeline', title: 'name', genres: 'genre', release_date:'date', overview: 'description'};
        expect(
            mount(<FilmDescription selectedFilm={activeFilm}/>).html()
        ).toMatchSnapshot();
    });
});