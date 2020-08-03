import { ApolloClient, InMemoryCache } from "@apollo/client";

//definindo client com o ApolloClient e um cache
export const client = new ApolloClient({
  //o endereco da api
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache: new InMemoryCache()
});
