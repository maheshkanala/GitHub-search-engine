import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from "./Searchbar";



it('should render without errors', () => {
    const wrapper = shallow(<Searchbar placeholder=''/>);
    const wrapper_withProps = shallow(<Searchbar
        searchTxt=''
        setSearchTxt={()=>{}}
        defaultSearchTxt=''
        placeholder=''
    />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper_withProps.exists()).toBe(true);
});


it('should display default placeholder and search text', () => {
    const wrapper = shallow(<Searchbar
        searchTxt='defaultUser'
        placeholder='testPlaceHolder'
    />);

    const { value, placeholder } = wrapper.find('.searchPage__searchBar--searchTxt').props();

    expect(value).toBe('defaultUser');
    expect(placeholder).toBe('testPlaceHolder');
});


describe(` testing 'setSearchTxt' hook `, () => {
    let setSearchTxt, wrapper;

    beforeEach(() => {
        setSearchTxt = jest.fn();
        wrapper = shallow(<Searchbar
            searchTxt=''
            placeholder=''
            setSearchTxt={setSearchTxt}
            defaultSearchTxt=''
        />);
    });

    it(`hook should be updated with user input in input field `, () => {
        const input = wrapper.find('.searchPage__searchBar--searchTxt');
        const { value } = input.props();
        expect(value).toBe('');

        input.simulate('change', { target: { value: 'testUsr' } });
        expect(setSearchTxt).toHaveBeenCalledWith('testUsr');

    });

    it(`hook should set to 'defaultSearchTxt' on every click of clear Button`, () => {
        const clearButton = wrapper.find({ 'data-testid': "clearButton" });
        clearButton.simulate('click');
        expect(setSearchTxt).toHaveBeenCalledWith('');
    });

    it(`hook should set to 'defaultSearchTxt' only when clearButton is selected and ENTER key is pressed `, () => {
        const clearButton = wrapper.find({ 'data-testid': "clearButton" });
        const ENTER_KEYCODE=13,SHIFT_KEYCODE=16;
        clearButton.simulate('keydown', { keyCode: SHIFT_KEYCODE });
        expect(setSearchTxt).not.toHaveBeenCalled();

        clearButton.simulate('keydown', { keyCode: ENTER_KEYCODE });
        expect(setSearchTxt).toHaveBeenCalledWith('');

    });
});

