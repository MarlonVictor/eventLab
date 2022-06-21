import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9v8pm1jo901z235v39pqi/master',
    cache: new InMemoryCache()
})