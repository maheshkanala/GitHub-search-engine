import React from 'react'
import loadingImage from "../../resources/img/loading.gif";

/**
 * Functional Component to be reused to indicate loading status
 */
const LoadingIndicator = () => {

    return (
        <div className='loadingIcon'>
        <img alt="loading..."  src={loadingImage} />
        </div>
    )
}

export default LoadingIndicator