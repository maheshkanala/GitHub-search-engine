import React, { useState } from 'react';
import Header from "../header/Header";
import Searchbar from './searchbar/Searchbar';
import GraphqlReponseHandler from "../graphQl/GraphqlReponseHandler";


/**
 * SearchPage is a wrapper component with searchEngine to fetch the gitHub Repositories using GraphQL
 */
const DEFAULT_SEARCH_TEXT = '';
const SearchPage = () => {

    const [searchTxt, setSearchTxt] = useState(DEFAULT_SEARCH_TEXT);

    return (
        <div className="searchPage">

            <Header
                HeadingLevel={'h3'}
                customClass={'searchPage__header'}
                headingTxt={'Search gitHub repositories'}
            />


            <Searchbar
                searchTxt={searchTxt}
                setSearchTxt={setSearchTxt}
                defaultSearchTxt={DEFAULT_SEARCH_TEXT}
                placeholder={'GitHub Username'}                
            />

            {shouldDisplayResults(searchTxt) && <GraphqlReponseHandler searchTxt={searchTxt} />}

        </div>

    )

}

const shouldDisplayResults = searchTxt => searchTxt !== DEFAULT_SEARCH_TEXT;


export default SearchPage