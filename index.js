import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://51oelaenef.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://oe1ihmfuwb.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'H8ET47BDuSavGmLEs36dwPZv2V8fcbUzE1pn255LyEbw' ,
  });

const { entities } = client;

async function add(){
    const testAdd = await entities.shoppingList.add({
        item: 'test item',
    });
    console.log(testAdd);
};

add();