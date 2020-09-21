import React from 'react';
import { shallow } from 'enzyme';
import Header from "../header/Header";
import Searchbar from "../searchPage/searchbar/Searchbar";
import SearchPage from "./SearchPage";
import GraphqlReponseHandler from "../graphQl/GraphqlReponseHandler";
import { act } from 'react-test-renderer';


it('should render without issues', () => {
    const wrapper = shallow(<SearchPage />);    
    expect(wrapper.exists()).toBe(true);    
});


it('should render Header and Searchbar by default without issues', () => {
    const wrapper = shallow(<SearchPage />);

    expect(wrapper.find(GraphqlReponseHandler).exists()).toBe(false);
    
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Searchbar).exists()).toBe(true);
    
});


it('should render  GraphqlReponseHandler only when searchTxt is NOT empty',()=>{
    const wrapper = shallow(<SearchPage />);
    const setSearchTxt =wrapper.find(Searchbar).prop('setSearchTxt');
    
    act(()=>{
        setSearchTxt('hookUpdated');
    });
    setSearchTxt('hookUpdated');
    expect(wrapper.find(GraphqlReponseHandler).exists()).toBe(true);
    expect(wrapper.find(GraphqlReponseHandler).prop('searchTxt')).toBe('hookUpdated');
});