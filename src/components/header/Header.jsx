import React from 'react'
import PropTypes from 'prop-types'

const ACCEPTABLE_HEADERS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
/**
 * 
 * @param {*} props Generic Component to be used as header for different pages
 */
const Header = (props) => {
    const { HeadingLevel='h1', headingTxt, customClass } = props;

    return (
        <HeadingLevel className={customClass}>{headingTxt}</HeadingLevel>
    )
}

Header.propTypes = {
    // Attribute to decide the level of header
    HeadingLevel: PropTypes.oneOf(ACCEPTABLE_HEADERS),
    // Main content to be dispalyed on screen
    headingTxt: PropTypes.string,
    //If a header needs to be customized
    customClass: PropTypes.string
}


export default Header