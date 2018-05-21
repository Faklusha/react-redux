import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('App', () => {

    it('renders without crashing', () => {
        shallow(<App/>);
    });

    it('it should render the expected HTML', () => {
        expect(
            mount(<App/>).html()
        ).toMatchSnapshot();
    });
});