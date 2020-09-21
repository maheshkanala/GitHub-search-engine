# GitHub Search Engine 

GitHub Search Engine is a User Interface that displays all repositories owned by a particular user in GitHub. This UI offers a search bar where search can be done by providing the User's name in the box and internally calls GitHub V4 API to retrieve a list of repos. 
 

## Where to Find it: 

Visit the below URL to access the UI and check for a list of repositories. The app is temporarily pushed to the AWS S3 bucket and hoisted as a static website. 

```bash
URL: http://painofcoding.s3-website-us-east-1.amazonaws.com/
```

## UI
#### Light Theme:
![Light Theme](https://raw.githubusercontent.com/maheshkanala/github-search-engine/master/src/resources/demo/githubSE_lightmode.PNG)
#### Dark Mode:
![Dark Theme](https://raw.githubusercontent.com/maheshkanala/github-search-engine/master/src/resources/demo/githubSE_darkmode.PNG)
## Features:

1. GitHub Search Engine UI is a React-based application and offers a dark mode for the users. Internally React Hooks were leveraged to apply the themes. 
2. This application uses GraphQL- a query language for connecting to GitHub v4 API by leveraging the **Query** type to pull required data fields like Repository Name, Description, and URL GitHub-user name as login parameter passed to the Query type.

## GraphQL: 
GraphQL is a query language for your API and a server-side runtime for executing queries using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is backed by your existing code and data. GraphQL can be used in place of REST API calls; Comparing with REST, the Query type operates like GET requests, while the Mutations type operates like POST/PATCH/DELETE. 

The GraphQL API v4 has a single endpoint:

```bash
https://api.github.com/graphql
```


 In GraphQL, a JSON-encoded body should be provided for performing a query or a mutation, so the HTTP verb is POST. GraphQL allows users to pass parameter values dynamically by using variables. Variables can make queries more dynamic and powerful, and they can reduce complexity when passing mutation input objects.


## Authentication:
Github recommends users to login via token instead of username and password. This token-based approach is useful for multiple environment architecture. This application needs a GitHub token to connect to GitHub API as fetch the required information. We can create personal access token by following instructions from the below link
```bash
https://docs.github.com/en/enterprise/2.17/user/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token
```

## React 
This application is developed from the react framework, implementing v16.13. 
Multi theme mode is developed leveraging *styled-components* package and react-hooks. *node-sass* package was used to style the components in scss. 

#### Graph QL
GitHub API v4 exposes its services in GraphQL. Apollo client is the GraphQL client with integrations for popular JavaScript libraries. It can be used to pull the data from a GraphQL server. To consume these services, the following packages were used. 
* **apollo-boost**: Apollo Boost is a zero-config way to start using Apollo Client. 
* **@apollo/client**: Allows to fetch data from your GraphQL server and build complex and reactive UIs using the React framework. 
* **grpahql**: The JavaScript reference implementation for GraphQL, dependency on other GraphQL libraries.
* **graphql-tag**: GrpahQL queries can be written straightforwardly using this package.

* *Jest* ,*enzyme* were used to write test cases for regular react components
* *@apollo/client/testing* was used to mock the GraphQL API and write the test cases 



## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified, and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.