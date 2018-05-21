import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import FilmListItem from './FilmListItem';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('FilmListItem', () => {

    it('renders without crashing', () => {
        shallow(<FilmListItem/>);
    });

    it('it should render the expected HTML', () => {
        expect(
            mount(<FilmListItem/>).html()
        ).toMatchSnapshot();
    });

    it('it should not call mock function', () => {
        const setActiveFilm = jest.fn();
        const wrapper = mount(<FilmListItem setActiveFilm={setActiveFilm}/>);

        expect(setActiveFilm).not.toBeCalled();
    });


    it('it should call mock function', () => {
        const setActiveFilm = jest.fn();
        const wrapper = mount(<FilmListItem setActiveFilm={setActiveFilm}/>);

        wrapper.find('div.film-list__item').simulate('click');
        expect(setActiveFilm).toBeCalled();
    });
});