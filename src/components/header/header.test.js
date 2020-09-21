import React from 'react';
import Header from "./Header";
import { shallow } from 'enzyme';

const MOCK_DATA = {
    HeadingLevel: 'h2',
    headingTxt: 'Test Heading',
    customClass: 'testClass'
}

it('should render without errors', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
});

it('should render with mock data', () => {
    const wrapper = shallow(
        <Header
            HeadingLevel={MOCK_DATA.HeadingLevel}
            headingTxt={MOCK_DATA.headingTxt}
            customClass={MOCK_DATA.customClass} />);
    expect(wrapper.find('.testClass').text()).toBe('Test Heading');
});
