import React from 'react';
import './App.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import Account from './components/Account'

const client = new ApolloClient({
  uri: "https://lavida-backend.herokuapp.com/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Account />
      </div>    
    </ApolloProvider>
  );
}

export default App;
