import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import { URLs } from "./constants/appConstants";


const gitHubUser = new ApolloClient({
  uri: URLs.GRAPHQL,
  request: async operation => {
    operation.setContext({
      headers: {        
        authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`        
      }
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={gitHubUser}>
    
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
