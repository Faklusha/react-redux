import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Page from './Page';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from 'redux';
import Reducer from '../../reducers/reducer';

const store = createStore(Reducer, {
    films: [{runtime: 'timeline', title: 'name', genres: ['genre'], release_date: 'date', overview: 'description'}],
    selectedFilm: {
        runtime: 'timeline',
        title: 'name',
        genres: ['genre'],
        release_date: 'date',
        overview: 'description'
    },
});

configure({adapter: new Adapter()});
describe('Page', () => {

    it('renders without crashing', () => {
        shallow(<Page store={store}/>);
    });

    it('it should render the expected HTML', () => {
        expect(
            mount(<Page store={store}/>).html()
        ).toMatchSnapshot();
    });
});