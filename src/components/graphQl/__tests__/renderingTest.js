import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorHandler from "../ErrorHandler";
import LoadingIndicator from "../LoadingIndicator";

it('should render Error Page without errors', () => {
    const wrapper = shallow(<ErrorHandler />);
    expect(wrapper.exists()).toBe(true);
});

it('Error Page should display passed error message', () => {
    const ERR_MSG = 'Test Error Message';
    const wrapper = mount(<ErrorHandler errMsg={ERR_MSG} />);
    expect(wrapper.find(ErrorHandler).prop('errMsg')).toEqual(ERR_MSG);
});


it('should render Loading Indicator without errors', () => {
    const wrapper = shallow(<LoadingIndicator />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('img').prop('src')).toEqual('loading.gif');
});