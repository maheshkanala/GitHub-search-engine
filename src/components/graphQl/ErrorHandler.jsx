import React from 'react'
import PropTypes from 'prop-types'

/**
 * 
 * @param {*} props.errMsg Sub component to display any business errors 
 */
const DEFAULT_ERROR_MESSAGE = "Unknown Error";

const ErrorHandler = ({ errMsg = DEFAULT_ERROR_MESSAGE }) => {
    return (
        <h3 className="graphQlErr">{errMsg}</h3>
    )
}

ErrorHandler.propTypes = {
    errMsg: PropTypes.string
}

export default ErrorHandler