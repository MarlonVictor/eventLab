import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from "react-router-dom"

import { NotifyProvider } from './components/Notify'
import { client } from './lib/apollo'
import { Router } from "./Router"

function App() {
  return (
    <ApolloProvider client={client}>
      <NotifyProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </NotifyProvider>
    </ApolloProvider>
  )
}

export default App