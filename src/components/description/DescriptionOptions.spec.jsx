import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import DescriptionOptions from './DescriptionOptions';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from 'redux';
import Reducer from '../../reducers/reducer';

const store = createStore(Reducer, {
    sortField: 'sortField',
    searchField: 'searchField',
    searchValue: 'searchValue',
});


configure({adapter: new Adapter()});
describe('DescriptionOptions', () => {


    it('renders without crashing', () => {
        shallow(<DescriptionOptions store={store}/>);
    });

    it('it should render the expected HTML', () => {
        expect(
            mount(<DescriptionOptions store={store} />).html()
        ).toMatchSnapshot();
    });
});