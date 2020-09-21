import gql from "graphql-tag";

export const USR_REPO_SEARCH_QUERY = gql`
query ($userId: String!){
  user(login: $userId) {
    repositories(last: 100, isLocked: false) {
      totalCount
      nodes {
        createdAt
        description
        name
        url
        viewerPermission
        id
      }
    }
  }
}
`;

