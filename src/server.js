import { createVendiaClient } from ".vendia-client";

const client = createVendiaClient({
    apiUrl: `https://51oelaenef.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://oe1ihmfuwb.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: process.env.VENDIA_API_KEY ,
  })