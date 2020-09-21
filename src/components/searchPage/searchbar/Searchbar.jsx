import React from 'react';
import PropTypes from 'prop-types'
import seachIcon from "../../../resources/img/seachIcon.png";
import clearIcon from "../../../resources/img/clearIcon.png";
import "./searchbar.scss";

const ENTER_KEYCODE = 13;

/**
 * 
 * @param {*} props Component to allow users to enter search criteria and clear the search 
 */
const Searchbar = props => {
    const { searchTxt, setSearchTxt, defaultSearchTxt, placeholder } = props;

    return (
        <div>
            <div className="searchPage__searchBar mt-3">

                <img
                    className="searchPage__searchBar--searchIcon"
                    alt="search-icon"
                    aria-hidden={true}
                    src={seachIcon} />


                <input
                    className={`searchPage__searchBar--searchTxt `}
                    placeholder={placeholder}
                    aria-label="Type Username to Search"
                    type="text"
                    tabIndex={1}
                    value={searchTxt}
                    onChange={evt => setSearchTxt(evt.target.value)}
                />

                <img
                    className="searchPage__searchBar--clearIcon"
                    alt="clear-button"
                    role="button"
                    tabIndex={2}
                    data-testid={"clearButton"}
                    src={clearIcon}
                    onClick={() => setSearchTxt(defaultSearchTxt)}
                    onKeyDown={evt => evt.keyCode === ENTER_KEYCODE && setSearchTxt(defaultSearchTxt)} />

            </div>


        </div>
    )
}

Searchbar.propTypes = {
    //username of the Github user
    searchTxt: PropTypes.string,
    //hook to update the state of searchTxt
    setSearchTxt: PropTypes.func,
    //default text to fetch the results from Github, without user input
    defaultSearchTxt: PropTypes.string,
    //Message to be displayed inside searchbar
    placeholder: PropTypes.string.isRequired,
}

export default Searchbar