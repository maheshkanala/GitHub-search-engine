import React from 'react'
import PropTypes from 'prop-types'
import ErrorHandler from "../../graphQl/ErrorHandler";
import { MESSAGES } from "../../../constants/appConstants";

/**
 * 
 * @param {*} props Component to display the repositories list in the form of table 
 */
const RepoDisplay = (props) => {
    const repoCount = props.repos.totalCount;
    const repoList = props.repos.nodes;

    // GitHub UserName may be valid, but there might be no repositories.  
    if (repoCount === 0) {
        return <ErrorHandler errMsg={MESSAGES.GRAPHQL.DATA_ERR} />
    }


    return (
        <div className="repoResults">
            <table className="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Repo Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Repo URL</th>
                    </tr>
                </thead>
                <tbody>
                    {repoList.map((repo, index) => {
                        return <tr key={repo.id}>
                            <th scope="row">{index + 1}</th>
                            <td className="repoName">{repo.name}</td>
                            <td className="repoDesc">{repo.description || 'N/A'}</td>
                            <td className="repoLink">
                                <a href={repo.url} target='_blank' rel="noopener noreferrer">
                                    Link
                                </a>
                            </td>
                        </tr>
                    })}


                </tbody>
            </table>

        </div>
    )
}


RepoDisplay.propTypes = {
    repos: PropTypes.shape({
        //number of repos of a user in Github
        totalCount: PropTypes.number,

        // Contains the repository information
        nodes: PropTypes.array
    })
}

export default RepoDisplay