import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Provider } from "react-redux"; // Makes redux store available to all container components
import { createStore } from "redux";
import reducer from './redux/reducers'
import App from './App'
import './index.scss'

const httpLink = new HttpLink({uri:'http://localhost:5000/graphql'})
const client = new ApolloClient({link:httpLink, cache:new InMemoryCache()})

const store = createStore(reducer)

const Root = (
    <Provider store={store}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'))
