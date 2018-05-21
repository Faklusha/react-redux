import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Header', () => {

    it('renders without crashing', () => {
        shallow(<Header/>);
    });

    it('it should render the expected HTML', () => {
        expect(
            mount(<Header isFilmSelected/>).html()
        ).toMatchSnapshot();
    });

    it('it should render the expected HTML', () => {
        expect(
            mount(<Header/>).html()
        ).toMatchSnapshot();
    });

    it('it should not call mock function', () => {
        const resetActiveFilm = jest.fn();
        const wrapper = mount(<Header isFilmSelected resetActiveFilm={resetActiveFilm}/>);

        expect(resetActiveFilm).not.toBeCalled();
    });


    it('it should call mock function', () => {
        const resetActiveFilm = jest.fn();
        const wrapper = mount(<Header isFilmSelected resetActiveFilm={resetActiveFilm}/>);

        wrapper.find('div.search-button').simulate('click');
        expect(resetActiveFilm).toBeCalled();
    });
});