import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Description from './Description';
import DescriptionOptions from './DescriptionOptions';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Description', () => {

    it('renders without crashing', () => {
        shallow(<Description/>);
    });

    it('it should render the expected HTML', () => {
        expect(
            mount(<Description/>).html()
        ).toMatchSnapshot();
    });
});