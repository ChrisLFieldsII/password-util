import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App'
import './index.scss'

const httpLink = new HttpLink({uri:'http://localhost:5000/graphql'})

const client = new ApolloClient({link:httpLink, cache:new InMemoryCache()})

ReactDOM.render((
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
    ), document.getElementById('root')
)
