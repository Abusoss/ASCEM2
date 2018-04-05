import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Routes from '../../routes/index';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
    uri: Meteor.absoluteUrl('graphql')
});

const App = (
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
);

Meteor.startup(() => {
    render(App, document.getElementById('app'));
});
