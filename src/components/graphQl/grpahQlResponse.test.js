import React from "react";
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import { USR_REPO_SEARCH_QUERY } from "../../constants/grpahQlQuerys";
import LoadingIndicator from "../graphQl/LoadingIndicator";
import GraphqlReponseHandler from './GraphqlReponseHandler';
import { MESSAGES } from "../../constants/appConstants";


const { act } = renderer;

const MOCK_DATA = {
    request: {
        query: USR_REPO_SEARCH_QUERY,
        variables: { userId: "testUser" }
    },
    result: {
        data: {
            user: {
                repositories: {
                    totalCount: 4,
                    nodes: [
                        {
                            createdAt: '2017-09-08T03:53:09Z',
                            description: 'Demo and temporary files',
                            name: 'Repo Name 1',
                            url: 'https://github.com/testUser/repo1',
                            viewerPermission: 'ADMIN',
                            id: 'MDEwOlJlcG9zvcnkxMDI4MTUyNjk='
                        },
                        {
                            createdAt: '2019-02-13T17:43:06Z',
                            description: 'Demo and temporary files 2',
                            name: 'Repo Name 2',
                            url: 'https://github.com/testUser/repo2',
                            viewerPermission: 'WRITE',
                            id: 'MDEJlcG9zaXRvcnkxNzA1NTE2MTQ='
                        },
                        {
                            createdAt: '2020-04-23T16:44:20Z',
                            description: null,
                            name: 'Repo Name 3',
                            url: 'https://github.com/testUser/repo3',
                            viewerPermission: 'WRITE',
                            id: 'MDEwOlzaXRvcnkyNTgyNjg5MDY='
                        },
                        {
                            createdAt: '2020-09-13T09:35:24Z',
                            description: 'Demo and temporary files 4',
                            name: 'Repo Name 4',
                            url: 'https://github.com/testUser/repo4',
                            viewerPermission: 'ADMIN',
                            id: 'MDEwOlvcnkyOTUxMTk1NDY='
                        }
                    ]
                }
            }
        }
    }
}


it('should renders without error', () => {
    const component = renderer.create(
        <MockedProvider mocks={[MOCK_DATA]} addTypename={false}>
            <GraphqlReponseHandler searchTxt="" />
        </MockedProvider>
    );
    expect(component).toBeDefined();

    component.unmount();
});


it('should be in LOADING state when data is being fetched', () => {
    const component = renderer.create(
        <MockedProvider mocks={[]} addTypename={false}>
            <GraphqlReponseHandler searchTxt="testUser" />
        </MockedProvider>
    );
    expect(component.root.findByType(LoadingIndicator)).toBeDefined();
    component.unmount();
});


it('should render results component when data fetching is complete', async () => {
    const { act } = renderer;
    const component = renderer.create(
        <MockedProvider mocks={[MOCK_DATA]} addTypename={false}>
            <GraphqlReponseHandler searchTxt="testUser" />
        </MockedProvider>
    );

    await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
    });

    expect(component.toJSON().props.className).toBe('repoResults');
    component.unmount();
});

describe('should render Error Component when GitHub API returns error', () => {
    let component;
    const MOCK_DATA_WITH_GQL_ERROR = { ...MOCK_DATA, error: { graphQLErrors: new Error() } };
    const MOCK_DATA_WITH_NETWORK_ERROR = { ...MOCK_DATA, error: { networkError: new Error() } };
    

    it('should display Network Error Message', async () => {
        component = renderer.create(
            <MockedProvider mocks={[MOCK_DATA_WITH_NETWORK_ERROR]} addTypename={false}>
                <GraphqlReponseHandler searchTxt="testUser" />
            </MockedProvider>
        );
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
        });

        expect(component.toJSON().children[0]).toEqual(MESSAGES.GRAPHQL.NETWORK_ERR);
        component.unmount();
    });


    it('should display GrpahQL Error Message', async () => {
        component = renderer.create(
            <MockedProvider mocks={[MOCK_DATA_WITH_GQL_ERROR]} addTypename={false}>
                <GraphqlReponseHandler searchTxt="testUser" />
            </MockedProvider>
        );
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
        });
        expect(component.toJSON().children[0]).toEqual(MESSAGES.GRAPHQL.DATA_ERR);
        component.unmount();
    });



})    