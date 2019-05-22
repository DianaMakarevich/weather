import React from 'react';
import { shallow} from 'enzyme';

import  Header from './index';

describe('Header', () => {
    it('should render Header component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot()
    })
});
