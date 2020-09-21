import React from 'react';
import { shallow, mount } from 'enzyme';
import RepoDisplay from "./RepoDisplay";
import ErrorHandler from '../../graphQl/ErrorHandler';
import { MESSAGES } from "../../../constants/appConstants";


it('should render without errors', () => {
    const wrapper = shallow(<RepoDisplay
        repos={{
            totalCount: 12,
            nodes: []
        }}
    />);
    expect(wrapper.exists()).toBe(true);
});



it('should show N/A if repo desciption doesnt exist', () => {
    const wrapper = shallow(<RepoDisplay
        repos={{
            totalCount: 1,
            nodes: [{
                id: 1,
                name: 'TestRepo',
                description: null,
                url: null
            }]
        }}
    />);
    expect(wrapper.find('td.repoDesc').text()).toBe('N/A');
});




it('should render Error Page if repo count is zero', () => {
    const wrapper = mount(<RepoDisplay
        repos={{
            totalCount: 0,
            nodes: []
        }}
    />);


    expect(wrapper.find('.repoResults').exists()).toBe(false);
    expect(wrapper.find(ErrorHandler)).toBeDefined();
    expect(wrapper.find(ErrorHandler).text()).toEqual(MESSAGES.GRAPHQL.DATA_ERR);

});
