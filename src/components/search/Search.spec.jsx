import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Search from './Search';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from 'redux';
import Reducer from '../../reducers/reducer';

const store = createStore(Reducer, {
    sortField: 'sortField',
    searchField: 'searchField',
    searchValue: 'searchValue',
});


configure({adapter: new Adapter()});

describe('Search', () => {
    it('renders without crashing', () => {
        shallow(<Search store={store}/>);
    });


    it('it should render the expected HTML', () => {
        expect(
            mount(<Search store={store}/>).html()
        ).toMatchSnapshot();
    });

    it('it should not call mock function', () => {
        const reset = jest.fn();
        const wrapper = mount(<Search resetActiveFilm={reset} store={store}/>);

        expect(reset).not.toBeCalled();
    });
});