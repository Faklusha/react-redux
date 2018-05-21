import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import ErrorBoundary from './ErrorBoundary';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('ErrorBoundary', () => {

    it('renders without crashing', () => {
        shallow(<ErrorBoundary/>);
    });

    it('it should render the expected HTML', () => {
        const mockChildren = <span>hello</span>;
        expect(mount(<ErrorBoundary>{mockChildren}</ErrorBoundary>)).toMatchSnapshot();
    });
});