import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_HI = gql`
    query {
        hi
    }
`;

export default () => (
    <Query query={GET_HI}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return <h1>{data.hi}</h1>;
        }}
    </Query>
);
